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

  const totalAmount = Object.values(cartItems).reduce((acc, thali) => {
    const thaliTotal = thali.items.reduce(
      (itemAcc, item) => itemAcc + parseInt(item.cost) * item.quantity,
      0
    );
    return acc + thaliTotal * thali.thaliQuantity;
  }, 0);

  const tax = totalAmount * 0.18;
  const finalTotal = totalAmount + deliveryCharges + tax;

  return (
    <ScrollView className="flex-1 bg-white pt-2 pb-12">
      <Navigation hasHeart={false} title="Cart" />

      {cartItems && Object.keys(cartItems).length > 0 ? (
        <>
          {Object.entries(cartItems).map(([thaliId, thali]) => (
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
              thaliName={thalis.find((t) => t.id.toString() === thaliId)?.title}
            />
          ))}

          <TouchableOpacity
            className="border border-[#FC913A] border-dashed p-4 rounded-full mt-6 mb-8 mx-4 flex-row items-center justify-center gap-2"
            activeOpacity={0.8}
            onPress={() => router.push('/(screens)/checkout')}
          >
            <Text className="text-[#FC913A] text-lg font-bold">Apply Coupon</Text>
            <MoveRightIcon size={20} color="#FC913A" />
          </TouchableOpacity>

          <View className="flex flex-col px-4 gap-2">
            {[
              { label: 'Subtotal', value: totalAmount },
              { label: 'Delivery Charges', value: deliveryCharges },
              { label: 'Tax', value: tax },
            ].map(({ label, value }) => (
              <View key={label} className="flex-row justify-between items-center mx-4">
                <Text className="text-lg font-normal text-slate-500">{label}</Text>
                <View className="flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200" />
                <Text className="text-lg font-semibold">₹{value.toFixed(2)}</Text>
              </View>
            ))}

            <View className="flex-row justify-between items-center mx-4 mt-1">
              <Text className="text-xl font-bold">Total</Text>
              <Text className="text-xl font-bold">₹{finalTotal.toFixed(2)}</Text>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center px-4 gap-4 my-3">
            <TouchableOpacity
              className="bg-white p-4 rounded-lg border border-[#FC913A] mt-4 flex-1"
              activeOpacity={0.8}
              onPress={() => router.push('/(tabs)/home')}
            >
              <Text className="text-[#FC913A] text-center text-lg font-bold">
                Continue Shopping
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#FC913A] p-4 rounded-lg mt-4 flex-1"
              activeOpacity={0.8}
              onPress={() => router.push('/(screens)/selectAddress')}
            >
              <Text className="text-white text-center text-lg font-bold">Confirm</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text className="text-center text-slate-500 mt-10">Your cart is empty.</Text>
      )}

      <View className="h-8 w-full" />
    </ScrollView>
  );
};

export default Cart;
