import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

const ConfirmButton = ({thaliId}: {thaliId: string}) => {
  const cartItems = useSelector(selectThaliItems);
  return (
    <TouchableOpacity
      className={`${thaliId in cartItems ? 'bg-[#fc913a]' : 'bg-gray-200'} px-6 py-3 rounded-lg flex-row items-center justify-between gap-3`}
      onPress={() =>
        router.push('/(screens)/cart')
      }
      disabled={!(thaliId in cartItems)}
      activeOpacity={0.9}
    >
      <View className="flex flex-row">
        <Ionicons name="cart-outline" size={20} color="white" />
        <Text className="text-white font-bold ml-2 text-lg">Confirm</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConfirmButton;