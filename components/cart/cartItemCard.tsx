import { Minus, Pencil, Plus, Trash } from 'lucide-react-native';
import React, { memo, useCallback } from 'react';
import {
    Image,
    Pressable,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    decrementQuantity,
    getItemQuantity,
    incrementQuantity,
    isItemSelected,
    removeItem,
} from '../../utils/slice/customizeOwnThaliSlice';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

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

    const handleIncrement = useCallback(() =>
        dispatch(incrementQuantity(id)),
        [id, dispatch]
    );

    const handleDecrement = useCallback(() => {
        if (quantity > 0) {
            dispatch(decrementQuantity(id));
        }
    }, [id, dispatch, quantity]);

    const buttonStyle = useCallback(({ pressed }: { pressed: boolean }) => ({
        opacity: pressed ? 0.6 : 1,
        padding: 4,
    }), []);

    return (
        <View
            className='flex-row items-center justify-between bg-white rounded-2xl shadow-lg w-[90%] h-[148px] py-4 px-4 my-2 mx-auto shadow-gray-600'
        >
            <View className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                <Image
                    source={{ uri: url }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>
            <View className="flex flex-col justify-center items-start h-full w-[20%]">
                <Text
                    className="text-[16px] font-bold"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {title}
                </Text>
                <Text
                    className="text-[14px] text-gray-600"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    Delicious paneer dish made with fresh ingredients and authentic spices
                </Text>
                <Text className="text-lg font-semibold text-gray-500 mt-7">
                    ₹{cost}
                </Text>
            </View>
            <View className="w-[1px] h-[70%] bg-gray-200 mr-2" />
            <View className="flex flex-col justify-between items-center h-full py-2 w-[33%]">
                <View className='flex-row gap-8 justify-between'>
                    <TouchableOpacity
                        onPress={() => {router.push('/(screens)/customizeThali')}}
                        className="bg-[#FC913A] p-2 rounded-full items-center justify-center"
                        activeOpacity={0.8}
                    >
                        <Pencil size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => dispatch(removeItem(id))}
                        className="bg-white p-2 rounded-full border border-[#FC913A]"
                        activeOpacity={0.8}
                    >
                        <Trash size={20} color={"#FC913A"} />
                    </TouchableOpacity>
                </View>
                <View
                    className='flex-row bg-[#FC913A] rounded-full px-6 py-3 items-center gap-4'
                >
                    <Pressable
                        onPress={handleDecrement}
                        hitSlop={10}
                        style={buttonStyle}
                    >
                        <Minus size={18} color="white" />
                    </Pressable>
                    <Text className="text-white text-md font-bold">
                        {quantity < 10 ? `0${quantity}` : quantity}
                    </Text>
                    <Pressable
                        onPress={handleIncrement}
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