import { View, Text } from 'react-native'
import React from 'react'

const HoriontalDividerWithText = ({ text }: { text: string }) => (
    <View className="flex-row items-center my-6 mx-6">
        <View className="flex-1 h-px bg-gray-300 opacity-70" />
        <Text className="mx-6 text-gray-500 font-semibold">{text}</Text>
        <View className="flex-1 h-px bg-gray-300 opacity-70" />
    </View>
)

export default HoriontalDividerWithText