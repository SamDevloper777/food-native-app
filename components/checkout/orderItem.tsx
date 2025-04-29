import { thalis } from '@/utils/constants/kitchenProfile'
import React from 'react'
import { Image, Text, View } from 'react-native'

const OrderItem = ({ id }: { id: string }) => {
    return (
        <View className="mt-4 flex flex-row gap-4 justify-start items-center">
            <Image
                source={{ uri: thalis.filter(thali => thali.id === parseInt(id))[0]?.url }}
                className="w-20 h-20 rounded-full"
            />
            <View className='flex flex-col'>
                <Text className="text-xl font-semibold">{thalis.filter(thali => thali.id === parseInt(id))[0]?.title}</Text>
                <View className="flex-row items-center">
                    <Text className="text-[#FC913A] text-xl text-center align-middle">★★★★★ </Text>
                    <Text className="text-gray-500 text-sm">({thalis.filter(thali => thali.id === parseInt(id))[0]?.rating})</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderItem