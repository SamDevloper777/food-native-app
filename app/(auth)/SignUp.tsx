import { useDispatch } from "react-redux";
import { loginSuccess } from "@/utils/authSlice";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidForm =
    email.includes("@") &&
    username.length >= 3 &&
    password.length >= 6 &&
    password === confirmPassword;

  const handleSignUp = async () => {
    if (!isValidForm) {
      Alert.alert("Error", "Please fill all the fields correctly.");
      return;
    }

    setLoading(true);
    const formData = { email, name: username, password };

    try {
      const response = await axios.post(
        "http://192.168.1.5:8000/api/user/register/customer/",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Registration Successful:", response.data);

      // ✅ Save User & Token in Redux
      dispatch(
        loginSuccess({
          user: response.data.user,
          token: response.data.token,
        })
      );

      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("❌ API Error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Registration failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-8">
      <Text className="text-3xl font-bold text-gray-900 mb-2">
        Create Your Account
      </Text>
      <Text className="text-sm text-gray-500 mb-6">
        Enter the details below to sign up
      </Text>
      {/* Email Input */}
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        Email Address <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-4"
      />

      {/* Username Input */}
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        Username (at least 3 characters)
        <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        placeholder="Enter your username"
        placeholderTextColor="#999"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
        className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-4"
      />

      {/* Password */}
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        Password (at least 6 characters)
        <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-4"
      />

      {/* Confirm Password */}
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        Confirm Password <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        placeholder="Confirm your password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="w-full border-b border-gray-300 text-base text-gray-800 py-2 mb-6"
      />

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleSignUp}
        disabled={!isValidForm || loading}
        className={`w-full py-4 rounded-lg ${isValidForm ? "bg-black" : "bg-gray-300"
          }`}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            className={`text-center font-semibold ${isValidForm ? "text-white" : "text-gray-500"
              }`}
          >
            Continue
          </Text>
        )}
      </TouchableOpacity>
      {/* Already have an account? */}
      <Text className="text-xs text-center text-gray-500 mt-4">
        Already have an account?{' '}
        <Text
          onPress={() => router.replace('/(auth)')}
          className="text-red-500 font-bold"
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
