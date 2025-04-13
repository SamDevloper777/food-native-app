import { handlePress } from '@/utils/scripts/auth';
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
    isLogin?: boolean;
    onGetOtp?: (email: string) => void;
}

const SubmitButton = ({ email, title, onSubmit, username, password, confirmPassword, isLogin = false, onGetOtp }: SubmitButtonProps) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidUsername = username ? username.length >= 3 : false;
    const isValidPassword = password ? password.length >= 6 : false;
    const isValidConfirmPassword = confirmPassword ? password === confirmPassword : false;
    
    // For login, only check email. For signup, check all fields
    const isFormValid = isLogin ? isValidEmail : (isValidEmail && isValidUsername && isValidPassword && isValidConfirmPassword);
    
    const buttonStyle = `w-full py-4 rounded-lg ${isFormValid ? 'bg-[#FC913A]' : 'bg-gray-300'}`;
    const textStyle = `text-center text-[16px] font-bold ${isFormValid ? 'text-white' : 'text-gray-500'}`;

    return (
        <TouchableOpacity
            disabled={!isFormValid}
            className={buttonStyle}
            onPress={() => handlePress(isFormValid, onSubmit, onGetOtp, email)  }
        >
            <Text className={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default SubmitButton