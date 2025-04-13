import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ThaliItemCard from './ThaliItemCard';

type Category = 'Main Course' | 'Starters' | 'Desserts';

const categories: Category[] = ['Main Course', 'Starters', 'Desserts'];

const thalis = [
  {
    title: 'Rice',
    cost: '10.00',
    url: 'https://media.gettyimages.com/id/1173266401/photo/rice-cooked-rice-steamed-rice-on-bowl.jpg?s=1024x1024&w=gi&k=20&c=dGvi6TsXkRDS0cKjwmAbt0T7VY-C7V5t683l3xYBmHk=',
  },
  {
    title: 'Dal',
    cost: '8.00',
    url: 'https://media.gettyimages.com/id/95977300/photo/many-lentil-daal.jpg?s=1024x1024&w=gi&k=20&c=DO3z_pUtgRQKl2k8ntev0kR6HlyFwFmphuyZcKGwL50=',
  },
  {
    title: 'Roti',
    cost: '12.00',
    url: 'https://media.gettyimages.com/id/1334104847/photo/homemade-indian-roti-or-chapati-indian-bread.jpg?s=1024x1024&w=gi&k=20&c=MN3tdYOYl2avq53Y8hfh_pcQb8fEa1__uXT9faeVznU=',
  },
  {
    title: 'Mix Veg',
    cost: '13.00',
    url: 'https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/08/Easy-Mix-Vegetables-EOP.jpg?resize=1024%2C683&ssl=1',
  },
  {
    title: 'Panner Butter Masala Thali with Roti', 
    cost: '13.00',
    url: 'https://imgs.search.brave.com/zokFzOhSiCrW4U9-fYm4dNn-q3dopKq9rigZf63SGOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzY0Lzc3Lzgw/LzM2MF9GXzc2NDc3/ODA3M19TVzNtM1Q3/OTQ0WUtySmtTOVFW/TkxPTmYxUWxzc2Jp/Mi5qcGc',
  },
];

const Starters = [
  {
    title: 'Samosa',
    cost: '10.00',
    url: 'https://media.gettyimages.com/id/1317460663/photo/close-up-of-fried-food-on-table-west-chester-pennsylvania-united-states-usa.jpg?s=1024x1024&w=gi&k=20&c=AySJkJqK__DBkYoBXIhOZlPbS8pWQHhdrIDHMa8a2Zg=',
  },
  {
    title: 'Pakora',
    cost: '8.00',
    url: 'https://media.gettyimages.com/id/2153418999/photo/vegetable-pakoda.webp?s=1024x1024&w=gi&k=20&c=cyJ0pwDYtumrd6kCS33hZCUsEuDMCQiUSszjHI2jEeQ=',
  },
  {
    title: 'Aloo Tikki',
    cost: '12.00',
    url: 'https://media.gettyimages.com/id/1334105145/photo/pindi-chole-curry-served-hot-in-a-bowl-with-other-food-items.jpg?s=1024x1024&w=gi&k=20&c=kdkYAkr0zsGghGMFgWm_TBBvgDiJK8IM9x7pK19SHz4=',
  },
  {
    title: 'Paneer Tikka',
    cost: '13.00',
    url: 'https://media.gettyimages.com/id/1334104009/photo/paneer-tikka-with-mint-chutney-and-onion-rings.jpg?s=1024x1024&w=gi&k=20&c=GF9uV13mTa_170Kr1x6yypoc2ztvTBQsQmev0DZLlis=',
  },
];

const Desserts = [
  {
    title: 'Gulab Jamun',
    cost: '10.00',
    url: 'https://media.gettyimages.com/id/1337213309/photo/gulab-jamun.jpg?s=1024x1024&w=gi&k=20&c=f_SJDl-JzgqVtw9vWLTR9D1oLLL8xVZ2xvonu4sMu6k=',
  },
  {
    title: 'Kheer',
    cost: '8.00',
    url: 'https://media.gettyimages.com/id/1308121408/photo/kheer-indian-rice-pudding-india-dessert-food.jpg?s=1024x1024&w=gi&k=20&c=n6WQ-c7UIunfNDXPJH4CoAihVyjhz0gNrvOXDXqChME=',
  },
  {
    title: 'Ice Cream',
    cost: '12.00',
    url: 'https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=1024x1024&w=gi&k=20&c=iVT3ROh3y_tiS2bzFQOIKnFT5oXoqACl_5gzBvRJtTw=',
  },
  {
    title: 'Rasgulla',
    cost: '13.00',
    url: 'https://media.gettyimages.com/id/1369633008/photo/indian-sweet-or-dessert-close-up-of-sweet-food-in-plate-on-table-against-purple-background.jpg?s=612x612&w=gi&k=20&c=dJ00J86-Xqpj-n-2vXDQYcQtZW2jZ9nEAyvQFt_nu5I=',
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