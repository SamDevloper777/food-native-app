import Navigation from '@/components/common/navigation'
import OrderCard from '@/components/Profile/ordersHistory/orderCard'
import { ordersHistoryData } from '@/utils/constants/ordersHistory'
import React from 'react'
import { ScrollView, View } from 'react-native'

const ManageOrdersHistory = () => {
  return (
    <ScrollView className="flex-1 bg-white pt-4">
      <View className='mb-4'>
        <Navigation title='Orders History' />
      </View>
      {ordersHistoryData.map((order, index) => (
        <OrderCard
          key={index}
          title={order.title}
          description={order.description}
          rating={order.rating}
          time={order.time}
          cost={order.cost}
          url={order.url}
        />
      ))}
      <View className="h-12" />
    </ScrollView>
  )
}

export default ManageOrdersHistory