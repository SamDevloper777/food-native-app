import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'

const Navigation = () => {
    return (
        <View className="flex-row items-center justify-between p-4 gap-2 absolute z-50">
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
                <View className='p-3 bg-[#ffffff47] rounded-full border-[1px] border-gray-200'>
                    <ChevronLeft size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Navigation