import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ThaliItemCard from './ThaliItemCard';
import { categories, Category } from '@/utils/constants/thaliItems';
import { thalis } from '@/utils/constants/kitchenProfile';
import { useDispatch } from 'react-redux';
import { addItem } from '@/utils/slice/customizeOwnThaliSlice';

interface ThaliItemsProps {
  kitchenId: string;
  thaliId: string
}

interface ThaliItem {
  title: string;
  cost: number;
  url: string;
}

const ThaliItems: React.FC<ThaliItemsProps> = ({ kitchenId, thaliId }) => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState<Category>('Main Course');

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const mainCourse = useMemo(() => {
    return thalis
      .filter(item => item.kitchenId.toString() === kitchenId && item.id === parseInt(thaliId))
      .map(item => item.mainCourse)
      .flat()
      .map(i => ({ ...i, cost: Number(i.cost) }));
  }, [kitchenId]);
  
  const starters = useMemo(() => {
    return thalis
      .filter(item => item.kitchenId.toString() === kitchenId && item.id === parseInt(thaliId))
      .map(item => item.starters)
      .flat()
      .map(i => ({ ...i, cost: Number(i.cost) }));
  }, [kitchenId]);
  
  const desserts = useMemo(() => {
    return thalis
      .filter(item => item.kitchenId.toString() === kitchenId && item.id === parseInt(thaliId))
      .map(item => item.desserts)
      .flat()
      .map(i => ({ ...i, cost: Number(i.cost) }));
  }, [kitchenId]);
  
  const data = useMemo<ThaliItem[]>(() => {
    switch (activeCategory) {
      case 'Main Course':
        return mainCourse;
      case 'Starters':
        return starters;
      case 'Desserts':
        return desserts;
      default:
        return [];
    }
  }, [activeCategory, mainCourse, starters, desserts]);

  const renderItem = useCallback(({ item }: { item: ThaliItem }) => (
    <ThaliItemCard
      id={`${activeCategory}-${item.title}`}
      title={item.title}
      cost={item.cost.toString()}
      url={item.url}
      thaliId={thaliId}
      kitchenId={kitchenId}
    />
  ), [activeCategory]);

  const keyExtractor = useCallback((item: ThaliItem) => 
    `${activeCategory}-${item.title}`, 
    [activeCategory]
  );

  const renderCategoryTab = useCallback((category: Category) => (
    <TouchableOpacity
      key={category}
      onPress={() => handleCategoryChange(category)}
      activeOpacity={0.8}
      className={`px-4 py-2 rounded-full mr-2 ${
        activeCategory === category ? 'bg-[#FC913A]' : 'bg-gray-100'
      }`}
    >
      <Text
        className={`text-[16px] font-medium ${
          activeCategory === category ? 'text-white' : 'text-gray-700'
        }`}
      >
        {category}
      </Text>
    </TouchableOpacity>
  ), [activeCategory, handleCategoryChange]);
  
  const handleSelectAll = useCallback(() => {
    data.forEach((item) => {
      dispatch(addItem({
        id: `${activeCategory}-${item.title}`,
        title: item.title,
        cost: item.cost.toString(),
        quantity: 1,
        thaliId,
        kitchenId,
      }));
    });
  }, [data, dispatch, activeCategory, thaliId, kitchenId]);

  return (
    <View>
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Add items to Thali</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={handleSelectAll}>
            <Text className="text-[#FC913A] font-bold text-lg">Select All ({data.length})</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => renderCategoryTab(item)}
          keyExtractor={(item) => item}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 12, gap: 16 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
};

export default React.memo(ThaliItems);
