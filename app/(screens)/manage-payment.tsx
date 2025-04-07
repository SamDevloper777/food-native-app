import Navigation from '@/components/common/navigation'
import Cards from '@/components/Profile/managePayment/cards'
import Other from '@/components/Profile/managePayment/other'
import React from 'react'
import { ScrollView } from 'react-native'

const ManagePayment = () => {
  return (
    <ScrollView className='bg-white flex-1'>
      <Navigation title='Manage Payment'/>
      <Cards />
      <Other />
    </ScrollView>
  )
}



export default ManagePayment
