import { router } from 'expo-router';
import { Heart } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const KitchenCard = ({ id, Title, Cost, Time, Rating, Url }: { 
    id: number,
    Title: string, 
    Cost: string, 
    Time: string, 
    Rating: string, 
    Url: string 
}) => {
    return (
        <TouchableOpacity
            className="flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-full h-[148px] py-8 my-2 mx-auto"
            activeOpacity={0.8}
            onPress={() => {
                router.push({ pathname: '/(screens)/kitchenProfile', params: { title: Title, cost: Cost, rating: Rating, id: id.toString(), time: Time } })
            }}
        >
            <View className="w-32 h-32 bg-gray-200 rounded-full">
                <Image
                    source={{ uri: Url }}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    resizeMode="cover"
                />
            </View>
            <View className="flex-1 ml-4 gap-1">
                <View className='flex flex-col justify-between'>
                    <Text className="text-lg font-bold">{Title}</Text>
                    <Text className="text-gray-500">Offer valid today only</Text>
                </View>
                <View className="flex-row items-center align-middle gap-3 space-x-2 mt-1">
                    <Text className="text-gray-500">{Time}</Text>
                    <View className="w-1 h-1 bg-[#c7c7c7] rounded-full" />
                    <Text className="text-gray-500">{Rating} ⭐</Text>
                </View>
            </View>
            <View className='flex flex-col justify-between items-center h-full'>
                <TouchableOpacity>
                    <Heart size={24} color="gray" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default KitchenCard