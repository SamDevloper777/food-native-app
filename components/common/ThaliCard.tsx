import { RootState } from '@/utils/store';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeartIcon from './heartIcon';

const ThaliCard = memo(({ id, kitchenId, Title, Cost, Time, Rating, Url, description, thaliOffer, type }: {
    id: number,
    kitchenId: number,
    Title: string,
    Cost: string,
    Time: string,
    Rating: string,
    type: string,
    Url: string,
    description: string,
    thaliOffer?: string
}) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    return (
        <TouchableOpacity
            className="flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-full h-[148px] py-8 my-2 mx-auto"
            activeOpacity={0.8}
            onPress={() => {
                router.push({ pathname: '/(screens)/customizeThali', params: { title: Title, cost: Cost, rating: Rating, id: id.toString(), time: Time, kitchenId: kitchenId } })
            }}
        >
            <View className="w-32 h-32 bg-gray-200 rounded-full">
                <Image
                    source={{ uri: Url }}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    contentFit="cover"
                    transition={200}
                    cachePolicy="memory-disk"
                />
            </View>
            <View className="flex-1 ml-4">
                <Text numberOfLines={1} className="text-lg font-bold">{Title}</Text>
                <View>
                    <Text numberOfLines={2} className="text-gray-500">
                        {description.length > 80 ? description.substring(0, 80) + '...' : description}
                    </Text>
                </View>
                <View className="flex-row items-center align-middle gap-3 space-x-2 mt-1">
                    <Text className="text-gray-500">{Time}</Text>
                    <View className="w-1 h-1 bg-[#c7c7c7] rounded-full" />
                    <Text className="text-gray-500">{Rating} ⭐</Text>
                </View>
                <View className="flex-row items-center mt-2">
                    <Text className="text-xl font-bold">₹ {Cost}</Text>
                    {thaliOffer && (
                        <View className="ml-2 bg-[#FC913A] px-2 py-1 rounded-md">
                            <Text numberOfLines={1} className="text-white text-xs font-bold">{thaliOffer}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View className='flex flex-col justify-between items-start h-full mb-10 gap-12 align-middle'>
                <HeartIcon id={id} />
                <View className='w-8 h-8 rounded-md border border-black ml-3 px-[4px] py-1'>
                    {
                        type === 'veg' ?
                        <View className='w-5 h-5 rounded-full bg-green-800'/> : <View className='w-5 h-5 rounded-full bg-red-800'/>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
});

ThaliCard.displayName = 'ThaliCard';

export default ThaliCard;