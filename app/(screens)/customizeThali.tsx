import { addThaliItem } from "@/utils/slice/cartSlice";
import { useLocalSearchParams, useRouter } from "expo-router"; // ✅ Fixed router import
import { ChevronLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react-native";
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
    router.replace("/(screens)/cart");
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Heart size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex items-center w-[280px] h-[280px] rounded-full bg-gray-200 mx-auto" />
      <View className="flex-row justify-center items-center my-4">
        <View className="flex-row bg-[#FC913A] rounded-full px-4 py-2 items-center gap-2">
          <TouchableOpacity onPress={handleDecrement}>
            <Minus size={16} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-md font-bold">
            {quantity < 10 ? `0${quantity}` : quantity}
          </Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Plus size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-gray-100 p-4 rounded-lg">
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="text-gray-500 mt-2">
          A deliciously crafted thali, offering a perfect balance of flavors...
          <Text className="text-[#FC913A]">Read More</Text>
        </Text>
        <View className="flex-row justify-between mt-4">
          <Text className="text-xs text-gray-500">⏱️ {time}</Text>
          <Text className="text-xs text-gray-500">🔥 250 Kcal</Text>
        </View>
      </View>
      <Text className="text-lg font-bold mt-6">Toppings</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
        {["🍄", "🧅", "🍕", "🥬", "🍳"].map((item, index) => (
          <TouchableOpacity key={index} className="bg-gray-200 p-3 mx-1 rounded-full">
            <Text className="text-xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-row justify-between items-center mt-6">
        <View>
          {quantity > 1 && <Text className="text-gray-500 line-through">${price.toFixed(2)}</Text>}
          <Text className="text-lg font-bold text-black">${(price * quantity).toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center"
          onPress={handleAddToCart}
        >
          <ShoppingBag size={20} color="white" />
          <Text className="text-white ml-2">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomizeThali;
