import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Add = () => {
  return (
    <View className='px-6'>
      <TouchableOpacity className='bg-[#FC913A] rounded-lg px-3 py-4 mt-4' activeOpacity={0.9} onPress={() => router.push('/(screens)/select-cutsom-address')}> 
        <Text className='text-white text-center font-bold text-[18px]'>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Add