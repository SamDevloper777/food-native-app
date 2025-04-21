import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface SeeAllButtonProps {
    listType: 'All Thalis' | 'Kitchens' | 'Specials' | 'Kitchen Vegetarian' | 'Kitchen Specials' | 'Kitchen All Thalis';
    kitchenId?: string
}

const SeeAllButton = ({ listType, kitchenId }: SeeAllButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push({ pathname: '/(screens)/seeAll', params: { listType, searchParam: '', kitchenId: kitchenId }})}>
            <Text className="text-[#FC913A] font-bold text-lg">See All</Text>
        </TouchableOpacity>
    )
}

export default SeeAllButton
