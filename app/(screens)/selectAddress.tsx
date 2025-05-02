import { setUserDetails } from '@/utils/slice/paymentSlice'
import { RootState } from '@/utils/store'
import * as Location from 'expo-location'
import { router, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { MapPressEvent, Marker, Region } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'

const SelectAddress = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const paymentObject = useSelector((state: RootState) => state.payment)
  const deliveryAddresses = user.address || []
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)

  useEffect(() => {
    const defaultAddr = deliveryAddresses.find(addr => addr.isDefault)
    if (defaultAddr) {
      setSelectedAddressId(defaultAddr.title)
      dispatch(setUserDetails({
        userId: user.userId?.toString() || '',
        address: defaultAddr,
      }))
    }
  }, [deliveryAddresses])

  const handleCheckout = () => {
    if (!selectedAddressId) {
      Alert.alert('Select a delivery address')
      return
    }

    router.push('/(screens)/checkout')
  }

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">
          Select Delivery Address
        </Text>
        <FlatList
          data={deliveryAddresses}
          keyExtractor={item => item.title}
          renderItem={({ item }) => {
            const isSelected = selectedAddressId === item.title
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedAddressId(item.title)
                  dispatch(setUserDetails({
                    userId: user.userId?.toString() || '',
                    address: item
                  }))
                }}
                activeOpacity={0.8}
                className={`border p-4 rounded-lg mb-3 ${isSelected ? 'border-[#FC913A] bg-orange-100' : 'border-gray-300'
                  }`}
              >
                <Text className="font-semibold">{item.title}</Text>
                <Text className="text-gray-600">{item.address}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View className="flex flex-row justify-between items-center px-4 gap-4 my-3">
        <TouchableOpacity
          className={`border border-[#FC913A] p-4 rounded-lg flex-1 ${!selectedAddressId ? 'opacity-50' : ''
            }`}
          onPress={() => router.push('/(screens)/manage-delivery-adderss')}
          activeOpacity={0.8}
          disabled={!selectedAddressId}
        >
          <Text className="text-[#FC913A] text-center text-lg font-bold">Edit Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`bg-[#FC913A] p-4 rounded-lg flex-1 ${!selectedAddressId ? 'opacity-50' : ''
            }`}
          onPress={handleCheckout}
          activeOpacity={0.8}
          disabled={!selectedAddressId}
        >
          <Text className="text-white text-center text-lg font-bold">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectAddress

