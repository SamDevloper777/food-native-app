import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface SubmitButtonProps {
    email: string;
    title: string;
    onSubmit?: () => void;
    username?: string;
    password?: string;
    confirmPassword?: string;
}

const SubmitButton = ({ email, title, onSubmit, username, password, confirmPassword }: SubmitButtonProps) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidUsername = username ? username.length >= 3 : false;
    const isValidPassword = password ? password.length >= 6 : false;
    const isValidConfirmPassword = confirmPassword ? password === confirmPassword : false;
    
    const isFormValid = isValidEmail && isValidUsername && isValidPassword && isValidConfirmPassword;
    
    const buttonStyle = `w-full py-4 rounded-lg ${isFormValid ? 'bg-[#FC913A]' : 'bg-gray-300'}`;
    const textStyle = `text-center text-[16px] font-bold ${isFormValid ? 'text-white' : 'text-gray-500'}`;

    const handlePress = () => {
        if (isFormValid) {
            if (onSubmit) {
                onSubmit();
            } else {
                router.replace({ pathname: '/(auth)/VerifyOtp', params: { email } });
            }
        }
    };

    return (
        <TouchableOpacity
            disabled={!isFormValid}
            className={buttonStyle}
            onPress={handlePress}
        >
            <Text className={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default SubmitButton