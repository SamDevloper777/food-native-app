import OrderItem from '@/components/checkout/orderItem'
import Navigation from '@/components/common/navigation'
import { kitchens } from '@/utils/constants/home'
import { clearAll } from '@/utils/slice/customizeOwnThaliSlice'
import { clearPaymentDetails } from '@/utils/slice/paymentSlice'
import { RootState } from '@/utils/store'
import { router } from 'expo-router'
import { Download, MessageSquare, PhoneCall } from 'lucide-react-native'
import React from 'react'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const PostCheckout = () => {
  const dispatch = useDispatch()
  const orderDetails = useSelector((state: RootState) => state.payment)
  return (
    <ScrollView className="bg-white flex-1 px-8">
      <Navigation title="Order Details" />
      {Object.entries(orderDetails.cartDetails).map(([thaliId]) => (
        <OrderItem
          key={thaliId}
          id={thaliId}
        />
      ))}

      <View className="flex-row space-x-4 mt-4 gap-4">
        <Pressable className="flex-1 border border-gray-400 border-dashed py-4 rounded-[25px] items-center">
          <Text className="text-gray-400 font-semibold">Write a Review</Text>
        </Pressable>
        <TouchableOpacity className="flex-1 bg-[#FC913A] py-4 rounded-[25px] items-center" activeOpacity={0.8} onPress={() => {
          dispatch(clearAll())
          dispatch(clearPaymentDetails())
          router.push({ pathname: '/(screens)/kitchenProfile', params: { id: orderDetails.cartDetails[Object.keys(orderDetails.cartDetails)[0]].kitchenId } })
        }}>
          <Text className="text-white font-semibold">Book Again</Text>
        </TouchableOpacity>
      </View>

      {/* Service Provider */}
      <Text className="mt-6 mb-2 text-base font-semibold">About Kitchen</Text>
      <View className="bg-gray-100 p-4 rounded-xl flex-row justify-between items-center mx-auto w-full">
        <View className='flex flex-col items-start justify-center'>
          <Text className="font-bold text-lg" numberOfLines={1}>
            {kitchens.filter(kitchen => kitchen.id === parseInt(orderDetails.cartDetails[Object.keys(orderDetails.cartDetails)[0]].kitchenId))[0]?.title}
          </Text>
          <Text className="text-gray-600" numberOfLines={1}>
            {kitchens.filter(kitchen => kitchen.id === parseInt(orderDetails.cartDetails[Object.keys(orderDetails.cartDetails)[0]].kitchenId))[0]?.tagline}
          </Text>
        </View>
        <View className="flex-row space-x-3 gap-6">
          <Pressable className="bg-[#FC913A] p-2 rounded-full">
            <PhoneCall color="white" size={20} />
          </Pressable>
          <View className="bg-gray-300 w-[1px]" />
          <Pressable className="bg-gray-200 p-2 rounded-full">
            <MessageSquare color="#000" size={20} />
          </Pressable>
        </View>
      </View>

      {/* Booking Status */}
      <Text className="mt-6 mb-2 text-base font-semibold">Order Status</Text>
      <View className="ml-3 border-l-2 border-gray-200 pl-3 border-dashed">
        <View className="mb-6 relative">
          <View className="w-4 h-4 bg-[#FC913A] rounded-full absolute -left-[19px] top-1" />
          <Text className="font-bold">Order Confirmed - Started Preparing</Text>
          <Text className="text-gray-600 text-sm">Your order has been confirmed.</Text>
          <Text className="text-gray-600 text-sm">Tuesday, September 28, 2024</Text>
          <Text className="text-gray-600 text-sm">11:30 AM</Text>
        </View>
        <View className="mb-6 relative">
          <View className="w-4 h-4 border-2 border-[#FC913A] bg-white rounded-full absolute -left-[19px] top-1" />
          <Text className="font-bold">Left for Delivery</Text>
          <Text className="text-gray-600 text-sm">Your food is being prepared.</Text>
          <Text className="text-gray-600 text-sm">11:36 AM</Text>
        </View>
        <View className="relative">
          <View className="w-4 h-4 border-2 border-gray-300 bg-white rounded-full absolute -left-[19px] top-1" />
          <Text className="font-bold">Order Delivered</Text>
          <Text className="text-gray-600 text-sm">Your order has been successfully delivered.</Text>
          <Text className="text-gray-600 text-sm">11:54 AM</Text>
        </View>
      </View>

      {/* Download Buttons */}
      <View className="flex-row justify-between mt-6">
        <Pressable className="flex-1 border border-[#FC913A] py-2 rounded-xl items-center mr-2">
          <View className="flex-row gap-4 items-center space-x-2">
            <Download color="#fc913a" size={16} />
            <Text className="text-[#FC913A] font-semibold">Download invoice</Text>
          </View>
        </Pressable>
      </View>
      <View className="w-full h-8" />
    </ScrollView>
  )
}

export default PostCheckout

