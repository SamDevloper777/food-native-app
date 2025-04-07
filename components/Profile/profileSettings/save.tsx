import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Save = () => {
  return (
    <View>
      <TouchableOpacity className='bg-[#FC913A] rounded-lg px-3 py-4 mt-4' activeOpacity={0.9}>
        <Text className='text-white text-center font-bold text-[18px]'>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Save