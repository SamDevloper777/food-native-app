import React, { memo, useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type KitchenCardProps = {
  id: number;
  Title: string;
  Time: string;
  Rating: string;
  CoverUrl?: string;
  LogoUrl: string;
  Tagline?: string;
  Distance?: string;
  DeliveryFee?: number;
  ReviewCount?: number;
};

const KitchenCard = memo(({
  id, Title, Time, Rating, CoverUrl, LogoUrl, Tagline, Distance = '-', DeliveryFee, ReviewCount
}: KitchenCardProps) => {
  
  const handlePress = useCallback(() => {
    router.push({ pathname: '/(screens)/kitchenProfile', params: { id: id.toString() } });
  }, [id]);

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between gap-2 bg-white rounded-2xl shadow-md w-full h-[148px] py-8 my-2 mx-auto"
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <View className="w-40 h-[148px] bg-gray-200 rounded-l-2xl overflow-hidden">
        <Image
          source={{ uri: LogoUrl }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 flex-col justify-center h-full px-4 py-6">
        <View className="flex flex-col justify-between py-3">
          <Text className="text-lg font-bold" numberOfLines={1}>{Title}</Text>
          <Text className="text-gray-500 max-w-[160px]" numberOfLines={1}>{Tagline}</Text>
          <Text className="text-sm font-bold text-[#2C8D2C] mt-1">⭐ {Rating} ({ReviewCount || '300k+'} Reviews)</Text>
        </View>

        <View className="w-full h-[1px] bg-gray-300" />

        <View className="flex-row justify-between items-center w-full py-4 px-3">
          <View className="flex-row items-center gap-2">
            <Ionicons name="location-outline" size={16} color="#fc913a" />
            <Text className="text-sm font-semibold">{Distance} km</Text>
          </View>

          <View className="w-[1px] h-full bg-gray-300" />

          <View className="flex-row items-center gap-2">
            <Ionicons name="time-outline" size={16} color="#fc913a" />
            <Text className="text-sm font-semibold">{Time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

KitchenCard.displayName = 'KitchenCard';

export default KitchenCard;
