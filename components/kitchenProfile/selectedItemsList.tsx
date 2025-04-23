import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  quantity: number;
};

type Thali = {
  thaliQuantity: number;
  items: ThaliItem[];
};

const SelectedItemsList = ({
  id,
  thaliItems,
}: {
  id: string;
  thaliItems: Record<string, Thali>;
}) => {
  // Get the thali for the specific thaliId
  const thali = thaliItems[id] || { items: [], thaliQuantity: 0 };
  const { items, thaliQuantity } = thali;

  // Calculate total cost for the specific thaliId, including thaliQuantity
  const totalCost = items.length
    ? (items
        .reduce((total: number, item: ThaliItem) => total + parseFloat(item.cost) * item.quantity, 0) * thaliQuantity)
        .toFixed(2)
    : '0.00';

  return (
    <TouchableOpacity
      className="border border-[#FC913A] px-6 py-3 rounded-lg flex-row items-center gap-3 justify-between"
      onPress={() => {
        Alert.alert('Selected Items (Raw)', JSON.stringify(thaliItems, null, 2));
      }}
      activeOpacity={0.8}
    >
      <View className="flex flex-row">
        <Ionicons
          name="bag-handle-outline"
          size={20}
          color="#fc913a"
          className="font-thick align-middle text-center my-auto"
        />
        <Text className="text-[#fc913a] font-bold ml-2 text-lg">
          {items.length} Item{items.length > 1 ? 's' : ''}
        </Text>
      </View>
      {totalCost !== '0.00' && (
        <>
          <View className="w-1 h-1 bg-[#fc913a] rounded-full" />
          <Text className="text-[#fc913a] font-bold text-lg">₹{totalCost}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SelectedItemsList;