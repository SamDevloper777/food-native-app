import { addThaliItem } from "@/utils/slice/cartSlice";
import { router } from "expo-router";
import { Heart } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

interface FoodCardProps {
  id: number;
  Title: string;
  Cost: number;
  Time: string;
  Rating: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, Title, Cost, Time, Rating }) => {
  const dispatch = useDispatch();

  // ✅ Navigate to CustomizeThali & pass food details
  const handleCustomizeThali = () => {
    router.push({
      pathname: "/(screens)/customizeThali",
      params: {
        id,
        title: Title,
        cost: Cost.toString(),
        time: Time,
        rating: Rating,
      },
    });
  };

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    dispatch(
      addThaliItem({
        id,
        name: Title,
        price: Cost,
        quantity: 1,
      })
    );
  };

  return (
    <TouchableOpacity
      className="flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-[95%] h-[148px] py-8 my-2 mx-auto"
      activeOpacity={0.75}
      onPress={handleCustomizeThali}
    >
      {/* 🔥 Food Image Placeholder */}
      <View className="w-32 h-32 bg-gray-200 rounded-full" />

      {/* ⚡️ Food Details */}
      <View className="flex-1 ml-4">
        <Text className="text-lg font-bold">{Title}</Text>
        <Text className="text-gray-500">Offer valid today only</Text>
        <View className="flex-row items-center align-middle gap-3 space-x-2 mt-1">
          <Text className="text-gray-500">{Time}</Text>
          <View className="w-2 h-2 bg-[#c7c7c7] rounded-full" />
          <Text className="text-gray-500">{Rating} ⭐</Text>
        </View>
        <View className="flex-row items-center mt-2">
          <Text className="text-xl font-bold">${Cost}</Text>
          <View className="ml-2 bg-red-500 px-2 py-1 rounded-md">
            <Text className="text-white text-xs font-bold">25% Off</Text>
          </View>
        </View>
      </View>

      {/* ❤️ Favorite Button + Add to Cart */}
      <View className="flex flex-col justify-between items-center h-full">
        <TouchableOpacity>
          <Heart size={24} color="gray" />
        </TouchableOpacity>

        {/* 🛒 Add to Cart Button */}
        <TouchableOpacity
          onPress={handleAddToCart}
          className="bg-green-500 px-3 py-2 rounded-lg mt-2"
        >
          <Text className="text-white text-xs font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
