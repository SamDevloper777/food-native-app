import CoverImage from '@/components/kitchenProfile/coverImage';
import KitchenDetails from '@/components/kitchenProfile/kitchenDetails';
import Navigation from '@/components/kitchenProfile/navigation';
import OfferSection from '@/components/kitchenProfile/offerSection';
import RecommendedSection from '@/components/kitchenProfile/RecommendedSection';
import React from 'react';
import { ScrollView } from 'react-native';

const kitchenProfile = () => {
  return (
    <ScrollView className="flex-1 bg-white relative">
      <Navigation />
      <CoverImage />
      <KitchenDetails />
      <OfferSection />
      <RecommendedSection />
    </ScrollView>
  )
}

export default kitchenProfile

