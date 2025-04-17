import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import AnimatedTick from '../../components/common/AnimatedTick'

const Confirm = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(screens)/postCheckout')
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View className="flex-1 justify-center items-center bg-white p-5">
      <AnimatedTick size={120} />
      <Text className="text-2xl font-bold mt-5 text-[#22c55e]">Order Confirmed!</Text>
      <Text className="text-base text-gray-600 mt-2.5 text-center">Your order has been placed successfully</Text>
    </View>
  )
}

export default Confirm