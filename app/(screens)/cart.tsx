import CartItemCard from '@/components/cart/cartItemCard'
import Navigation from '@/components/common/navigation'
import { router } from 'expo-router'
import { MoveRightIcon } from 'lucide-react-native'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/store'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  
  // Calculate other amounts
  const deliveryCharges = 20;
  const tax = totalAmount * 0.18; // 18% tax
  const finalTotal = totalAmount + deliveryCharges + tax;

  return (
    <>
      <ScrollView className='flex-1 bg-white pt-2 pb-12'>
        <Navigation hasHeart={false} title='Cart' />
        
        {cartItems.length === 0 ? (
          <View className="flex-1 items-center justify-center py-8">
            <Text className="text-lg text-gray-500">Your cart is empty</Text>
            <TouchableOpacity 
              className='bg-[#FC913A] p-4 rounded-[25px] mt-4 flex-row items-center justify-center gap-2' 
              activeOpacity={0.8} 
              onPress={() => router.back()}
            >
              <Text className='text-white text-center text-lg font-bold'>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                url='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'
              />
            ))}
            
            <TouchableOpacity 
              className='bg-white p-4 rounded-[25px] mx-4 border border-[#FC913A] my-8 flex-row items-center justify-center gap-2' 
              activeOpacity={0.8} 
              onPress={() => {}}
            >
              <Text className='text-[#FC913A] text-center text-lg font-bold'>Apply Coupon</Text>
              <MoveRightIcon size={20} color="#FC913A" />
            </TouchableOpacity>

            <View className='flex flex-col px-4 gap-3'>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-semibold text-gray-500'>Subtotal</Text>
                <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
                <Text className='text-lg font-semibold'>₹{totalAmount.toFixed(2)}</Text>
              </View>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-semibold text-gray-500'>Delivery Charges</Text>
                <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
                <Text className='text-lg font-semibold'>₹{deliveryCharges.toFixed(2)}</Text>
              </View>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-semibold text-gray-500'>Tax</Text>
                <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
                <Text className='text-lg font-semibold'>₹{tax.toFixed(2)}</Text>
              </View>
              <View className='flex-row justify-between items-center mx-4 mt-1'>
                <Text className='text-xl font-bold'>Total</Text>
                <Text className='text-xl font-bold'>₹{finalTotal.toFixed(2)}</Text>
              </View>
            </View>

            <View className='flex flex-row justify-between items-center px-4 gap-4 my-3'>
              <TouchableOpacity 
                className='bg-white p-4 rounded-[25px] border border-[#FC913A] mt-4 flex-row items-center justify-center gap-2 flex-1' 
                activeOpacity={0.8} 
                onPress={() => router.back()}
              >
                <Text className='text-[#FC913A] text-center text-lg font-bold'>Continue Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className='bg-[#FC913A] p-4 rounded-[25px] mt-4 flex-row items-center justify-center gap-2 flex-1' 
                activeOpacity={0.8} 
                onPress={() => {router.push('/(screens)/checkout')}}
              >
                <Text className='text-white text-center text-lg font-bold'>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <View className='h-8 w-full'/>
      </ScrollView>
    </>
  )
}

export default Cart