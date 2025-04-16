import React, { useState, useCallback, memo } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { useWindowDimensions } from 'react-native';

interface WishlistCardProps {
    title: string;
    description: string;
    rating: number;
    city: string;
    cost: number;
    distance: number;
    time: string;
    url: string;
    onRemove?: () => void;
}

const WishlistCard = memo(({
    title,
    description,
    rating,
    city,
    cost,
    distance,
    time,
    url,
    onRemove
}: WishlistCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { width } = useWindowDimensions();
    const cardWidth = width - 48; // 24px padding on each side

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    const handleRemove = useCallback(() => {
        onRemove?.();
    }, [onRemove]);

    const renderInfoSection = useCallback(() => (
        <View className='flex flex-col justify-between h-full p-4'>
            <View>
                <Text className='text-[18px] font-bold' numberOfLines={1}>{title}</Text>
                <Text className='text-sm font-medium text-gray-500 mt-1' numberOfLines={1}>
                    {description}
                </Text>
                <Text className='text-sm font-bold text-[#2C8D2C] mt-1'>
                    ⭐ {rating} (300k+ Reviews)
                </Text>
            </View>
            <View className='w-full h-[1px] bg-gray-200' />
            <View className='flex flex-row justify-between px-2'>
                <View className='flex flex-col justify-between'>
                    <Text className='text-sm text-black' numberOfLines={1}>{city}</Text>
                    <Text className='text-[#FC913A] font-bold text-base'>₹{cost} for one</Text>
                </View>
                <View className='w-[1px] h-full bg-gray-200' />
                <View className='flex flex-col justify-between'>
                    <View className='flex flex-row items-center space-x-1'>
                        <Entypo name='location-pin' size={16} color='#FC913A' />
                        <Text className='text-sm'>{distance} km</Text>
                    </View>
                    <View className='flex flex-row items-center space-x-1'>
                        <Ionicons name='time-outline' size={16} color='gray' />
                        <Text className='text-sm'>{time}</Text>
                    </View>
                </View>
            </View>
        </View>
    ), [title, description, rating, city, cost, distance, time]);

    return (
        <SafeAreaView className='px-6 mt-4 mb-2'>
            <View 
                className='h-44 w-full rounded-[25px] relative shadow-lg shadow-gray-700'
                style={{ width: cardWidth }}
            >
                <ShimmerPlaceholder
                    visible={imageLoaded}
                    style={{ width: '100%', height: '100%', borderRadius: 25 }}
                >
                    <Image
                        source={{ uri: url }}
                        className='w-full h-full rounded-[25px]'
                        onLoadEnd={handleImageLoad}
                        resizeMode="cover"
                    />
                </ShimmerPlaceholder>

                <View className='absolute z-10 top-0 right-0 w-[60%] h-full bg-white rounded-r-[25px]'>
                    {renderInfoSection()}
                </View>

                <TouchableOpacity
                    className='absolute z-20 top-[3%] left-[27%] bg-white p-1.5 rounded-full'
                    activeOpacity={0.9}
                    onPress={handleRemove}
                >
                    <Ionicons name='heart-outline' size={24} color='red' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
});

WishlistCard.displayName = 'WishlistCard';

export default WishlistCard;
