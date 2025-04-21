import ThaliCard from '@/components/common/ThaliCard';
import Navigation from '@/components/common/navigation';
import KitchenCard from '@/components/home/KitchenCard';
import { kitchens } from '@/utils/constants/home';
import { thalis } from '@/utils/constants/kitchenProfile';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

const SeeAll = () => {
  const { listType, searchParam = '', kitchenId } = useLocalSearchParams<{
    listType: 'All Thalis' | 'Kitchens' | 'Specials' | 'Kitchen Vegetarian' | 'Kitchen Specials' | 'Kitchen All Thalis';
    searchParam?: string;
    kitchenId?: string
  }>();

  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const validListType = listType && ['All Thalis', 'Kitchens', 'Specials', 'Kitchen Vegetarian', 'Kitchen Specials', 'Kitchen All Thalis'].includes(listType)
    ? listType
    : 'All Thalis';

  const data = useMemo(() => {
    switch (validListType) {
      case "All Thalis":
        return thalis;
      case "Kitchens":
        return kitchens;
      case "Specials":
        return thalis.filter(thali => thali.special);
      case "Kitchen Vegetarian":
        return thalis.filter(thali => thali.type === 'veg' && thali.kitchenId.toString() === kitchenId);
      case "Kitchen Specials":
        return thalis.filter(thali => thali.special && thali.kitchenId.toString() === kitchenId);
      case "Kitchen All Thalis":
        return thalis.filter(thali => thali.kitchenId.toString() === kitchenId);
      default:
        return [];
    }
  }, [validListType]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const originalData = data;
      const filtered = originalData.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }, 150);

    return () => clearTimeout(timeout);
  }, [searchTerm, validListType]);


  const renderItems = () => {
    if (validListType === 'Kitchens') {
      return filteredData.map(kitchen => (
        <KitchenCard
          key={kitchen.id}
          id={kitchen.id}
          Title={kitchen.name || kitchen.title}
          Rating={kitchen.rating}
          Time={kitchen.time}
          LogoUrl={kitchen.url}
        />
      ));
    }

    return filteredData.map(thali => (
      <ThaliCard
        key={thali.id}
        id={thali.id}
        Title={thali.title}
        Cost={thali.cost}
        Rating={thali.rating}
        Time={thali.time}
        Url={thali.url}
        description={thali.description}
      />
    ));
  };

  const placeholder = `Search your favourite ${validListType === 'All Thalis' ? 'thali' : validListType === 'Kitchens' ? 'kitchen' : 'special'
    }`;

   return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView className="flex-1 bg-white px-4">
        <Navigation title={validListType.slice(8)} />

        {/* Search Bar */}
        <View className="flex-row items-center justify-between bg-[#fcfcfc] rounded-full px-4 py-3 mb-6 shadow-md">
          <View className="flex-row items-center flex-1 gap-2">
            <MagnifyingGlassIcon size={26} color="gray" />
            <TextInput
              value={searchTerm}
              onChangeText={setSearchTerm}
              placeholder={placeholder}
              placeholderTextColor="#9CA3AF"
              className="text-gray-500 flex-1 text-[16px]"
            />
          </View>
          <TouchableOpacity>
            <AdjustmentsHorizontalIcon size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* Render Results */}
        {filteredData.length > 0 ? (
          renderItems()
        ) : (
          <View className="items-center justify-center p-4">
            <Text className="text-gray-500 text-center">
              No {validListType === 'All Thalis' ? 'thali' : validListType === 'Kitchens' ? 'kitchen' : 'special'}{' '}
              found with the given search term
            </Text>
          </View>
        )}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SeeAll;
