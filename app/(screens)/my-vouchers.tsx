import Navigation from '@/components/common/navigation';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

const tabs = ['New', 'Used', 'Expired'];

const vouchers = [
  {
    id: '1',
    title: 'Dunkin Donuts',
    description: 'Buy 1 donut and get 20% off on second donut',
    discount: '20% OFF',
    color: '#2E7D32',
    logo: 'https://seeklogo.com/images/D/dunkin-donuts-logo-6C2B67C430-seeklogo.com.png',
    status: 'New', // Add status to filter by tab
  },
  {
    id: '2',
    title: 'La Pino’z',
    description: 'Buy 1 pizza and get 50% off on second pizza',
    discount: '50% OFF',
    color: '#0D47A1',
    logo: 'https://seeklogo.com/images/L/la-pinoz-pizza-logo-A78F03D3BE-seeklogo.com.png',
    status: 'New',
  },
  {
    id: '3',
    title: 'KFC Chicken',
    description: 'Buy 1 order and get 30% off on second order',
    discount: '30% OFF',
    color: '#B71C1C',
    logo: 'https://seeklogo.com/images/K/kfc-logo-804F5F464A-seeklogo.com.png',
    status: 'New',
  },
  {
    id: '4',
    title: 'Taco Bell',
    description: 'Buy 1 order and get 10% off on second order',
    discount: '10% OFF',
    color: '#6A1B9A',
    logo: 'https://seeklogo.com/images/T/taco-bell-logo-4DC1A3D047-seeklogo.com.png',
    status: 'New',
  },
];

const MyVouchers = () => {
  const [selectedTab, setSelectedTab] = useState('New');
  const screenWidth = Dimensions.get('window').width;

  // Filter vouchers based on selected tab
  const filteredVouchers = vouchers.filter(
    (voucher) => voucher.status === selectedTab
  );

  const renderVoucher = ({ item }: any) => (
    <View
      className='w-[48%] bg-white rounded-2xl mb-4 shadow-md overflow-hidden'
      style={{
        width: screenWidth * 0.48 - 8, // Adjust for padding/margin
      }}
    >
      <View className='p-4'>
        <Image
          source={{ uri: item.logo }}
          className='w-12 h-12 mb-2'
          resizeMode='contain'
          onError={(e) => console.log('Image failed to load:', item.logo)}
        />
        <Text className='text-sm font-bold'>{item.title}</Text>
        <Text className='text-xs text-gray-500 mt-1'>{item.description}</Text>
      </View>
      <View
        className='h-10 items-center justify-center'
        style={{
          backgroundColor: item.color,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <Text className='text-white font-bold text-sm'>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView className='flex-1 bg-white p-4' showsVerticalScrollIndicator={false}>
      <Navigation title='My Vouchers'/>
      {/* Tabs */}
      <View className='flex-row justify-around mb-4'>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text
              className={`text-sm font-semibold ${selectedTab === tab ? 'text-[#FC913A]' : 'text-gray-500'
                }`}
            >
              {selectedTab === tab ? '• ' : ''}{tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Divider */}
      <View className='h-[1px] bg-gray-200 mb-4' />

      {/* Vouchers */}
      <FlatList
        data={filteredVouchers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={renderVoucher}
        ListEmptyComponent={
          <Text className='text-center text-gray-500'>No vouchers available</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default MyVouchers;