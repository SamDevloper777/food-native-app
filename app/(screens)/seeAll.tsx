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

// Define types for the data structures
interface MenuItem {
  title: string;
  cost: string;
  url: string;
}

interface Thali {
  id: number;
  kitchenId: number;
  title: string;
  cost: string;
  rating: string;
  time: string;
  type: "veg" | "non-veg";
  special: boolean;
  url: string;
  description: string;
  mainCourse?: MenuItem[];
  starters?: MenuItem[];
  desserts?: MenuItem[];
}

interface Kitchen {
  id: number;
  name?: string;
  title?: string;
  rating: string;
  time: string;
  logoUrl: string;
  tagline: string;
}

const SeeAll = () => {
  const { listType, searchParam = '', kitchenId, filterParams } = useLocalSearchParams<{
    listType:
      | 'All Thalis'
      | 'Kitchens'
      | 'Specials'
      | 'Kitchen Vegetarian'
      | 'Kitchen Specials'
      | 'Kitchen All Thalis';
    searchParam?: string;
    kitchenId?: string;
    filterParams?: string; 
  }>();

  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [filteredData, setFilteredData] = useState<(Thali | Kitchen)[]>([]);

  // Parse filterParams into a proper object if it's passed in the params
  const parsedFilterParams: {
    mainCourse?: string[];
    starters?: string[];
    desserts?: string[];
  } = useMemo(() => {
    try {
      return filterParams ? JSON.parse(filterParams) : {};
    } catch {
      return {};
    }
  }, [filterParams]);

  const validListType =
    listType &&
    [
      'All Thalis',
      'Kitchens',
      'Specials',
      'Kitchen Vegetarian',
      'Kitchen Specials',
      'Kitchen All Thalis',
    ].includes(listType)
      ? listType
      : 'All Thalis';

  const data = useMemo(() => {
    switch (validListType) {
      case 'All Thalis':
        return thalis as Thali[];
      case 'Kitchens':
        return kitchens as Kitchen[];
      case 'Specials':
        return (thalis as Thali[]).filter((thali) => thali.special);
      case 'Kitchen Vegetarian':
        return (thalis as Thali[]).filter(
          (thali) =>
            thali.type === 'veg' && thali.kitchenId.toString() === kitchenId
        );
      case 'Kitchen Specials':
        return (thalis as Thali[]).filter(
          (thali) =>
            thali.special && thali.kitchenId.toString() === kitchenId
        );
      case 'Kitchen All Thalis':
        return (thalis as Thali[]).filter(
          (thali) => thali.kitchenId.toString() === kitchenId
        );
      default:
        return [] as (Thali | Kitchen)[];
    }
  }, [validListType, kitchenId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let filtered: (Thali | Kitchen)[] = [];

      if (Object.keys(parsedFilterParams).length > 0) {
        // Use filterParams object for advanced filtering
        filtered = (data as Thali[]).filter((thali) => {
          return Object.entries(parsedFilterParams).every(([section, items]) => {
            const lowerItems = (items as string[]).map((s) => s.toLowerCase());
            const thaliItems = (thali[section as keyof Thali] as MenuItem[] | undefined)?.map(
              (m) => m.title.toLowerCase()
            ) || [];

            return lowerItems.every((item) =>
              thaliItems.some((title) => title.includes(item))
            );
          });
        });
      } else {
        // Only search by title
        const term = searchTerm.toLowerCase();
        filtered = data.filter((item) => {
          if ('logoUrl' in item) return false;
          return (item.title || '').toLowerCase().includes(term);
        });
      }

      setFilteredData(filtered);
    }, 150);

    return () => clearTimeout(timeout);
  }, [searchTerm, data, parsedFilterParams]);

  const renderItems = () => {
    if (validListType === 'Kitchens') {
      return filteredData.map((item) => {
        const kitchen = item as Kitchen;
        return (
          <KitchenCard
            key={kitchen.id}
            id={kitchen.id}
            Title={kitchen.name || kitchen.title || ''}
            Rating={kitchen.rating}
            Time={kitchen.time}
            LogoUrl={kitchen.logoUrl}
            Tagline={kitchen.tagline}
          />
        );
      });
    }

    return filteredData.map((item) => {
      const thali = item as Thali;
      const mainCourseTotal = thali.mainCourse?.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0);
      const startersTotal = thali.starters?.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0);
      const dessertsTotal = thali.desserts?.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0);
  
      const totalCost = (mainCourseTotal || 0) + (startersTotal || 0) + (dessertsTotal || 0);
      return (
        <ThaliCard
          key={thali.id}
          id={thali.id}
          Title={thali.title}
          Cost={totalCost.toString() || ''}
          Rating={thali.rating}
          Time={thali.time}
          Url={thali.url}
          description={thali.description}
          kitchenId={thali.kitchenId}
          type={thali.type}
        />
      );
    });
  };

  const placeholder = `Search your favourite ${
    validListType === 'All Thalis'
      ? 'thali'
      : validListType === 'Kitchens'
      ? 'kitchen'
      : 'special'
  }`;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView className="flex-1 bg-white px-4">
        <Navigation
          title={
            validListType === 'All Thalis'
              ? 'All Thalis'
              : validListType === 'Kitchens'
              ? 'Kitchens'
              : validListType === 'Specials'
              ? 'Specials'
              : validListType.slice(8)
          }
        />

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
        </View>

        {/* Render Results */}
        {filteredData.length > 0 ? (
          renderItems()
        ) : (
          <View className="items-center justify-center p-4">
            <Text className="text-gray-500 text-center">
              No{' '}
              {validListType === 'All Thalis'
                ? 'thali'
                : validListType === 'Kitchens'
                ? 'kitchen'
                : 'special'}{' '}
              found with the given search term
            </Text>
          </View>
        )}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SeeAll;
