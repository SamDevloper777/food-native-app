import Navigation from '@/components/common/navigation'
import WishlistCard from '@/components/Profile/wishlist/wishlistCard'
import { wishlistData } from '@/utils/constants/wishlist'
import React, { useCallback, useState, useMemo } from 'react'
import { FlatList, View, Text } from 'react-native'

const MyWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(wishlistData);

  const handleRemoveItem = useCallback((index: number) => {
    setWishlistItems(prevItems => prevItems.filter((_, i) => i !== index));
  }, []);

  const renderItem = useCallback(({ item, index }: { item: typeof wishlistData[0], index: number }) => (
    <WishlistCard
      key={index}
      title={item.title}
      description={item.description}
      rating={item.rating}
      city={item.city}
      cost={item.cost}
      distance={item.distance}
      time={item.time}
      url={item.url}
      onRemove={() => handleRemoveItem(index)}
    />
  ), [handleRemoveItem]);

  const keyExtractor = useCallback((_: any, index: number) => index.toString(), []);

  const ListEmptyComponent = useMemo(() => (
    <View className="flex-1 items-center justify-center mt-8">
      <Text className="text-gray-500 text-lg">No items in wishlist</Text>
    </View>
  ), []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 200, // Approximate height of each item
    offset: 200 * index,
    index,
  }), []);

  return (
    <View className="flex-1 bg-white">
      <Navigation title='My Wishlist' />
      <FlatList
        data={wishlistItems}
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
        contentContainerStyle={wishlistItems.length === 0 ? { flex: 1 } : undefined}
      />
    </View>
  )
}

export default React.memo(MyWishlist);
