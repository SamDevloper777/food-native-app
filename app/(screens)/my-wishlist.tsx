import React, { useCallback, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import Navigation from '@/components/common/navigation';
import WishlistCard from '@/components/Profile/wishlist/wishlistCard';
import { RootState } from '@/utils/store';

const MyWishlist = () => {
  const user = useSelector((state: RootState) => state.user, shallowEqual);
  const wishlist = user?.wishlist || [];

  const renderItem = useCallback(
    ({ item }: { item: number }) => <WishlistCard thaliId={item} />,
    []
  );

  const keyExtractor = useCallback((_: any, index: number) => index.toString(), []);

  const ListEmptyComponent = useMemo(() => (
    <View className="flex-1 items-center justify-center mt-8">
      <Text className="text-gray-500 text-lg">No items in wishlist</Text>
    </View>
  ), []);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: 200,
      offset: 200 * index,
      index,
    }),
    []
  );

  const footerSpacing = useMemo(() => <View className="h-12" />, []);

  return (
    <View className="flex-1 bg-white">
      <Navigation title="My Wishlist" />
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
        initialNumToRender={3}
        getItemLayout={getItemLayout}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={footerSpacing}
        contentContainerStyle={wishlist.length === 0 ? { flex: 1 } : undefined}
      />
    </View>
  );
};

export default React.memo(MyWishlist);
