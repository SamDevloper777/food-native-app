import CartItemCard from '@/components/cart/cartItemCard';
import Navigation from '@/components/common/navigation';
import { router } from 'expo-router';
import { MoveRightIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/store';
import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';

const Cart = () => {
  const cartItems = useSelector(selectThaliItems);

  // Stringify the cartItems object with formatting
  const cartItemsJson = JSON.stringify(cartItems, null, 2);
  const deliveryCharges = 20;
  // const tax = totalAmount * 0.18;
  // const finalTotal = totalAmount + deliveryCharges + tax;

  return (
    <>
      <ScrollView className='flex-1 bg-white pt-2 pb-12'>
        <Navigation hasHeart={false} title='Cart' />
        {cartItems && Object.keys(cartItems).length > 0 ? (
          <Text>{cartItemsJson}</Text>
        //   {cartItems.map((item) => (
        //     <CartItemCard
        //       key={item.id}
        //       thaliId={item.id}
        //       id={item.id}
        //       title={item.name}
        //       cost={item.price.toString()}
        //       description={item.description}
        //       quantity={item.quantity}
        //       url='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with item.url if added
        //     />
        //   ))}

        // <View className='flex flex-col px-4 gap-3'>
        //   <View className='flex-row justify-between items-center mx-4'>
        //     <Text className='text-lg font-semibold text-gray-500'>Subtotal</Text>
        //     <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
        //     <Text className='text-lg font-semibold'>₹{totalAmount.toFixed(2)}</Text>
        //   </View>
        //   <View className='flex-row justify-between items-center mx-4'>
        //     <Text className='text-lg font-semibold text-gray-500'>Delivery Charges</Text>
        //     <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
        //     <Text className='text-lg font-semibold'>₹{deliveryCharges.toFixed(2)}</Text>
        //   </View>
        //   <View className='flex-row justify-between items-center mx-4'>
        //     <Text className='text-lg font-semibold text-gray-500'>Tax</Text>
        //     <View className='flex-1 h-[1px] mx-6 border-[1px] border-dashed border-gray-200' />
        //     <Text className='text-lg font-semibold'>₹{tax.toFixed(2)}</Text>
        //   </View>
        //   <View className='flex-row justify-between items-center mx-4 mt-1'>
        //     <Text className='text-xl font-bold'>Total</Text>
        //     <Text className='text-xl font-bold'>₹{finalTotal.toFixed(2)}</Text>
        //   </View>
        // </View>

        // <View className='flex flex-row justify-between items-center px-4 gap-4 my-3'>
        //   <TouchableOpacity
        //     className='bg-white p-4 rounded-[25px] border border-[#FC913A] mt-4 flex-row items-center justify-center gap-2 flex-1'
        //     activeOpacity={0.8}
        //     onPress={() => router.push('/(tabs)/home')}
        //   >
        //     <Text className='text-[#FC913A] text-center text-lg font-bold'>Continue Shopping</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity
        //     className='bg-[#FC913A] p-4 rounded-[25px] mt-4 flex-row items-center justify-center gap-2 flex-1'
        //     activeOpacity={0.8}
        //     onPress={() => router.push('/(screens)/checkout')}
        //   >
        //     <Text className='text-white text-center text-lg font-bold'>Checkout</Text>
        //   </TouchableOpacity>
        // </View>
        ) : (
        <Text>Your cart is empty.</Text>
        )}
        <View className='h-8 w-full' />
      </ScrollView>
    </>
  );
};

export default Cart;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Cart Contents</Text>
//       {cartItems && Object.keys(cartItems).length > 0 ? (
//         <Text style={styles.jsonText}>{cartItemsJson}</Text>
//       ) : (
//         <Text style={styles.emptyText}>Your cart is empty.</Text>
//       )}
//     </View>
//   );
// };