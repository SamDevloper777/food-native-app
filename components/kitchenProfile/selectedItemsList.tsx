import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { handleAddToCart } from '@/utils/scripts/customizeThali'
import { Ionicons } from '@expo/vector-icons'

const SelectedItemsList = ({id, title, cost, quantity, dispatch, thaliItems}: {id: string, title: string, cost: number, quantity: number, dispatch: any, thaliItems: any}) => {
    return (
        <TouchableOpacity
            className="border border-[#FC913A] px-6 py-3 mb-5 mt-2 rounded-full flex-row items-center gap-3 justify-between mx-auto"
            onPress={() => handleAddToCart(id, title, cost.toString(), quantity.toString(), dispatch)}
            activeOpacity={0.8}
        >
            <TouchableOpacity className="flex flex-row" activeOpacity={0.8} onPress={() => router.push("/(screens)/cart")}>
                <Ionicons name="bag-handle-outline" size={20} color="#fc913a" className="font-thick align-middle text-center my-auto" />
                <Text className="text-[#fc913a] font-bold ml-2 text-lg">
                    {thaliItems.length} Items Selected
                </Text>
            </TouchableOpacity>
            <View className="w-1 h-1 bg-[#fc913a] rounded-full" />
            <Text className="text-[#fc913a] font-bold text-lg">₹ {thaliItems.reduce((total: number, item: any) => total + (parseFloat(item.cost) * item.quantity), 0).toFixed(2)}</Text>
        </TouchableOpacity>
    )
}

export default SelectedItemsList