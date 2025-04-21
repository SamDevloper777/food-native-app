import CustomizeThaliComponent from '@/components/common/customizeThaliComponent'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'

const CustomizeThali = () => {
  const router = useRouter()
  const { title, cost, rating, id, time, kitchenId } = useLocalSearchParams<
    {
      title: string
      cost: string
      rating: string
      id: string
      time: string
      kitchenId: string
    }
  >()

  return (
    <CustomizeThaliComponent
      title={title}
      id={id}
      kitchenId={kitchenId}
      cost={cost}
      deliveryTime={time}
      thaliTitle={title}
      confirmButtonText="Confirm Thali"
      kitchenName="Kitchen Name"
    />
  )
}

export default CustomizeThali
