import Navigation from '@/components/common/navigation'
import Add from '@/components/Profile/manageAddress/Add'
import DeliveryCard from '@/components/Profile/manageAddress/deliveryCard'
import { RootState } from '@/utils/store'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

const ManageDeliveryAdderss = () => {
  const user = useSelector((state: RootState) => state.user)
  const deliveryAddresses = user.address || [] 
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
      <Add />
    </SafeAreaView>
  )
}

export default ManageDeliveryAdderss