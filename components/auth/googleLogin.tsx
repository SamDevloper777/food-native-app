import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const GoogleLogin = () => {
    return (
        <TouchableOpacity
            onPress={() => {
                // TODO: Google sign-in logic
                console.log('Continue with Google');
            }}
            className="flex-row items-center justify-center bg-gray-100 rounded-lg py-3 px-4"
            style={{
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                elevation: 2, // for Android
            }}
        >
            <Ionicons name="logo-google" size={20} color="#EA4335" style={{ marginRight: 10 }} />
            <Text className="text-gray-700 font-semibold text-base">Continue with Google</Text>
        </TouchableOpacity>
    )
}

export default GoogleLogin