import React from 'react'
import { ScrollView, Text, View, Pressable, Image } from 'react-native'
import { PhoneCall, MessageSquare, Download } from 'lucide-react-native'
import Navigation from '@/components/common/navigation'

const PostCheckout = () => {
  return (
    <ScrollView className="bg-white flex-1 px-8">
      <Navigation title="Order Details" />

      <View className="mt-4 flex flex-row gap-4 justify-start items-center">
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
          className="w-20 h-20 rounded-full"
        />
        <View className='flex flex-col'>
          <Text className="text-xl font-semibold">Thali Name</Text>
          <View className="flex-row items-center">
            <Text className="text-[#FC913A] text-xl text-center align-middle">★★★★★ </Text>
            <Text className="text-gray-500 text-sm">(4.5)</Text>
          </View>
          <Text className="text-xl font-bold">₹13,000</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row space-x-4 mt-4 gap-4">
        <Pressable className="flex-1 border border-gray-300 py-4 rounded-[25px] items-center">
          <Text className="text-gray-400 font-semibold">Write a Review</Text>
        </Pressable>
        <Pressable className="flex-1 bg-[#FC913A] py-4 rounded-[25px] items-center">
          <Text className="text-white font-semibold">Book Again</Text>
        </Pressable>
      </View>

      {/* Service Provider */}
      <Text className="mt-6 mb-2 text-base font-semibold">About Kitchen</Text>
      <View className="bg-gray-100 p-4 rounded-xl flex-row justify-between items-center mx-auto w-full">
        <View className='flex flex-col items-start justify-center'>
          <Text className="font-bold text-lg">Kitchen El-Classico</Text>
          <Text className="text-gray-600">Rachit Naik</Text>
        </View>
        <View className="flex-row space-x-3 gap-6">
          <Pressable className="bg-[#FC913A] p-2 rounded-full">
            <PhoneCall color="white" size={20} />
          </Pressable>
          <View className="bg-gray-300 w-[1px]"/>
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
          <Text className="font-bold">Order Confirmed</Text>
          <Text className="text-gray-600 text-sm">Your order has been confirmed.</Text>
          <Text className="text-gray-600 text-sm">Tuesday, September 28, 2024</Text>
          <Text className="text-gray-600 text-sm">11:30 AM</Text>
        </View>
        <View className="mb-6 relative">
          <View className="w-4 h-4 border-2 border-[#FC913A] bg-white rounded-full absolute -left-[19px] top-1" />
          <Text className="font-bold">Preparing your order</Text>
          <Text className="text-gray-600 text-sm">Your food is being prepared.</Text>
          <Text className="text-gray-600 text-sm">11:36 AM</Text>
        </View>
        <View className="relative">
          <View className="w-4 h-4 border-2 border-gray-300 bg-white rounded-full absolute -left-[19px] top-1" />
          <Text className="font-bold">Order Completed</Text>
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

      {/* Payment Summary */}
      <Text className="mt-8 text-base font-semibold">Payment Summary</Text>
      <View className="mt-2 space-y-1">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Item Total</Text>
          <Text className="text-gray-700 font-semibold">₹13,000</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Discount</Text>
          <Text className="text-gray-700 font-semibold">₹0</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Service</Text>
          <Text className="text-gray-700 font-semibold">₹50</Text>
        </View>
        <View className="flex-row justify-between mt-2 border-t border-gray-200 pt-2">
          <Text className="text-lg font-bold">Grand Total</Text>
          <Text className="text-lg font-bold">₹13,000</Text>
        </View>
      </View>
      <View className="w-full h-8" />
    </ScrollView>
  )
}

export default PostCheckout

