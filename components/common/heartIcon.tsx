import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootState } from '@/utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '@/utils/slice/userSlice';
import { Ionicons } from '@expo/vector-icons';

const HeartIcon = ({id}: {id: number}) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    return (
        <TouchableOpacity className='p-3 rounded-full bg-white shadow shadow-gray-500' onPress={() => {
            if (user.wishlist?.some((wishlistedThaliId) => wishlistedThaliId === id)) {
                dispatch(removeFromWishlist(id));
            } else {
                dispatch(addToWishlist(id));
            }
        }}>
            {
                user.wishlist?.some((wishlistedThaliId) => wishlistedThaliId === id) ?
                    <Ionicons name="heart" size={26} color="red" /> :
                    <Ionicons name="heart-outline" size={26} color="gray" />
            }
        </TouchableOpacity>
    )
}

export default HeartIcon