import DeliveryCard from '@/components/Profile/manageAddress/deliveryCard'
import Navigation from '@/components/common/navigation'
import Select from '@/components/Profile/manageAddress/select'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { deliveryAddresses } from '@/utils/constants/address'

const ManageDeliveryAdderss = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navigation title='Delivery Address'/>
      {deliveryAddresses.map((address, index) => (
        <DeliveryCard 
          key={index}
          title={address.title} 
          address={address.address}
        />
      ))}
      <Select />
    </SafeAreaView>
  )
}

export default ManageDeliveryAdderss