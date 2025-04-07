import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const ExistingCard = () => {
    return (
        <View className='bg-white rounded-2xl p-4 mb-3 flex-row items-center justify-between shadow-sm border border-gray-200'>
            <View className='flex-row items-center'>
                <FontAwesome name='cc-mastercard' size={32} color='#EB001B' />
                <View className='ml-3'>
                    <Text className='text-base font-bold'>Mastercard **** **** 4589</Text>
                    <Text className='text-sm text-gray-500'>Expires on 16/24</Text>
                </View>
            </View>
            <Ionicons name='radio-button-on' size={22} color='#FC913A' />
        </View>
    )
}

export default ExistingCard