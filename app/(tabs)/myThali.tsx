import MyThaliComponent from '@/components/customizeThali/myThaliComponent'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const myThali = () => {
  const { title, cost, id, time } = useLocalSearchParams<
    {
      title: string
      cost: string
      rating: string
      id: string
      time: string
    }
  >()

  return (
    <MyThaliComponent
      title={title}
      id={id}
      cost={cost}
      deliveryTime={time}
      thaliTitle={title}
      confirmButtonText="Continue"
      kitchenName="Kitchen Name"
    />
  )
}

export default myThali
