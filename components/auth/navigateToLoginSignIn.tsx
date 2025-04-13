import { router } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const NavigateToLoginSignIn = ({ text, question, tag = '' }: { text: string, question: string, tag?: string }) => {
    return (
        <Text className="text-xs text-center text-gray-500 mt-4">
            {question}
            <Text
                className="text-[#FC913A] font-semibold"
                onPress={() => router.replace(tag === 'signup' ? '/(auth)/SignUp' : '/')}
            >
                {text}
            </Text>
        </Text>
    )
}

export default NavigateToLoginSignIn