import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { loginSuccess } from '@/utils/slice/authSlice';
import { useDispatch } from 'react-redux';

const DevSkip = () => {
    const dispatch = useDispatch();

    return (
        <Text className="text-xs text-center text-gray-500 mt-4">
            Dev Mode:{' '}
            <Text
                className="text-[#FC913A] font-semibold"
                onPress={() => {
                    dispatch(
                        loginSuccess({
                            user: {
                                id: 1,
                                name: "Dev User",
                                email: "dev@ovenly.com",
                            },
                            token: "dummy_dev_token",
                        })
                    );
                    router.replace("/(tabs)/home");
                }}
            >
                Skip
            </Text>
        </Text>
    )
}

export default DevSkip