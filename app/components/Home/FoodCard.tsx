import { Heart, Plus } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const FoodCard = () => {
    return (
        <View className="flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-full h-[148px] py-8 my-2">
            <View className="w-32 h-32 bg-gray-200 rounded-full" />
            <View className="flex-1 ml-4">
                <Text className="text-lg font-bold">Pepperoni Pizza</Text>
                <Text className="text-gray-500">Offer valid today only</Text>
                <View className="flex-row items-center align-middle gap-3 space-x-2 mt-1">
                    <Text className="text-gray-500">20min</Text>
                    <View className="w-2 h-2 bg-[#c7c7c7] rounded-full" />
                    <Text className="text-gray-500">4.5 ⭐</Text>
                </View>
                <View className="flex-row items-center mt-2">
                    <Text className="text-xl font-bold">$10.00</Text>
                    <View className="ml-2 bg-red-500 px-2 py-1 rounded-md">
                        <Text className="text-white text-xs font-bold">25% Off</Text>
                    </View>
                </View>
            </View>
            <View className='flex flex-col justify-between items-center h-full'>
                <TouchableOpacity>
                    <Heart size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-black p-1 rounded-full">
                    <Plus size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FoodCard