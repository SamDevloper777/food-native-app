import CoverImage from '@/components/kitchenProfile/coverImage';
import KitchenDetails from '@/components/kitchenProfile/kitchenDetails';
import Navigation from '@/components/kitchenProfile/navigation';
import OfferSection from '@/components/kitchenProfile/offerSection';
import RecommendedSection from '@/components/kitchenProfile/RecommendedSection';
import React from 'react';
import { ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { kitchens } from '@/utils/constants/home';

const KitchenProfile = () => {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  return (
    <ScrollView className="flex-1 bg-white relative">
      <Navigation />
      <CoverImage url={kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].coverUrl} />
      <KitchenDetails
        id={id}
      />
      <OfferSection kitchenId={id} />
      <RecommendedSection kitchenId={id} />
    </ScrollView>
  );
};

export default KitchenProfile;
