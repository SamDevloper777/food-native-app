import { Mythali } from '@/utils/constants/myThali';
import { categories, Category } from '@/utils/constants/thaliItems';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterParams, selectFilterParams } from '../../utils/slice/myThaliSlice';
import MyThaliItemCard from './MyThaliItemCard';

interface ThaliItem {
  title: string;
  url: string;
}

const MyThaliItems: React.FC = () => {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilterParams);

  const [activeCategory, setActiveCategory] = useState<Category>('Main Course');

  const data = useMemo<ThaliItem[]>(() => {
    // Filter the items based on active category
    switch (activeCategory) {
      case 'Main Course':
        return Mythali.mainCourse;
      case 'Starters':
        return Mythali.starters;
      case 'Desserts':
        return Mythali.desserts;
      default:
        return [];
    }
  }, [activeCategory]);

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const renderItem = useCallback(({ item }: { item: ThaliItem }) => (
    <MyThaliItemCard
      id={`${activeCategory}-${item.title}`}
      title={item.title}
      url={item.url}
      activeCategory={activeCategory === 'Main Course' ? 'mainCourse' : activeCategory === 'Starters' ? 'starters' : 'desserts'}
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
      className={`px-4 py-2 rounded-full mr-2 ${activeCategory === category ? 'bg-[#FC913A]' : 'bg-gray-100'}`}
    >
      <Text className={`text-[16px] font-medium ${activeCategory === category ? 'text-white' : 'text-gray-700'}`}>
        {category}
      </Text>
    </TouchableOpacity>
  ), [activeCategory, handleCategoryChange]);

  return (
    <View>
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Add items to Thali</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
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
        contentContainerStyle={{ paddingHorizontal: 8, gap: 16 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
};

export default React.memo(MyThaliItems);
