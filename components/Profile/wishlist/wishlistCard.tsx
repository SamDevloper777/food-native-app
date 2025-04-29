import React, { useState, useCallback, memo } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { useWindowDimensions } from 'react-native';
import { thalis } from '@/utils/constants/kitchenProfile';
import { kitchens } from '@/utils/constants/home';
import { wishlistData } from '@/utils/constants/wishlist';
import HeartIcon from '@/components/common/heartIcon';

interface WishlistCardProps {
    thaliId: number;
}

const WishlistCard = memo(({
    thaliId
}: WishlistCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { width } = useWindowDimensions();
    const cardWidth = width - 48;
    const mainCourseTotal = thalis.filter(thali => thali.id === thaliId)[0].mainCourse?.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0);
    const startersTotal = thalis.filter(thali => thali.id === thaliId)[0].starters?.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0);
    const dessertsTotal = thalis.filter(thali => thali.id === thaliId)[0].desserts?.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0);

    const totalCost = mainCourseTotal + startersTotal + dessertsTotal;

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    const handleRemove = useCallback(() => {
        wishlistData.splice(wishlistData.indexOf(thaliId), 1);
    }, []);

    const renderInfoSection = useCallback(() => (
        <View className='flex flex-col justify-between h-full p-4'>
            <View>
                <Text className='text-[18px] font-bold' numberOfLines={1}>{thalis.filter(thali => thali.id === thaliId)[0].title}</Text>
                <Text className='text-sm font-medium text-gray-500 mt-1' numberOfLines={1}>
                    {thalis.filter(thali => thali.id === thaliId)[0].description}
                </Text>
                <Text className='text-sm font-bold text-[#2C8D2C] mt-1'>
                    ⭐ {thalis.filter(thali => thali.id === thaliId)[0].rating} (300k+ Reviews)
                </Text>
            </View>
            <View className='w-full h-[1px] bg-gray-300' />
            <View className='flex flex-row justify-between px-2'>
                <View className='flex flex-col justify-center items-center ml-3'>
                    <Text className='text-[#FC913A] font-bold text-lg'>₹{totalCost}/-</Text>
                </View>
                <View className='w-[1px] h-full bg-gray-300' />
                <View className='flex flex-col justify-between items-center mr-2'>
                    <View className='flex flex-row items-center space-x-1'>
                        <Entypo name='location-pin' size={16} color='#FC913A' />
                        <Text className='text-sm'>{kitchens.filter(kitchen => kitchen.id === thalis.filter(thali => thali.id === thaliId)[0].kitchenId)[0]?.distance} km</Text>
                    </View>
                    <View className='flex flex-row items-center space-x-1'>
                        <Ionicons name='time-outline' size={16} color='gray' />
                        <Text className='text-sm'>{thalis.filter(thali => thali.id === thaliId)[0].time}</Text>
                    </View>
                </View>
            </View>
        </View>
    ), [thaliId, totalCost]);

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
                        source={{ uri: thalis.filter(thali => thali.id === thaliId)[0].url }}
                        className='w-full h-full rounded-[25px]'
                        onLoadEnd={handleImageLoad}
                        resizeMode="cover"
                    />
                </ShimmerPlaceholder>

                <View className='absolute z-10 top-0 right-0 w-[60%] h-full bg-white rounded-r-[25px]'>
                    {renderInfoSection()}
                </View>
                <View className='absolute z-20 top-[3%] left-[25%] bg-white rounded-full'>
                    <HeartIcon id={thaliId} />
                </View>
            </View>
        </SafeAreaView>
    );
});

WishlistCard.displayName = 'WishlistCard';

export default WishlistCard;
