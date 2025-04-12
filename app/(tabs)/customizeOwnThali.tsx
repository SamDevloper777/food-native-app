import Thali from "@/components/customizeThali/Thali";
import ThaliItems from "@/components/customizeThali/ThaliItems";
import { addThaliItem } from "@/utils/slice/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, Heart } from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const CustomizeThali = () => {
  const { id, title, cost, time } = useLocalSearchParams<{
    id: string;
    title: string;
    cost: string;
    time: string;
  }>();

  const [quantity, setQuantity] = useState(1);
  const price = parseFloat(cost);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addThaliItem({
        id: parseInt(id),
        name: title,
        price: price,
        quantity: quantity,
      })
    );
    router.push("/(screens)/cart");
  };

  return (
    <>
      <ScrollView className="flex-1 bg-white p-4 pb-24 relative">
        <View className="flex-row justify-between items-center px-4">
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
            <ChevronLeft size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Heart size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <Thali />
        <TouchableOpacity
          className="border border-[#FC913A] px-6 py-3 my-6 rounded-full flex-row items-center gap-3 justify-between mx-auto"
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <View className="flex flex-row">
            <Text className="text-[#fc913a] font-bold ml-2 text-lg">
              0 Items Selected
            </Text>
          </View>
          <View className="w-1 h-1 bg-[#fc913a] rounded-full" />
          <Text className="text-[#fc913a] font-bold text-lg">$ 0</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center mt-4">
        </View>
        <ThaliItems />
      </ScrollView>
      <TouchableOpacity
        className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center justify-between absolute bottom-0 z-10 left-1/2 -translate-x-1/2 mb-3 gap-3"
        onPress={handleAddToCart}
        activeOpacity={0.8}
      >
        <View className="flex flex-row">
          <Ionicons name="cart-outline" size={20} color="white" />
          <Text className="text-white ml-2 text-lg">
            Confirm Thali
          </Text>
        </View>
        <View className="w-1 h-1 bg-white rounded-full" />
        <Text className="text-white text-lg">$ 150</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomizeThali;

