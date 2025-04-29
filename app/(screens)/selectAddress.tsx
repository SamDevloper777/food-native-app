import { setUserDetails } from '@/utils/slice/paymentSlice'
import { RootState } from '@/utils/store'
import * as Location from 'expo-location'
import { router } from 'expo-router'
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
  const [customLocation, setCustomLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to use the map.')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    })()
  }, [])

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
          {/* {JSON.stringify(paymentObject, null, 2)} */}
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
                  setCustomLocation(null)
                  dispatch(setUserDetails({
                    userId: user.userId?.toString() || '',
                    address: item
                  }))
                }}
                activeOpacity={0.8}
                className={`border p-4 rounded-lg mb-3 ${
                  isSelected ? 'border-[#FC913A] bg-orange-100' : 'border-gray-300'
                }`}
              >
                <Text className="font-semibold">{item.title}</Text>
                <Text className="text-gray-600">{item.address}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View className="flex-1 border-t border-gray-200">
        <Text className="text-center font-semibold my-2">Or tap on the map to select custom address</Text>
        <MapView
          style={{ flex: 1 }}
          region={mapRegion} // controlled map view
          onPress={(e: MapPressEvent) => {
            const coords = e.nativeEvent.coordinate
            setCustomLocation(coords)
            setSelectedAddressId(null)
          }}
        >
          {customLocation && (
            <Marker coordinate={customLocation} title="Custom Address" />
          )}
        </MapView>
      </View>

      <TouchableOpacity
        className={`bg-[#FC913A] p-4 rounded-lg m-4 ${
          !selectedAddressId && !customLocation ? 'opacity-50' : ''
        }`}
        onPress={handleCheckout}
        activeOpacity={0.8}
        disabled={!selectedAddressId && !customLocation}
      >
        <Text className="text-white text-center text-lg font-bold">Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectAddress

