import { Ionicons } from '@expo/vector-icons';
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
            className="flex-row items-center justify-between gap-2 bg-white rounded-2xl shadow-md w-full h-[148px] py-8 my-2 mx-auto"
            activeOpacity={0.8}
            onPress={() => {
                router.push({ pathname: '/(screens)/kitchenProfile', params: { id: id.toString() } })
            }}
        >
            <View className="w-40 h-[148px] bg-gray-200 rounded-l-2xl overflow-hidden relative">
                <Image
                    source={{ uri: LogoUrl }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>
            <View className="flex-1 flex-col justify-center items-start h-full p-4 py-6">
                <View className='flex flex-col justify-between py-3 items-start'>
                    <Text className="text-lg font-bold" numberOfLines={1}>{Title}</Text>
                    <Text numberOfLines={1} className="text-gray-500 text-ellipsis max-w-[160px]">{Tagline}</Text>
                    <Text className="text-sm font-bold text-[#2C8D2C] mt-1">⭐ {Rating} (300k+ Reviews)</Text>
                </View>
                <View className="w-full h-[1px] bg-gray-300" />
                <View className="flex-row justify-between items-center w-full h-full py-4 px-3">
                    <View className="flex-row items-center space-x-1 gap-2">
                        <Ionicons name="location-outline" size={16} color="#fc913a" className='font-semibold'/>
                        <Text className="text-sm font-semibold">{Distance} km</Text>
                    </View>
                    <View className="w-[1px] h-full bg-gray-300" />
                    <View className="flex-row items-center space-x-1 gap-2">
                        <Ionicons name="time-outline" size={16} color="#fc913a" />
                        <Text className="text-sm font-semibold">{Time}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default KitchenCard