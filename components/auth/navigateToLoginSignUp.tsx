import { router } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

interface NavigateToLoginSignUpProps {
    text: string
    question: string
    tag?: 'signup' | undefined
    onNavigateToSignUp?: () => void
}

const NavigateToLoginSignUp = ({ text, question, tag, onNavigateToSignUp }: NavigateToLoginSignUpProps) => {
    return (
        <Text className="text-xs text-center text-gray-500 mt-3">
            {question}
            <Text
                className="text-[#FC913A] font-semibold"
                onPress={onNavigateToSignUp}
            >
                {text}
            </Text>
        </Text>
    );
}

export default NavigateToLoginSignUp