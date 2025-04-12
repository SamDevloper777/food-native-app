import ThaliItems from "@/components/customizeThali/ThaliItems";
import PopularChoices from "@/components/customizeThali/ThaliItems";
import { addThaliItem } from "@/utils/slice/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router"; // ✅ Fixed router import
import { ChevronLeft, Heart, Minus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

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
    <ScrollView className="flex-1 bg-white p-4 pb-24">
      <View className="flex-row justify-end items-center px-4">
        <TouchableOpacity activeOpacity={0.8}>
          <Heart size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex items-center w-[280px] h-[280px] rounded-full bg-gray-200 mx-auto" />
      <View className="flex-row justify-center items-center mt-4">
      </View>
      <ThaliItems />
      <View className="flex-row justify-between items-center mt-6">
        <View>
          <Text className="text-lg font-bold text-black">Total Cost: $5</Text>
        </View>
        <TouchableOpacity
          className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center"
          onPress={handleAddToCart}
        >
          <Ionicons name="search-outline" size={20} color="white" />
          <Text className="text-white ml-2 text-lg">View Similar Thali</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomizeThali;

