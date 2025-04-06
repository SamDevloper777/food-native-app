import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MapPinIcon,
  BellIcon,
  ChevronDownIcon,
} from "react-native-heroicons/solid";

const LocationHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <View> 
        <Text className="text-gray-400 text-md">Location</Text>
        <View className="flex-row items-center mt-1">
          <MapPinIcon size={18} color="#ef4444" />
          <Text className="text-black font-bold ml-1 text-[18px]">
            New York, USA
          </Text>
          <ChevronDownIcon size={18} color="black" className="ml-1" />
        </View>
      </View>
      <TouchableOpacity className="relative">
        <View className="bg-gray-100 rounded-full p-2">
          <BellIcon size={32} color="black" />
        </View>
        <View className="w-3 h-3 bg-orange-500 rounded-full absolute top-1 right-1" />
      </TouchableOpacity>
    </View>
  );
};

export default LocationHeader;