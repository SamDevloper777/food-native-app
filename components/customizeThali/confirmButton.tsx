import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { handleAddToCart } from '@/utils/scripts/customizeThali';
import { Ionicons } from '@expo/vector-icons';
import { AppDispatch } from '@/utils/store';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
};

type Thali = {
  thaliQuantity: number;
  items: ThaliItem[];
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
  cost?: string;
  quantity?: number; // Optional, unused unless clarified
  dispatch: AppDispatch;
  thaliItems: Record<string, Thali>;
  buttonText: string;
}) => {
  // Get the thali for the specific thaliId
  const thali = thaliItems[id] || { items: [], thaliQuantity: 0 };
  const { items, thaliQuantity } = thali;

  // Calculate total cost, including thaliQuantity
  const totalCost = items.length
    ? (items
        .reduce((total: number, item: ThaliItem) => total + parseFloat(item.cost) * item.quantity, 0) * thaliQuantity)
        .toFixed(2)
    : '0.00';

  return (
    <TouchableOpacity
      className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center justify-between absolute bottom-0 z-10 left-1/2 -translate-x-1/2 mb-3 gap-3"
      onPress={() =>
        handleAddToCart(
          id,
          title,
          cost || totalCost, // Use provided cost or calculated totalCost
          thaliQuantity.toString(), // Pass thaliQuantity instead of quantity
          id,
          'Default description',
          dispatch,
          items // Pass thali.items
        )
      }
      activeOpacity={0.9}
    >
      <View className="flex flex-row">
        {buttonText === 'Confirm Thali' ? (
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