import { addThaliItem } from "@/utils/slice/cartSlice";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const CustomizeThali = () => {
  const { id, title, cost, time, rating } = useLocalSearchParams<{
    id: string;
    title: string;
    cost: string;
    time: string;
    rating: string;
  }>();
  const [quantity, setQuantity] = useState(1);
  const price = cost;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };


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
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity>
          <ChevronLeft size={24} color="black" onPress={() => router.replace("/(tabs)/home")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Heart size={24} color="gray" />
        </TouchableOpacity>
      </View>View

      <View className="flex items-center w-[280px] h-[280px] rounded-full bg-gray-200 mx-auto" />

      {/* Quantity Selector */}
      <View className="flex-row justify-center items-center my-4">
        <View className="flex-row bg-red-500 rounded-full px-4 py-2 items-center space-x-2 gap-2">
          {/* Minus Button */}
          <TouchableOpacity onPress={handleDecrement}>
            <Minus size={16} color="white" />
          </TouchableOpacity>

          {/* Quantity */}
          <Text className="text-white text-md font-bold">
            {quantity < 10 ? `0${quantity}` : quantity}
          </Text>

          {/* Plus Button */}
          <TouchableOpacity onPress={handleIncrement}>
            <Plus size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Pizza Info */}
      <View className="bg-gray-100 p-4 rounded-lg">
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="text-gray-500 mt-2">
          Baked to perfection on a crispy golden crust, this pizza delivers the
          perfect balance of bold flavors and cheesy goodness...
          <Text className="text-red-500">Read More</Text>
        </Text>

        <View className="flex-row justify-between mt-4">
          <Text className="text-xs text-gray-500">⏱️ {time}</Text>
          <Text className="text-xs text-gray-500">🌶️ Medium</Text>
          <Text className="text-xs text-gray-500">🔥 250 Kcal</Text>
        </View>
      </View>

      {/* Toppings */}
      <Text className="text-lg font-bold mt-6">Toppings</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
        {[
          "🍄",
          "🧅",
          "🍕",
          "🥬",
          "🍳",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-gray-200 p-3 mx-1 rounded-full"
          >
            <Text className="text-xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Price & Add to Bag */}
      <View className="flex-row justify-between items-center mt-6">
        <View>
          {
            quantity > 1 &&
            <Text className="text-gray-500 line-through">${price}</Text>
          }
          <Text className="text-lg font-bold text-black">${(parseInt(price) * quantity).toFixed(2)}</Text>
        </View>
        <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-full flex-row items-center">
          <ShoppingBag size={20} color="white" />
          <Text className="text-white ml-2">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomizeThali;
