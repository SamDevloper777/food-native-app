import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { offersConstants } from '@/utils/constants/kitchenProfile'
import { Ionicons } from '@expo/vector-icons'

const OfferSection = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-10 pb-6" contentContainerStyle={{ paddingHorizontal: (Dimensions.get('window').width / 4) - 60 }}>
            <View className="flex flex-row gap-10">
                {offersConstants.map((offer, index) => (
                    <TouchableOpacity key={index} className="bg-[#fcfcfc] w-[250px] h-28 rounded-[25px] flex flex-row overflow-hidden justify-center items-center px-4 shadow-md shadow-gray-400" activeOpacity={0.8}>
                        <View className="w-[35%] h-full">
                            <Ionicons name='pricetag-outline' color={'#fc913a'} size={48} className='font-thick align-middle text-center my-auto' />
                        </View>
                        <View className="w-[65%] h-full flex flex-col justify-center items-center gap-1">
                            <Text className="text-[16px] font-bold">{offer.title}</Text>
                            <Text className="text-[16px] font-medium text-gray-500 text-center leading-snug">{offer.code}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default OfferSection