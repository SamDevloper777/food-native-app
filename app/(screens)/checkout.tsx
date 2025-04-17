import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Cards from '@/components/Profile/managePayment/cards'
import Other from '@/components/Profile/managePayment/other'
import { router } from 'expo-router'
import Navigation from '@/components/common/navigation'

const Checkout = () => {
  return (
    <ScrollView className='bg-white flex-1'>
      <Navigation title='Checkout' />
      <Cards />
      <Other />
      <TouchableOpacity className='bg-[#FC913A] p-4 rounded-[25px] mt-4 mx-4 flex-row items-center justify-center gap-2 flex-1' activeOpacity={0.8} onPress={() => { router.push('/(screens)/confirm') }}>
        <Text className='text-white text-center text-lg font-bold'>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Checkout