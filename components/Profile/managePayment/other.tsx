import { View, Text } from 'react-native'
import React from 'react'
import PaymentMethod from './paymentMethod'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'

const Other = () => {
  return (
    <View className='px-4'>
      <Text className='text-lg font-semibold mt-2 mb-2'>Others</Text>
      <PaymentMethod icon={<FontAwesome name='paypal' size={28} color='#003087' />} name='Pay Pal' />
      <PaymentMethod icon={<Ionicons name='logo-apple' size={24} color='black' />} name='Apple Pay' />
      <PaymentMethod
        icon={<FontAwesome5 name='google-pay' size={24} color='#4285F4' />}
        name='Google Pay'
      />
      <PaymentMethod icon={<FontAwesome5 name='money-bill-alt' size={24} color='#FC913A' />} name='Cash on Delivery' />
    </View>
  )
}

export default Other