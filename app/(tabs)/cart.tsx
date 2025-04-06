import { removeThaliItem } from "@/utils/slice/cartSlice";
import { useRouter } from "expo-router";
import { Minus, Plus, Trash } from "lucide-react-native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeThaliItem(id));
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text className="text-gray-500 text-center">Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-3">
              {/* Food Details */}
              <View>
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-500">${item.price.toFixed(2)}</Text>
                <Text className="text-gray-500">Qty: {item.quantity}</Text>
              </View>
              
              {/* Remove Button */}
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(item.id)}
                className="bg-orange-500 p-2 rounded-full"
              >
                <Trash size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      
      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg mt-4"
          onPress={() => router.push("/(screens)/checkout")}
        >
          <Text className="text-white text-center text-lg font-bold">Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartScreen;