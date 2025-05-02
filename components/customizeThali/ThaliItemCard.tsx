import { Minus, Plus } from 'lucide-react-native';
import React, { useCallback, memo } from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Alert,
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
import { RootState } from '@/utils/store';

interface ThaliItemCardProps {
  id: string;
  title: string;
  cost: string;
  url: string;
  thaliId: string; 
  kitchenId: string; 
}

const ThaliItemCard = memo(({ id, title, cost, url, thaliId, kitchenId }: ThaliItemCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.customizeOwnThali.items);
  const isSelected = useSelector((state: any) => isItemSelected(thaliId, id)(state)); 
  const quantity = useSelector((state: any) => getItemQuantity(thaliId, id)(state));   

  const handleToggle = useCallback(() => {
    const currentKitchenId = Object.values(cartItems)[0]?.kitchenId;  
    if (isSelected) {
      dispatch(removeItem({thaliId, itemId: id}));
    } else if (!currentKitchenId || currentKitchenId === kitchenId) {
      dispatch(addItem({ id, title, cost, quantity: 1, thaliId, kitchenId})); 
    } else {
      Alert.alert(
        'Error',
        'You can only add items from the same kitchen to the thali.',
      )
    }
  }, [isSelected, id, title, cost, url, dispatch]);

  const handleIncrement = useCallback(() => dispatch(incrementQuantity({thaliId, itemId: id})), [id, dispatch]);

  const handleDecrement = useCallback(() => dispatch(decrementQuantity({thaliId, itemId: id})), [id, dispatch]);

  const buttonStyle = useCallback(({ pressed }: { pressed: boolean }) => ({
    opacity: pressed || !isSelected ? 0.6 : 1,
    padding: 4,
  }), [isSelected]);

  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-md w-[92%] h-[148px] py-4 px-4 my-2 mx-auto ${isSelected ? 'border border-[#FC913A]' : ''}`}
      activeOpacity={0.9}
      onPress={handleToggle}
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
        <Text className="text-[16px] font-bold" numberOfLines={2} ellipsizeMode="tail">
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
        {/* Switch */}
        <Switch
          trackColor={{ false: '#e0e0e0', true: '#FFCDA4' }}
          thumbColor={isSelected ? '#FC913A' : '#e0e0e0'}
          onValueChange={handleToggle}
          ios_backgroundColor="#e0e0e0"
          value={isSelected}
        />

        {/* Quantity Controls */}
        <View className={`flex-row ${isSelected ? 'bg-[#FC913A]' : 'bg-[#e0e0e0]'} rounded-full px-6 py-3 items-center gap-4`}>
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
    </TouchableOpacity>
  );
});

ThaliItemCard.displayName = 'ThaliItemCard';

export default ThaliItemCard;
