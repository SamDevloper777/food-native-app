import ThaliCard from '@/components/common/ThaliCard'
import Navigation from '@/components/common/navigation'
import { thalis } from '@/utils/constants/home'
import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const SeeAll = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredThalis, setFilteredThalis] = useState(thalis)

  // Debounced search effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const results = thalis.filter(thali =>
        thali.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredThalis(results)
    }, 150) // Slight debounce to reduce unnecessary re-renders

    return () => clearTimeout(timeout)
  }, [searchTerm])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView className="flex-1 bg-white px-4">
        <Navigation title="All Thalis" />

        {/* Search Bar */}
        <View className="flex-row items-center justify-between bg-[#fcfcfc] rounded-full px-4 py-3 mb-6 shadow-md">
          <View className="flex-row items-center flex-1 gap-2">
            <MagnifyingGlassIcon size={26} color="gray" />
            <TextInput
              value={searchTerm}
              onChangeText={setSearchTerm}
              placeholder="Search your favourite kitchen"
              placeholderTextColor="#9CA3AF"
              className="text-gray-500 flex-1 text-[16px]"
            />
          </View>
          <TouchableOpacity>
            <AdjustmentsHorizontalIcon size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* Results */}
        {filteredThalis.length > 0 ? (
          filteredThalis.map(thali => (
            <ThaliCard
              key={thali.id}
              id={thali.id}
              Title={thali.title}
              Cost={thali.cost}
              Rating={thali.rating}
              Time={thali.time}
              Url={thali.url}
              description={thali.description}
            />
          ))
        ) : (
          <View className="items-center justify-center p-4">
            <Text className="text-gray-500 text-center">No thalis found with the given search term</Text>
          </View>
        )}
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default SeeAll
