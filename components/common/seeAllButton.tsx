import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface SeeAllButtonProps {
    listType: 'All Thalis' | 'Kitchens' | 'Specials'
}

const SeeAllButton = ({ listType }: SeeAllButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push({ pathname: '/(screens)/seeAll', params: { listType } })}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
        </TouchableOpacity>
    )
}

export default SeeAllButton
