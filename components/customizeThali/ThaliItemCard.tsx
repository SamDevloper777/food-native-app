import { Minus, Plus } from 'lucide-react-native';
import React from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';

const ThaliItemCard = ({
  Title,
  Cost,
  Url,
  isSelected,
  onToggle,
  quantity,
  onIncrement,
  onDecrement,
}: {
  Title: string;
  Cost: string;
  Url: string;
  isSelected: boolean;
  onToggle: () => void;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between gap-5 bg-white rounded-2xl shadow-md w-full h-[148px] py-4 px-4 my-2 mx-auto ${
        isSelected ? 'border border-[#FC913A]' : ''
      }`}
      activeOpacity={0.8}
      onPress={onToggle}
    >
      <View className="w-32 h-32 bg-gray-200 rounded-full">
        <Image
          source={{ uri: Url }}
          style={{ width: '100%', height: '100%', borderRadius: 100 }}
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 flex-col justify-center items-start h-full">
        <Text
          className="text-[16px] font-bold"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {Title}
        </Text>
        <Text className="text-lg font-semibold text-gray-500 mt-1">${Cost}</Text>
      </View>
      <View className="w-[1px] h-[70%] bg-gray-200" />
      <View className="flex flex-col justify-between items-center h-full gap-8">
        <Switch
          trackColor={{ false: '#e0e0e0', true: '#FFCDA4' }}
          thumbColor={isSelected ? '#FC913A' : '#e0e0e0'}
          onValueChange={onToggle}
          ios_backgroundColor="#e0e0e0"
          value={isSelected}
        />
        <View
          className={`flex-row ${isSelected ? 'bg-[#FC913A]' : 'bg-[#e0e0e0]'} rounded-full px-6 py-3 items-center gap-3`}
        >
          <TouchableOpacity onPress={onDecrement} disabled={!isSelected}>
            <Minus size={16} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-md font-bold">
            {quantity < 10 ? `0${quantity}` : quantity}
          </Text>
          <TouchableOpacity onPress={onIncrement} disabled={!isSelected}>
            <Plus size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ThaliItemCard;