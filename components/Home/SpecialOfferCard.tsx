import { globalOffers } from "@/utils/constants/home";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const SpecialOfferCard = ({globalOfferId}: {globalOfferId: string}) => {
  return (
    <View className="bg-[#fdfdfd] rounded-xl p-4 flex-row items-center shadow-md w-[382px] h-[185px] shadow-gray-500 mx-auto">
      {/* Left Side: Offer Text */}
      <View className="flex-1 gap-2">
        <Text className="text-[22px] font-bold" numberOfLines={1}>{ globalOffers.filter(offer => offer.id.toString() === globalOfferId)[0].title }</Text>
        <Text
          numberOfLines={3}
          className="text-gray-500 text-[16px] leading-6 w-[80%]"
        >
          { globalOffers.filter(offer => offer.id.toString() === globalOfferId)[0].description }
        </Text>
        <TouchableOpacity className="bg-[#FC913A] px-3 py-2 rounded-full self-start mt-2">
          <Text className="text-white text-md font-medium px-2">Order Now</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side: Bigger Rounded Placeholder */}
      <View className="w-40 h-40 bg-gray-200 rounded-full">
        <Image
          source={{ uri: globalOffers.filter(offer => offer.id.toString() === globalOfferId)[0].imageUrl }}
          style={{ width: '100%', height: '100%', borderRadius: 100 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default SpecialOfferCard;
