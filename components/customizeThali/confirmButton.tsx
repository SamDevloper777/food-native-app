import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { handleAddToCart } from "@/utils/scripts/customizeThali";
import { Ionicons } from "@expo/vector-icons";
import { AppDispatch } from "@/utils/store";

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
};

const ConfirmButton = ({
  id,
  title,
  cost,
  quantity,
  dispatch,
  thaliItems,
  buttonText,
}: {
  id: string;
  title: string;
  cost: number;
  quantity: number;
  dispatch: AppDispatch;
  thaliItems: Record<string, ThaliItem[]>;
  buttonText: string;
}) => {
  const totalCost = thaliItems[id]
    ? thaliItems[id]
        .reduce((total: number, item: ThaliItem) => total + parseFloat(item.cost) * item.quantity, 0)
        .toFixed(2)
    : "0.00";

  return (
    <TouchableOpacity
      className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center justify-between absolute bottom-0 z-10 left-1/2 -translate-x-1/2 mb-3 gap-3"
      onPress={() =>
        handleAddToCart(
          id,
          title,
          cost.toString(),
          quantity.toString(),
          id,
          "Default description",
          dispatch,
          thaliItems[id]
        )
      }
      activeOpacity={0.9}
    >
      <View className="flex flex-row">
        {buttonText === "Confirm Thali" ? (
          <Ionicons name="cart-outline" size={20} color="white" />
        ) : (
          <Ionicons name="bag-handle-outline" size={20} color="white" />
        )}
        <Text className="text-white ml-2 text-lg">{buttonText}</Text>
      </View>
      <View className="w-1 h-1 bg-white rounded-full" />
      <Text className="text-white text-lg">₹ {totalCost}</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;