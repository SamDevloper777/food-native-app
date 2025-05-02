import React, { useCallback, useMemo } from 'react';
import { FlatList, View, Text } from 'react-native';
import Navigation from '@/components/common/navigation';
import OrderCard from '@/components/Profile/ordersHistory/orderCard';
import { ordersHistoryData } from '@/utils/constants/ordersHistory';

const ManageOrdersHistory = () => {
  const renderItem = useCallback(({ item }: { item: typeof ordersHistoryData[0] }) => (
    <OrderCard
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

  const ListFooterComponent = useMemo(() => <View className="h-12" />, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 200,
    offset: 200 * index,
    index,
  }), []);

  const contentStyle = ordersHistoryData.length === 0 ? { flex: 1 } : undefined;

  return (
    <View className="flex-1 bg-white">
      <View className="mb-4">
        <Navigation title="Orders History" />
      </View>
      <FlatList
        data={ordersHistoryData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        windowSize={5}
        initialNumToRender={3}
        getItemLayout={getItemLayout}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={contentStyle}
      />
    </View>
  );
};

export default React.memo(ManageOrdersHistory);
