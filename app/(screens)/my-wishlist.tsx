import Navigation from '@/components/common/navigation'
import WishlistCard from '@/components/Profile/wishlist/wishlistCard'
import { wishlistData } from '@/utils/constants/wishlist'
import React from 'react'
import { ScrollView, View } from 'react-native'

const MyWishlist = () => {
  return (
    <ScrollView className="flex-1 bg-white pt-4">
      <Navigation title='My Wishlist' />
      {wishlistData.map((item, index) => (
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
        />
      ))}
      <View className="h-12" />
    </ScrollView>
  )
}

export default MyWishlist
