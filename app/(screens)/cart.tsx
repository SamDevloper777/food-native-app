import CartItemCard from '@/components/cart/cartItemCard'
import Navigation from '@/components/common/navigation'
import React from 'react'
import { ScrollView } from 'react-native'

const Cart = () => {
  return (
    <>
      <ScrollView className='flex-1 bg-white pt-2 pb-12'>
        <Navigation hasHeart={false} title='Cart' />
        <CartItemCard
          id="1"
          title='Paneer'
          cost='200'
          url='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'
        />
      </ScrollView>
    </>
  )
}

export default Cart