import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, MapPressEvent, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { router } from 'expo-router'

const mockAddresses = [
  {
    id: '1',
    label: 'Home',
    addressLine: '123 Main Street, Springfield',
  },
  {
    id: '2',
    label: 'Office',
    addressLine: '42 Tech Park Road, Silicon City',
  },
]

const SelectAddress = () => {
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)
  const [customLocation, setCustomLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

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
    let selectedAddress = null

    if (selectedAddressId) {
      selectedAddress = mockAddresses.find(addr => addr.id === selectedAddressId)
    } else if (customLocation) {
      selectedAddress = {
        label: 'Custom Location',
        addressLine: `Lat: ${customLocation.latitude}, Lng: ${customLocation.longitude}`,
        coordinates: customLocation,
      }
    } else {
      Alert.alert('Select or Add an Address')
      return
    }

    router.push({
      pathname: '/(screens)/checkout',
      params: {
        address: JSON.stringify(selectedAddress),
      },
    })
  }

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Select Delivery Address</Text>
        <FlatList
          data={mockAddresses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const isSelected = item.id === selectedAddressId
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedAddressId(item.id)
                  setCustomLocation(null)
                }}
                className={`border p-4 rounded-lg mb-3 ${
                  isSelected ? 'border-[#FC913A] bg-orange-100' : 'border-gray-300'
                }`}
              >
                <Text className="font-semibold">{item.label}</Text>
                <Text className="text-gray-600">{item.addressLine}</Text>
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
