import { addThaliItem } from "@/utils/slice/cartSlice";
import { useLocalSearchParams, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const CustomizeThali = () => {
  const { id, title, cost, time, rating } = useLocalSearchParams<{
    id: string;
    title: string;
    cost: string;
    time: string;
    rating: string;
  }>();

  const dispatch = useDispatch();

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    dispatch(
      addThaliItem({
        id: parseInt(id),
        name: title,
        price: parseFloat(cost),
        quantity: 1,
      })
    );
    router.replace("/(tabs)/cart"); // Go to Cart
  };

  return (
    <View className="flex-1 bg-white justify-center items-center p-6">
      {/* 🔥 Thali Details */}
      <Text className="text-3xl font-bold mb-4">{title}</Text>
      <Text className="text-lg text-gray-500 mb-2">⏰ {time}</Text>
      <Text className="text-lg text-gray-500 mb-2">⭐ {rating}</Text>
      <Text className="text-xl font-bold text-red-500 mb-4">${cost}</Text>

      {/* ✅ Add to Cart Button */}
      <TouchableOpacity
        onPress={handleAddToCart}
        className="w-full bg-red-500 py-4 rounded-lg"
      >
        <Text className="text-white text-center text-lg font-semibold">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomizeThali;
