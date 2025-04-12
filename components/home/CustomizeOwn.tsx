import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const CustomizeOwn = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-2 mb-4">
      <Text className="text-gray-700 text-[16px]">
        Customize your own Thali
      </Text>
      <View className="w-[65px] h-[1px] bg-gray-200"/>
      <TouchableOpacity activeOpacity={0.9} onPress={() => router.push('/(tabs)/customizeOwnThali')}>
        <Text className="bg-[#FC913A] text-white text-[16px] px-5 py-3 rounded-full">
          Try now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomizeOwn;