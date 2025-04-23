import { selectThaliItems } from "@/utils/slice/customizeOwnThaliSlice";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MapPinIcon,
  BellIcon,
  ChevronDownIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";

const LocationHeader = () => {
  const cartItems = useSelector(selectThaliItems);
  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <View>
        <Text className="text-gray-400 text-md">Location</Text>
        <View className="flex-row items-center mt-1">
          <MapPinIcon size={18} color="#FF7504" />
          <Text className="text-black font-bold ml-1 text-[18px]">
            New York, USA
          </Text>
          <ChevronDownIcon size={18} color="black" className="ml-1" />
        </View>
      </View>
      <View className="flex flex-row gap-5">
        <TouchableOpacity className="relative" onPress={() => router.push('/(screens)/cart')}>
          <View className="bg-gray-100 rounded-full p-2">
            <Ionicons name="cart-outline" size={32} color="black" />
          </View>
          {cartItems && Object.keys(cartItems).length > 0 &&
            <View className="w-3 h-3 bg-[#FC913A] rounded-full absolute top-1 right-1" />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationHeader;