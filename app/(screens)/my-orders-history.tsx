import Navigation from '@/components/common/navigation'
import OrderCard from '@/components/Profile/ordersHistory/orderCard'
import { ordersHistoryData } from '@/utils/constants/ordersHistory'
import React, { useCallback, useMemo } from 'react'
import { FlatList, View, Text } from 'react-native'

const ManageOrdersHistory = () => {
  const renderItem = useCallback(({ item, index }: { item: typeof ordersHistoryData[0], index: number }) => (
    <OrderCard
      key={index}
      title={item.title}
      description={item.description}
      rating={item.rating}
      time={item.time}
      cost={item.cost}
      url={item.url}
    />
  ), []);

  const keyExtractor = useCallback((_: any, index: number) => index.toString(), []);

  const ListEmptyComponent = useMemo(() => (
    <View className="flex-1 items-center justify-center mt-8">
      <Text className="text-gray-500 text-lg">No orders history</Text>
    </View>
  ), []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 200, // Approximate height of each item
    offset: 200 * index,
    index,
  }), []);

  return (
    <View className="flex-1 bg-white">
      <View className='mb-4'>
        <Navigation title='Orders History' />
      </View>
      <FlatList
        data={ordersHistoryData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
        initialNumToRender={3}
        getItemLayout={getItemLayout}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={<View className="h-12" />}
        contentContainerStyle={ordersHistoryData.length === 0 ? { flex: 1 } : undefined}
      />
    </View>
  )
}

export default React.memo(ManageOrdersHistory);