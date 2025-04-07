import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from '@/components/common/navigation'
import DeliveryCard from '@/components/Profile/manageAddress/deliveryCard'
import Select from '@/components/Profile/manageAddress/select'

const MyWishlist = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navigation title='My Wishlist'/>
      <DeliveryCard title='Home' address={'2118 Thornridge,\nCir.Syrucuse, Connecticut\nUSA - 35624'} />
      <DeliveryCard title='Work' address={'6589 12th Avenue,\nMintic, New York\nUSA - 35687'} />
      <Select />
    </SafeAreaView>
  )
}

export default MyWishlist