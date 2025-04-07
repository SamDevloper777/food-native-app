import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ExistingCard from './existingCard'
import { Ionicons } from '@expo/vector-icons'

const Cards = () => {
    return (
        <View className='px-4'>
            <Text className='text-lg font-semibold mt-2 mb-2'>Credit / Debit Card</Text>
            <ExistingCard />
            <TouchableOpacity className='border border-orange-400 rounded-2xl p-4 mb-4 flex-row items-center'>
                <View className='bg-orange-100 p-1.5 rounded-full'>
                    <Ionicons name='add' size={20} color='#FC913A' />
                </View>
                <View className='ml-3'>
                    <Text className='text-base font-bold text-black'>Add New Card</Text>
                    <Text className='text-sm text-gray-500'>Save and Pay via Cards.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cards