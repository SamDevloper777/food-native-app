import Navigation from '@/components/kitchenProfile/navigation';
import RecommendedSection from '@/components/kitchenProfile/RecommendedSection';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const kitchenProfile = () => {
  const { height } = Dimensions.get('window');
  return (
    <ScrollView className="flex-1 bg-white relative">
      <Navigation />
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1654054041538-ad6a3fb653d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        style={{ height: height * 0.3 }}
        resizeMode="cover"
        className="w-full"
      />
      <View className="-mt-[72px] mx-8 bg-white rounded-2xl shadow-md p-4">
        {/* Top Section */}
        <View className="flex-row justify-between items-start px-3">
          {/* Image and Text */}
          <View className="flex-row">
            <View className='overflow-hidden fixed w-16 h-16 rounded-full justify-center items-center'>
              <Image
                source={{
                  uri: 'https://imgs.search.brave.com/GP36WrnstYLKwqJvaE0ybXGDfSig7MvU5kCephTHwCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/NjZkZWZlYjBkOGJm/OTMxN2Q0Y2IyZmFi/X0FEXzRuWGZTR2hI/bWt0cjNWLW12X0dY/Mmx2VUdIQkZFazRE/Rl9kM05Mdm5OdGRP/QnE5ejd1QkVWUnJl/NDhLMEoxaXBmcGFC/QndXd0YzZ2lvbHNa/N3pUT212bHNZcU1F/UmYxeXVOZXJNSlJf/NDlVRUhETVZSSGV2/TEVhYi1XbVA1OFF4/NldUcWhOWW9BeGdR/ZFZIZ2I0RDZfM0Vy/NHo2SjQuYXZpZg',
                }}
                className="w-full h-full"
                resizeMode="center"
                style={{ transform: [{ scale: 2 }] }}
              />
            </View>
            <View className="ml-4">
              <Text className="text-[20px] font-bold">Starbucks</Text>
              <Text className="text-md text-gray-500">Coffee</Text>
            </View>
          </View>

          {/* Icons */}
          <View className="flex-row space-x-3 gap-8 items-center justify-center self-center">
            <Ionicons name="share-social-outline" size={28} color="black" style={{ alignSelf: 'center' }} />
            <Ionicons name="heart" size={28} color="red" style={{ alignSelf: 'center' }} />
          </View>
        </View>

        {/* Divider */}
        <View className="border-b border-gray-200 my-3" />

        {/* Bottom Section */}
        <View className="flex-row justify-between items-center px-3 ">
          {/* Ratings & Delivery */}
          <View className=''>
            <View className="flex-row items-center mb-1">
              <Ionicons name="star" size={16} color="green" />
              <Text className="ml-1 font-medium text-[16px]">3.7</Text>
              <Text className="ml-1 text-gray-500 text-[14px]">(1k+ Reviews)</Text>
            </View>
            <Text className="text-[14px] font-medium">
              4.0km  <Text className="text-gray-500">Free Delivery</Text>
            </Text>
          </View>

          <View style={{ borderLeftWidth: 1, borderLeftColor: '#E5E5E5' }} className="h-16 my-3" />

          {/* Distance & Time */}
          <View className="flex-col items-center justify-center mr-8 gap-1">
            <View className="flex-row items-center justify-center">
              <Ionicons name="location" size={18} color="#fc913a" />
              <Text className="ml-1 text-[16px] font-medium">1 km</Text>
            </View>
            <View style={{ borderLeftWidth: 1, borderLeftColor: '#FC913A', borderStyle: 'dashed' }} className="h-6" />
            <View className="flex-row items-center justify-center">
              <Ionicons name="time" size={18} color="#fc913a" />
              <Text className="ml-1 text-[16px] font-medium">15 min</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-10 pb-6" contentContainerStyle={{ paddingHorizontal: (Dimensions.get('window').width / 4) - 60 }}>
        <View className="flex flex-row gap-10">
          <TouchableOpacity className="bg-[#fcfcfc] w-[250px] h-28 rounded-[25px] flex flex-row overflow-hidden justify-center items-center px-4 shadow-md shadow-gray-400" activeOpacity={0.8}>
            <View className="w-[35%] h-full">
              <Ionicons name='pricetag-outline' color={'#fc913a'} size={48} className='font-thick align-middle text-center my-auto' />
            </View>
            <View className="w-[65%] h-full flex flex-col justify-center items-center gap-1">
              <Text className="text-[16px] font-bold">50% OFF upto $25</Text>
              <Text className="text-[16px] font-medium text-gray-500 text-center leading-snug">Use Code: STARYH50</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#fcfcfc] w-[250px] h-28 rounded-[25px] flex flex-row overflow-hidden justify-center items-center px-4 shadow-md shadow-gray-400" activeOpacity={0.8}>
            <View className="w-[35%] h-full">
              <Ionicons name='pricetag-outline' color={'#fc913a'} size={48} className='font-thick align-middle text-center my-auto' />
            </View>
            <View className="w-[65%] h-full flex flex-col justify-center items-center gap-1">
              <Text className="text-[16px] font-bold">35% OFF upto $30</Text>
              <Text className="text-[16px] font-medium text-gray-500 text-center leading-snug">Use Code: ABRAGI35</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <RecommendedSection />
    </ScrollView>
  )
}

export default kitchenProfile

