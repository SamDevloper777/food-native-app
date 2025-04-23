import CartItemCard from '@/components/cart/cartItemCard';
import Navigation from '@/components/common/navigation';
import { router } from 'expo-router';
import { MoveRightIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';
import { thalis } from '@/utils/constants/kitchenProfile';

const Cart = () => {
  const cartItems = useSelector(selectThaliItems);
  const deliveryCharges = 20;
  const totalAmount = Object.values(cartItems).reduce(
    (previousValue, currentValue) =>
      previousValue +
      currentValue.items.reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue.cost) * currentValue.quantity,
        0
      ),
    0
  );
  const tax = totalAmount * 0.18;
  const finalTotal = totalAmount + deliveryCharges + tax;

  return (
    <>
      <ScrollView className="flex-1 bg-white pt-2 pb-12">
        <Navigation hasHeart={false} title="Cart" />
        {cartItems && Object.keys(cartItems).length > 0 ? (
          <>
            {Object.entries(cartItems).map(([thaliId, thali]) => (
              <>
                <CartItemCard
                  key={thaliId}
                  thaliId={thaliId}
                  kitchenId={thali.kitchenId}
                  object={{
                    items: thali.items.map(({ id, title, cost, quantity }) => ({
                      id,
                      title,
                      cost,
                      quantity,
                    })),
                    thaliQuantity: thali.thaliQuantity,
                  }}
                  thaliName={thalis.find((thali) => thali.id.toString() === thaliId)?.title}
                />
              </>
            ))}
            <TouchableOpacity
              className='border border-[#FC913A] p-4 rounded-lg mt-6 mb-8 mx-4 flex-row items-center justify-center gap-2 flex-1 text-center'
              activeOpacity={0.8}
              onPress={() => router.push('/(screens)/checkout')}
            >
              <Text className='text-[#FC913A] text-center text-lg font-bold'>Apply Coupon</Text>
              <MoveRightIcon size={20} color='#FC913A' className='text-center'/>
            </TouchableOpacity>
            <View className='flex flex-col px-4 gap-2'>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-normal text-slate-500'>Subtotal</Text>
                <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
                <Text className='text-lg font-semibold'>₹{totalAmount.toFixed(2)}</Text>
              </View>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-normal text-slate-500'>Delivery Charges</Text>
                <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
                <Text className='text-lg font-semibold'>₹{deliveryCharges.toFixed(2)}</Text>
              </View>
              <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-lg font-normal text-slate-500'>Tax</Text>
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
                className='bg-white p-4 rounded-lg border border-[#FC913A] mt-4 flex-row items-center justify-center gap-2 flex-1'
                activeOpacity={0.8}
                onPress={() => router.push('/(tabs)/home')}
              >
                <Text className='text-[#FC913A] text-center text-lg font-bold'>Continue Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className='bg-[#FC913A] p-4 rounded-lg mt-4 flex-row items-center justify-center gap-2 flex-1'
                activeOpacity={0.8}
                onPress={() => router.push('/(screens)/checkout')}
              >
                <Text className='text-white text-center text-lg font-bold'>Checkout</Text>
              </TouchableOpacity>
            </View>

          </>
        ) : (
          <Text>Your cart is empty.</Text>
        )}
        <View className="h-8 w-full" />
      </ScrollView>
    </>
  );
};

export default Cart;