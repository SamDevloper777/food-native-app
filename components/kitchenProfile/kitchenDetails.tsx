import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { kitchens } from '@/utils/constants/home'

const KitchenDetails = ({id}: {
    id: string
}) => {
    return (
        <View className="-mt-[72px] mx-8 bg-white rounded-2xl shadow-md p-4">
            <View className="flex-row justify-between items-start px-3">
                {/* Image and Text */}
                <View className="flex-row">
                    <View className='overflow-hidden fixed w-16 h-16 rounded-full justify-center items-center'>
                        <Image
                            source={{
                                uri: kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].logoUrl,
                            }}
                            className="w-full h-full"
                            resizeMode="center"
                            style={{ transform: [{ scale: 2 }] }}
                        />
                    </View>
                    <View className="ml-4">
                        <Text className="text-[20px] font-bold" numberOfLines={1}>{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].title}</Text>
                        <Text className="text-md text-gray-500" numberOfLines={1}>{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].tagline}</Text>
                    </View>
                </View>

                {/* Icons */}
                <View className="flex-row space-x-3 gap-8 items-center justify-center self-center">
                    <Ionicons name="share-social-outline" size={28} color="black" style={{ alignSelf: 'center' }} />
                </View>
            </View>

            {/* Divider */}
            <View className="border-b border-gray-200 my-3" />

            {/* Bottom Section */}
            <View className="flex-row justify-between items-center px-3 ">
                {/* Ratings & Delivery */}
                <View className=''>
                    <View className="flex-row items-center mb-1">
                        <Ionicons name="star" size={16} color="green" />
                        <Text className="ml-1 font-medium text-[16px]">{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].rating}</Text>
                        <Text className="ml-1 text-gray-500 text-[14px]">({kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].reviewCount}k+ Reviews)</Text>
                    </View>
                    <Text className="text-[14px] font-medium">
                        <Text className="text-gray-500">{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].deliveryFee === '0' ? "Free Delivery" : `Delivery Charges: ₹${kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].deliveryFee}`}</Text>
                    </Text>
                </View>

                <View style={{ borderLeftWidth: 1, borderLeftColor: '#E5E5E5' }} className="h-16 my-3" />

                {/* Distance & Time */}
                <View className="flex-col items-center justify-center mr-8 gap-1">
                    <View className="flex-row items-center justify-center">
                        <Ionicons name="location" size={18} color="#fc913a" />
                        <Text className="ml-1 text-[16px] font-medium">{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].distance} km</Text>
                    </View>
                    <View style={{ borderLeftWidth: 1, borderLeftColor: '#FC913A', borderStyle: 'dashed' }} className="h-6 w-1" />
                    <View className="flex-row items-center justify-center">
                        <Ionicons name="time" size={18} color="#fc913a" />
                        <Text className="ml-1 text-[16px] font-medium">{kitchens.filter((kitchen) => kitchen.id === parseInt(id))[0].time}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default KitchenDetails
