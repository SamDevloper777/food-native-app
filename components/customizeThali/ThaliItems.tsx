import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ThaliItemCard from './ThaliItemCard';

type Category = 'Main Course' | 'Starters' | 'Desserts';

const categories: Category[] = ['Main Course', 'Starters', 'Desserts'];

const thalis = [
  {
    title: 'Rice',
    cost: '10.00',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Dal',
    cost: '8.00',
    url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Roti',
    cost: '12.00',
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mix Veg',
    cost: '13.00',
    url: 'https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Panner Butter Masala Thali with Roti', 
    cost: '13.00',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Starters = [
  {
    title: 'Samosa',
    cost: '10.00',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Pakora',
    cost: '8.00',
    url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Aloo Tikki',
    cost: '12.00',
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Paneer Tikka',
    cost: '13.00',
    url: 'https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Desserts = [
  {
    title: 'Gulab Jamun',
    cost: '10.00',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Kheer',
    cost: '8.00',
    url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Ice Cream',
    cost: '12.00',
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Rasgulla',
    cost: '13.00',
    url: 'https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ThaliItems: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Main Course');
  const [selectedItems, setSelectedItems] = useState<{
    [key in Category]: { [title: string]: { isSelected: boolean; quantity: number } };
  }>({
    'Main Course': {},
    Starters: {},
    Desserts: {},
  });

  const handleToggle = (category: Category, title: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [title]: {
          isSelected: !prev[category][title]?.isSelected,
          quantity: prev[category][title]?.quantity ?? 1,
        },
      },
    }));
  };

  const handleIncrement = (category: Category, title: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [title]: {
          ...prev[category][title],
          quantity: (prev[category][title]?.quantity ?? 1) + 1,
        },
      },
    }));
  };

  const handleDecrement = (category: Category, title: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [title]: {
          ...prev[category][title],
          quantity: Math.max(1, (prev[category][title]?.quantity ?? 1) - 1),
        },
      },
    }));
  };

  const renderCards = () => {
    let items;
    switch (activeCategory) {
      case 'Main Course':
        items = thalis;
        break;
      case 'Starters':
        items = Starters;
        break;
      case 'Desserts':
        items = Desserts;
        break;
      default:
        return null;
    }

    return items.map((item) => (
      <ThaliItemCard
        key={`${activeCategory}-${item.title}`}
        Title={item.title}
        Cost={item.cost}
        Url={item.url}
        isSelected={selectedItems[activeCategory][item.title]?.isSelected ?? false}
        onToggle={() => handleToggle(activeCategory, item.title)}
        quantity={selectedItems[activeCategory][item.title]?.quantity ?? 1}
        onIncrement={() => handleIncrement(activeCategory, item.title)}
        onDecrement={() => handleDecrement(activeCategory, item.title)}
      />
    ));
  };

  return (
    <View className="pb-[76px]">
      {/* Header */}
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Add items to Thali</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
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
          ))}
        </ScrollView>
      </View>

      {/* Dynamic Cards */}
      <View className="px-2 space-y-4">{renderCards()}</View>
    </View>
  );
};

export default ThaliItems;