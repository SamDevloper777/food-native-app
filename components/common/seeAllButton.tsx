import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SeeAllButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/(screens)/seeAll')}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
        </TouchableOpacity>
    )
}

export default SeeAllButton