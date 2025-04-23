import { Minus, Pencil, Plus, Trash } from 'lucide-react-native';
import React, { memo, useCallback } from 'react';
import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';
import {
    incrementThaliQuantity,
    decrementThaliQuantity,
    removeItem,
} from '../../utils/slice/customizeOwnThaliSlice';

interface Item {
    id: string;
    title: string;
    cost: string;
    quantity: number;
}

interface ThaliCartObject {
    items: Item[];
    thaliQuantity: number;
}

interface CartItemCardProps {
    thaliId: string;
    object: ThaliCartObject;
    thaliName?: string;
    kitchenId: string;
}

const CartItemCard = memo(({ thaliId, object, thaliName, kitchenId }: CartItemCardProps) => {
    const dispatch = useDispatch();
    const { items, thaliQuantity } = object;

    const buttonStyle = useCallback(
        ({ pressed }: { pressed: boolean }) => ({
            opacity: pressed ? 0.6 : 1,
            padding: 4,
        }),
        []
    );

    const handleIncrement = () => {
        dispatch(incrementThaliQuantity({ thaliId }));
    };

    const handleDecrement = () => {
        dispatch(decrementThaliQuantity({ thaliId }));
    };

    const handleRemove = () => {
        // Remove all items in the thali to delete it
        items.forEach(item => {
            dispatch(removeItem({ thaliId, itemId: item.id }));
        });
    };

    return (
        <View className="bg-white rounded-2xl shadow-lg px-4 py-6 my-4 mx-4 shadow-gray-600 flex flex-col gap-4">
            <View className="flex flex-row items-center justify-between">
                <Text className="text-lg font-bold text-center my-auto">{thaliName}</Text>
                <View className="w-[1px] h-[90%] bg-gray-300" />
                <View>
                    <View className="flex-row bg-[#FC913A] rounded-full px-4 py-2 items-center gap-2 mx-auto">
                        <Pressable
                            onPress={handleDecrement}
                            style={buttonStyle}
                            hitSlop={10}
                            disabled={thaliQuantity <= 1}
                        >
                            <Minus
                                size={16}
                                color={thaliQuantity <= 1 ? '#A0A0A0' : 'white'}
                            />
                        </Pressable>
                        <Text className="text-white font-bold">
                            {thaliQuantity < 10 ? `0${thaliQuantity}` : thaliQuantity}
                        </Text>
                        <Pressable
                            onPress={handleIncrement}
                            style={buttonStyle}
                            hitSlop={10}
                        >
                            <Plus size={16} color="white" />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View className="h-[1px] w-full bg-gray-200" />
            <View>
                {items.map((item) => (
                    <View
                        key={item.id}
                        className="flex-row items-center justify-between mb-1"
                    >
                        <Text className="text-slate-500 font-normal" numberOfLines={1}>
                            {item.title}
                        </Text>
                        <View className="w-[50%] h-[1px] border-t border-dashed border-gray-300" />
                        <Text className="text-md mt-1 text-[#FC913A] font-normal">
                            ₹{item.cost} x {item.quantity}
                        </Text>
                    </View>
                ))}
                <View
                    className="flex-row items-center justify-between mt-3"
                >
                    <Text className="text-slate-800 font-semibold" numberOfLines={1}>
                        Sub Total
                    </Text>
                    <View className="w-[50%] h-[1px] border-t border-dashed border-gray-300" />
                    <Text className="text-md mt-1 text-[#FC913A] font-bold">
                        ₹{items.reduce((total, item) => total + parseFloat(item.cost) * item.quantity, 0).toFixed(2)}
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-center justify-between gap-2">
                <TouchableOpacity
                    onPress={handleRemove}
                    className="border border-[#FC913A] p-3 rounded-lg items-center justify-center flex flex-row gap-4 align-middle text-center w-fit"
                    activeOpacity={0.8}
                >
                    <Trash size={20} color="#FC913A" />
                    <Text className="text-[#fc913a] text-md mt-1 font-bold">Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.push({
                            pathname: '/(screens)/customizeThali',
                            params: { id: thaliId, kitchenId: kitchenId }
                        });
                    }}
                    className="border border-[#FC913A] p-3 rounded-lg items-center justify-center flex flex-row gap-4 align-middle text-center w-fit"
                    activeOpacity={0.8}
                >
                    <Pencil size={18} color="#FC913A" />
                    <Text className="text-[#fc913a] text-md mt-1 font-bold">Edit Thali</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

CartItemCard.displayName = 'CartItemCard';

export default CartItemCard;