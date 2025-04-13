import { router } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

interface NavigateToLoginSignInProps {
    text: string
    question: string
    tag?: 'signup' | undefined
}

const NavigateToLoginSignIn = ({ text, question, tag }: NavigateToLoginSignInProps) => {
    const handlePress = () => router.replace(tag === 'signup' ? '/(auth)/SignUp' : '/');

    return (
        <Text className="text-xs text-center text-gray-500 mt-3">
            {question}
            <Text
                className="text-[#FC913A] font-semibold"
                onPress={handlePress}
            >
                {text}
            </Text>
        </Text>
    );
}

export default NavigateToLoginSignIn