import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
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

      {/* Email Input */}
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        className="border-b border-gray-300 py-2 mb-4"
      />

      {/* Username Input */}
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        className="border-b border-gray-300 py-2 mb-4"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="border-b border-gray-300 py-2 mb-4"
      />

      {/* Confirm Password */}
      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border-b border-gray-300 py-2 mb-6"
      />

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleSignUp}
        disabled={!isValidForm || loading}
        className={`w-full py-4 rounded-lg ${
          isValidForm ? "bg-black" : "bg-gray-300"
        }`}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            className={`text-center font-semibold ${
              isValidForm ? "text-white" : "text-gray-500"
            }`}
          >
            Continue
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
