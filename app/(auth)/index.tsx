import { loginSuccess } from '@/utils/authSlice';
import { router } from 'expo-router';
import { setParams } from 'expo-router/build/global-state/routing';
import { ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';

const EmailLoginScreen = () => {
  const [email, setEmail] = useState('');
  const isValidEmail = email.includes('@') && email.includes('.com');
  const dispatch = useDispatch();

  return (
    <View className="flex-1 bg-white px-6 pt-2">
      {/* Language Selector */}
      <View className="flex-row justify-end items-end mb-8">
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="text-sm text-gray-700">English</Text>
          <ChevronDown size={18} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text className="text-3xl font-bold text-gray-900 mb-2">
        Welcome to Ovenly
      </Text>
      <Text className="text-sm text-gray-500 mb-6">
        Enter your email address to get started
      </Text>

      {/* Email Input */}
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        Email Address <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-6"
      />

      {/* Continue Button */}
      <TouchableOpacity
        disabled={!isValidEmail}
        className={`w-full py-4 rounded-lg ${isValidEmail ? 'bg-gray-800' : 'bg-gray-300'
          }`}
        onPress={() => {
          if (isValidEmail) {
            router.replace({ pathname: '/(auth)/VerifyOtp', params: { email: email } });
          }
        }}
      >
        <Text
          className={`text-center font-semibold ${isValidEmail ? 'text-white' : 'text-gray-500'
            }`}
        >
          Continue
        </Text>
      </TouchableOpacity>

      {/* Terms & Privacy Policy */}
      <Text className="text-xs text-center text-gray-500 mt-4">
        You agree to our{' '}
        <Text className="text-red-500 font-semibold">Terms of Service</Text> &{' '}
        <Text className="text-red-500 font-semibold">Privacy Policy</Text>.
      </Text>

      {/* Create Account Button */}
      <Text className="text-xs text-center text-gray-500 mt-4">
        Don't have an account?{' '}
        <Text
          className="text-red-500 font-semibold"
          onPress={() => router.replace('/(auth)/SignUp')}
        >
          Create Account
        </Text>
      </Text>

      // TODO : Remove this in production
      <Text className="text-xs text-center text-gray-500 mt-4">
        Dev Mode:{' '}
        <Text
          className="text-red-500 font-semibold"
          onPress={() => {
            // ✅ Set Dummy User and Token for Dev Mode
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
            // ✅ Now navigate to /home successfully
            router.replace("/(tabs)/home");
          }}
        >
          Skip
        </Text>

      </Text>

    </View>
  );
};

export default EmailLoginScreen;
