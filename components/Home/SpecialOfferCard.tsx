import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SpecialOfferCard = () => {
  return ( 
    <View className="bg-[#fdfdfd] rounded-xl p-4 flex-row items-center shadow-md w-[95%] h-[185px] px-8 mx-auto">
      {/* Left Side: Offer Text */}
      <View className="flex-1 gap-2">
        <Text className="text-[22px] font-bold">Special Offer</Text>
        <Text className="text-gray-500 text-[16px] leading-6 w-[80%]">
          Discount 20% off{"\n"}applied at checkout
        </Text>
        <TouchableOpacity className="bg-orange-500 px-3 py-2 rounded-full self-start mt-2">
          <Text className="text-white text-md font-medium px-2">Order Now</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side: Bigger Rounded Placeholder */}
      <View className="w-40 h-40 bg-gray-200 rounded-full" />
    </View>
  );
};

export default SpecialOfferCard;
