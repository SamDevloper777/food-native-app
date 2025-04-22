import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
};

const SelectedItemsList = ({
  id,
  title,
  cost,
  quantity,
  dispatch,
  thaliItems,
}: {
  id: string;
  title: string;
  cost?: number;
  quantity: number;
  dispatch: any;
  thaliItems: Record<string, ThaliItem[]>;
}) => {
  // Get the items for the specific thaliId
  const items = thaliItems[id] || [];

  // Calculate total cost for the specific thaliId
  const totalCost = items.length
    ? items
        .reduce((total: number, item: ThaliItem) => total + parseFloat(item.cost) * item.quantity, 0)
        .toFixed(2)
    : '0.00';

  return (
    <TouchableOpacity
      className="border border-[#FC913A] px-6 py-3 mb-5 mt-2 rounded-full flex-row items-center gap-3 justify-between mx-auto"
      onPress={() => {
        Alert.alert('Selected Items (Raw)', JSON.stringify(items, null, 2));
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
          {items.length} Items Selected
        </Text>
      </View>
      {cost !== undefined && (
        <>
          <View className="w-1 h-1 bg-[#fc913a] rounded-full" />
          <Text className="text-[#fc913a] font-bold text-lg">₹ {totalCost}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SelectedItemsList;