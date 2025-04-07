import DeliveryCard from '@/components/Profile/manageAddress/deliveryCard'
import Navigation from '@/components/common/navigation'
import Select from '@/components/Profile/manageAddress/select'
import React from 'react'
import { SafeAreaView } from 'react-native'

const ManageDeliveryAdderss = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navigation title='Delivery Address'/>
      <DeliveryCard title='Home' address={'2118 Thornridge,\nCir.Syrucuse, Connecticut\nUSA - 35624'} />
      <DeliveryCard title='Work' address={'6589 12th Avenue,\nMintic, New York\nUSA - 35687'} />
      <Select />
    </SafeAreaView>
  )
}

export default ManageDeliveryAdderss