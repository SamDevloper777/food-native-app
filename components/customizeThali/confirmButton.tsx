import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { handleAddToCart } from '@/utils/scripts/customizeThali'
import { Ionicons } from '@expo/vector-icons'

const ConfirmButton = ({id, title, cost, quantity, dispatch, thaliItems}: {id: string, title: string, cost: number, quantity: number, dispatch: any, thaliItems: any}) => {
    return (
        <TouchableOpacity
            className="bg-[#FC913A] px-6 py-3 rounded-full flex-row items-center justify-between absolute bottom-0 z-10 left-1/2 -translate-x-1/2 mb-3 gap-3"
            onPress={() => handleAddToCart(id, title, cost.toString(), quantity.toString(), dispatch)}
            activeOpacity={0.8}
        >
            <View className="flex flex-row">
                <Ionicons name="cart-outline" size={20} color="white" />
                <Text className="text-white ml-2 text-lg">
                    Confirm Thali
                </Text>
            </View>
            <View className="w-1 h-1 bg-white rounded-full" />
            <Text className="text-white text-lg">₹ {thaliItems.reduce((total: number, item: any) => total + (parseFloat(item.cost) * item.quantity), 0).toFixed(2)}</Text>
        </TouchableOpacity>
    )
}

export default ConfirmButton