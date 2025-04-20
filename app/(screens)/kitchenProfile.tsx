import CoverImage from '@/components/kitchenProfile/coverImage';
import KitchenDetails from '@/components/kitchenProfile/kitchenDetails';
import Navigation from '@/components/kitchenProfile/navigation';
import OfferSection from '@/components/kitchenProfile/offerSection';
import RecommendedSection from '@/components/kitchenProfile/RecommendedSection';
import React from 'react';
import { ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const KitchenProfile = () => {
  const { title, rating, id, time, coverUrl, logoUrl, tagline, distance, deliveryFee, reviewCount } = useLocalSearchParams<{
    title: string;
    rating: string;
    id: string;
    time: string;
    coverUrl: string;
    logoUrl: string;
    tagline: string;
    distance: string;
    deliveryFee: string;
    reviewCount: string;
  }>();

  return (
    <ScrollView className="flex-1 bg-white relative">
      <Navigation />
      <CoverImage url={coverUrl} /> 
      <KitchenDetails 
        url={logoUrl}
        title={title}
        tagline={tagline}
        rating={rating}
        deliveryTime={time}
        distance={distance}
        deliveryFee={parseInt(deliveryFee)}
        reviewCount={parseInt(reviewCount)}
      />
      <OfferSection kitchenId={id}/>
      <RecommendedSection kitchenId={id}/>
    </ScrollView>
  );
};

export default KitchenProfile;
