import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";

const VerifyOtp = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const otpInputRef = useRef<OTPTextInput>(null);

  // 🔥 Call API to verify email
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
      return;
    }

    setIsLoading(true);
    console.log("📤 Sending OTP:", otp);

    try {
      const response = await axios.post(
        "http://192.168.1.6:8000/api/user/verifyemail/",
        {
          email: email,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Verification Success:", response.data);
      Alert.alert("Success", "OTP Verified Successfully!");
      router.replace("/(tabs)/home"); // Go to home after success
    } catch (error: any) {
      console.error("❌ API Error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Verification failed!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-5 pt-2">
      {/* Top Navigation */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.replace("/(auth)")}>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-red-500 font-medium">Need help?</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Subtitle */}
      <Text className="text-2xl font-bold mt-6">Verify Your Email</Text>
      <Text className="text-gray-500 mt-1">
        Enter the PIN sent to <Text className="font-semibold">{email}</Text>
      </Text>

      {/* OTP Input */}
      <View className="flex-row justify-center mt-6">
        <OTPTextInput
          ref={otpInputRef}
          handleTextChange={(code) => setOtp(code)}
          inputCount={6}
          keyboardType="numeric"
          textInputStyle={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#F5F5F5",
            borderWidth: 1,
            borderColor: "#E5E5E5",
          }}
          tintColor="#A52A2A" // Focus color
        />
      </View>

      {/* Show Entered OTP */}
      {otp.length === 6 && (
        <Text className="text-center text-gray-600 mt-3">
          Entered OTP: {otp}
        </Text>
      )}

      {/* Loader or Continue Button */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#A52A2A" className="mt-6" />
      ) : (
        <TouchableOpacity
          className={`py-3 mt-6 rounded-lg ${
            otp.length === 6 ? "bg-black" : "bg-gray-200"
          }`}
          disabled={otp.length !== 6 || isLoading}
          onPress={handleVerifyOtp}
        >
          <Text
            className={`text-center text-lg font-semibold ${
              otp.length === 6 ? "text-white" : "text-gray-400"
            }`}
          >
            Continue
          </Text>
        </TouchableOpacity>
      )}

      {/* Try Another Way */}
      <TouchableOpacity className="mt-5">
        <Text className="text-red-500 font-semibold">Try another way</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOtp;
