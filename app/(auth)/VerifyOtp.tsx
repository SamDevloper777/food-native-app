import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";

const VerifyOtp = () => {
  const [otp, setOtp] = useState<string>("");
  const otpInputRef = useRef<OTPTextInput>(null);

  const handleContinue = () => {
    if (otp.length === 6) {
      console.log("✅ OTP Verified:", otp);
      router.replace("/(tabs)/aindex"); 
    }
  };

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      {/* Top Navigation */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-red-500 font-medium">Need help?</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Subtitle */}
      <Text className="text-2xl font-bold mt-6">Verify Your Number</Text>
      <Text className="text-gray-500 mt-1">Enter your PIN here to log in</Text>

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

      {/* Continue Button */}
      <TouchableOpacity
        className={`py-3 mt-6 rounded-lg ${
          otp.length === 6 ? "bg-black" : "bg-gray-200"
        }`}
        disabled={otp.length !== 6}
        onPress={handleContinue}
      >
        <Text
          className={`text-center text-lg font-semibold ${
            otp.length === 6 ? "text-white" : "text-gray-400"
          }`}
        >
          Continue
        </Text>
      </TouchableOpacity>

      {/* Try Another Way */}
      <TouchableOpacity className="mt-5">
        <Text className="text-red-500 font-semibold">Try another way</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOtp;
