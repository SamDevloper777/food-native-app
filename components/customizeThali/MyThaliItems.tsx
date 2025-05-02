import { Mythali } from '@/utils/constants/myThali';
import { categories, Category } from '@/utils/constants/thaliItems';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterParams, selectFilterParams, addItem, FilterParams } from '../../utils/slice/myThaliSlice';
import MyThaliItemCard from './MyThaliItemCard';
import React, { useCallback, useMemo, useState } from 'react';

interface ThaliItem {
  title: string;
  url: string;
}
const categoryKeyMap: Record<Category, keyof FilterParams> = {
  'Main Course': 'mainCourse',
  'Starters': 'starters',
  'Desserts': 'desserts',
};

const MyThaliItems = () => {
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

  const handleSelectAll = useCallback(() => {
    // Alert.alert('', JSON.stringify(data, null, 2))
    const categoryKey = categoryKeyMap[activeCategory];
    data.forEach((item) => {
      dispatch(addItem({
        id: `${activeCategory}-${item.title}`,
        title: item.title,
        url: item.url,
        category: categoryKey,
      }));
    });
  }, [data, dispatch, activeCategory]);

  return (
    <View>
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Add items to Thali</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={handleSelectAll}>
            <Text className="text-[#FC913A] font-bold text-lg">Select All ({data?.length})</Text>
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
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
        numColumns={2}
      />
    </View>
  );
};

export default React.memo(MyThaliItems);
