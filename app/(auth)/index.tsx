import { loginSuccess } from '@/utils/slice/authSlice';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';

const { height } = Dimensions.get('window');

const EmailLoginScreen = () => {
  const [email, setEmail] = useState('');
  const isValidEmail = email.includes('@') && email.includes('.com');
  const dispatch = useDispatch();

  return (
    <View className="flex-1 relative bg-[#FC913A]">
      <Image 
        source={require('../../assets/images/login.jpg')}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        resizeMode="cover"
      />
      {/* Scrollable white sheet starting from bottom */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: height * 0.30 }} className="bg-white px-6 pt-6 rounded-t-3xl h-[700px]">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Ovenly
          </Text>
          <Text className="text-md text-gray-500 mb-6">
            Enter your email address to get started
          </Text>
          <Text className="text-xs font-semibold text-gray-600 mb-1">
            Email Address <Text className="text-[#FC913A]">*</Text>
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
          <View className="flex-row items-center my-6 mx-6">
            <View className="flex-1 h-px bg-gray-300 opacity-70" />
            <Text className="mx-6 text-gray-500 font-semibold">OR</Text>
            <View className="flex-1 h-px bg-gray-300 opacity-70" />
          </View>
          <TouchableOpacity
            onPress={() => {
              // TODO: Google sign-in logic
              console.log('Continue with Google');
            }}
            className="flex-row items-center justify-center bg-gray-100 rounded-lg py-3 px-4 mt-4"
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

          <Text className="text-xs text-center text-gray-500 mt-4">
            You agree to our{' '}
            <Text className="text-[#FC913A] font-semibold">Terms of Service</Text> &{' '}
            <Text className="text-[#FC913A] font-semibold">Privacy Policy</Text>.
          </Text>
          <Text className="text-xs text-center text-gray-500 mt-4">
            Don't have an account?{' '}
            <Text
              className="text-[#FC913A] font-semibold"
              onPress={() => router.replace('/(auth)/SignUp')}
            >
              Create Account
            </Text>
          </Text>
          {/* TODO: Remove this in production */}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default EmailLoginScreen;
