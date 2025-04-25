import * as Location from 'expo-location'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import MapView, { MapPressEvent, Marker, Region } from 'react-native-maps'

const SelectCutsomAddress = () => {
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

  return (
    <View className="flex-1 border-t border-gray-200">
      <Text className="text-center font-semibold my-2">Add Custom Address</Text>
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
      <View className='px-6'>
        <TouchableOpacity className='bg-[#FC913A] rounded-lg px-3 py-4 mt-4' activeOpacity={0.9} onPress={() => router.back()}>
          <Text className='text-white text-center font-bold text-[18px]'>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectCutsomAddress