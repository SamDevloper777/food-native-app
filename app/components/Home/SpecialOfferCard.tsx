import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SpecialOfferCard = () => {
  return (
    <View className="bg-white rounded-xl p-4 flex-row items-center shadow-md w-[95%] mx-auto">
      {/* Left Side: Offer Text */}
      <View className="flex-1 gap-1">
        <Text className="text-[20px] font-bold">Special Offer</Text>
        <Text className="text-gray-500 text-[16px] leading-5 w-[80%]">
          Discount 20% off{"\n"}applied at checkout
        </Text>
        <TouchableOpacity className="bg-red-500 px-3 py-2 rounded-full self-start mt-2">
          <Text className="text-white text-sm font-medium">Order Now</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side: Bigger Rounded Placeholder */}
      <View className="w-36 h-36 bg-gray-300 rounded-full ml-4" />
    </View>
  );
};

export default SpecialOfferCard;
