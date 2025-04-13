import React from 'react';
import { Text, TextInput } from 'react-native';

const CustomTextInput = ({ email, setEmail, placeholder, title }: { email: string, setEmail: (email: string) => void, placeholder: string, title: string }) => {
    return (
        <>
            <Text className="text-xs font-semibold text-gray-600 mb-1">
                {title} <Text className="text-[#FC913A]">*</Text>
            </Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-6"
            />
        </>
    )
}

export default CustomTextInput