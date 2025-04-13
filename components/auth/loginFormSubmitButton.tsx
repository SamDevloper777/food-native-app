import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface LoginFormSubmitButtonProps {
    email: string;
}

const LoginFormSubmitButton = ({ email }: LoginFormSubmitButtonProps) => {
    const isValidEmail = email.includes('@') && email.includes('.com');

    return (
        <TouchableOpacity
            disabled={!isValidEmail}
            className={`w-full py-4 rounded-lg ${isValidEmail ? 'bg-[#FC913A]' : 'bg-gray-300'}`}
            onPress={() => {
                if (isValidEmail) {
                    router.replace({ pathname: '/(auth)/VerifyOtp', params: { email: email } });
                }
            }}
        >
            <Text
                className={`text-center text-[16px] font-bold ${isValidEmail ? 'text-white' : 'text-gray-500'}`}
            >
                Send OTP
            </Text>
        </TouchableOpacity>
    )
}

export default LoginFormSubmitButton