import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'

const Navigation = () => {
    return (
        <View className="flex-row items-center p-4 gap-2">
            <TouchableOpacity onPress={() => router.back()}>
                <ChevronLeft size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[22px] font-bold">Profile Settings</Text>
        </View>
    )
}

export default Navigation