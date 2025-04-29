import { router } from 'expo-router';
import { Heart } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const KitchenCard = ({ id, Title, Time, Rating, CoverUrl, LogoUrl, Tagline, Distance, DeliveryFee, ReviewCount }: { 
    id: number,
    Title: string, 
    Time: string, 
    Rating: string, 
    CoverUrl?: string,
    LogoUrl: string,
    Tagline?: string,
    Distance?: string,
    DeliveryFee?: number,
    ReviewCount?: number
}) => {
    return (
        <TouchableOpacity
            className="flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-full h-[148px] py-8 my-2 mx-auto"
            activeOpacity={0.8}
            onPress={() => {
                router.push({ pathname: '/(screens)/kitchenProfile', params: { id: id.toString()}})
            }}
        >
            <View className="w-32 h-32 bg-gray-200 rounded-full">
                <Image
                    source={{ uri: LogoUrl }}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    resizeMode="cover"
                />
            </View>
            <View className="flex-1 ml-4 gap-1">
                <View className='flex flex-col justify-between'>
                    <Text className="text-lg font-bold">{Title}</Text>
                    <Text numberOfLines={2} className="text-gray-500 text-ellipsis max-w-[160px]">{Tagline}</Text>
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