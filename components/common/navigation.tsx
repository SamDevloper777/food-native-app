import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Ionicons } from '@expo/vector-icons'

const Navigation = ({ title, hasHeart }: { title?: string, hasHeart?: boolean }) => {
    return (
        <View className='flex-row items-center justify-between'>
            <View className="flex-row items-center gap-4 justify-between">
                <TouchableOpacity onPress={() => router.back()}>
                    <ChevronLeft size={24} color="black" />
                </TouchableOpacity>
                {title && <Text className="text-[22px] font-bold">{title}</Text>}
            </View>
            {hasHeart && (
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Navigation