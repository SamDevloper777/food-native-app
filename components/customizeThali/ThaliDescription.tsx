import { View, Text } from 'react-native'
import React from 'react'

const ThaliDescription = ({ title, time }: { title: string, time: string }) => {
    return (
        <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="text-xl font-bold">{title}</Text>
            <Text className="text-gray-500 mt-2">
                A deliciously crafted thali, offering a perfect balance of flavors...
                <Text className="text-[#FC913A]">Read More</Text>
            </Text>
            <View className="flex-row justify-between mt-4">
                <Text className="text-xs text-gray-500">⏱️ {time}</Text>
                <Text className="text-xs text-gray-500">🔥 250 Kcal</Text>
            </View>
        </View>
    )
}

export default ThaliDescription