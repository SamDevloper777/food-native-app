import React, { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import CoverImage from '@/components/kitchenProfile/coverImage';
import KitchenDetails from '@/components/kitchenProfile/kitchenDetails';
import Navigation from '@/components/kitchenProfile/navigation';
import OfferSection from '@/components/kitchenProfile/offerSection';
import RecommendedSection from '@/components/kitchenProfile/RecommendedSection';
import { kitchens } from '@/utils/constants/home';

const KitchenProfile = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const kitchen = useMemo(() => {
    const parsedId = parseInt(id ?? '', 10);
    return kitchens.find(k => k.id === parsedId);
  }, [id]);

  if (!kitchen) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-500 text-lg">Kitchen not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 20 }}>
      <Navigation />
      <CoverImage url={kitchen.coverUrl} />
      <KitchenDetails id={id} />
      <OfferSection kitchenId={id} />
      <RecommendedSection kitchenId={id} />
    </ScrollView>
  );
};

export default React.memo(KitchenProfile);
