import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const OrderCard = ({
    title,
    description,
    rating,
    time,
    cost,
    url,
}: {
    title: string
    description: string
    rating: number
    time: string
    cost: number
    url: string
}) => {
    return (
        <SafeAreaView className='px-6 mt-2 mb-4'>
            <View className='h-48 w-full rounded-[25px] relative shadow-lg shadow-gray-700'>
                <Image source={{ uri: url }} className='w-full h-full rounded-[25px]' />
                <View className='absolute z-10 top-0 right-0 w-[60%] h-full bg-white rounded-r-[25px]'>
                    <View className='flex flex-col justify-between h-full p-4'>
                        <View>
                            <Text className='text-[18px] font-bold'>{title}</Text>
                            <Text className='text-sm font-medium text-gray-500 mt-1' numberOfLines={1}>
                                {description}
                            </Text>
                            <Text className='text-sm font-bold text-[#2C8D2C] mt-1'>
                                ⭐ {rating} (300k+ Reviews)
                            </Text>
                            <View className='w-full h-[1px] bg-gray-200 mt-5' />
                        </View>
                        <View className='flex flex-row justify-between items-center'>
                            <View className='flex flex-col justify-between h-12'>
                                <Text className='text-[#FC913A] font-bold text-base'>${cost} for one</Text>
                                <View className='flex flex-row items-center space-x-1 gap-1'>
                                    <Ionicons name='time-outline' size={16} color='gray-200' />
                                    <Text className='text-xs text-gray-700'>{time}</Text>
                                </View>
                            </View>
                            <View className='w-[1px] h-12 bg-gray-200 mx-4' />
                            <TouchableOpacity className='bg-[#FC913A] px-4 py-1.5 rounded-full self-center' activeOpacity={0.8}>
                                <Text className='text-white text-md font-semibold'>Reorder</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OrderCard
