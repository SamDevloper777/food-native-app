import { Minus, Plus, Trash } from 'lucide-react-native';
import React, { useCallback, memo } from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  isItemSelected,
  getItemQuantity,
} from '../../utils/slice/customizeOwnThaliSlice';

interface CartItemCardProps {
  id: string;
  title: string;
  cost: string;
  url: string;
}

const CartItemCard = memo(({
  id,
  title,
  cost,
  url,
}: CartItemCardProps) => {
  const dispatch = useDispatch();
  
  const isSelected = useSelector(isItemSelected(id));
  const quantity = useSelector(getItemQuantity(id));
  
  const handleToggle = useCallback(() => {
    if (isSelected) {
      dispatch(removeItem(id));
    } else {
      dispatch(addItem({ id, title, cost, url }));
    }
  }, [isSelected, id, title, cost, url, dispatch]);
  
  const handleIncrement = useCallback(() => 
    dispatch(incrementQuantity(id)),
    [id, dispatch]
  );

  const handleDecrement = useCallback(() => 
    dispatch(decrementQuantity(id)),
    [id, dispatch]
  );

  const buttonStyle = useCallback(({ pressed }: { pressed: boolean }) => ({
    opacity: pressed || !isSelected ? 0.6 : 1,
    padding: 4,
  }), [isSelected]);
  
  return (
    <View
      className={`flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-md w-full h-[148px] py-4 px-4 my-2 mx-auto ${
        isSelected ? 'border border-[#FC913A]' : ''
      }`}
    >
      {/* Image */}
      <View className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
        <Image
          source={{ uri: url }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
      
      {/* Info */}
      <View className="flex-1 flex-col justify-center items-start h-full">
        <Text
          className="text-[16px] font-bold"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text className="text-lg font-semibold text-gray-500 mt-1">
          ₹{cost}
        </Text>
      </View>
      
      {/* Divider */}
      <View className="w-[1px] h-[70%] bg-gray-200" />
      
      {/* Switch + Quantity Controls */}
      <View className="flex flex-col justify-between items-center h-full gap-8">
        <TouchableOpacity
          onPress={() => {}}
          className="bg-[#FC913A] p-2 rounded-full"
          activeOpacity={0.8}
        >
          <Trash size={20} color="white" />
        </TouchableOpacity>

        <View
          className={`flex-row ${
            isSelected ? 'bg-[#FC913A]' : 'bg-[#e0e0e0]'
          } rounded-full px-6 py-3 items-center gap-4`}
        >
          {/* Decrement */}
          <Pressable
            onPress={handleDecrement}
            disabled={!isSelected || quantity <= 0}
            hitSlop={10}
            style={buttonStyle}
          >
            <Minus size={18} color="white" />
          </Pressable>
          
          {/* Quantity */}
          <Text className="text-white text-md font-bold">
            {quantity < 10 ? `0${quantity}` : quantity}
          </Text>
          
          {/* Increment */}
          <Pressable
            onPress={handleIncrement}
            disabled={!isSelected}
            hitSlop={10}
            style={buttonStyle}
          >
            <Plus size={18} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
});

CartItemCard.displayName = 'CartItemCard';

export default CartItemCard;        