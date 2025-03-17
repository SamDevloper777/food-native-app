import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { ChevronLeft } from "lucide-react-native";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState("");
  const otpInputRef = useRef<OTPTextInput>(null);

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      {/* Top Navigation */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity>
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
          inputCount={5}
          keyboardType="numeric"
          textInputStyle={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#F5F5F5",
            fontSize: 20,
            textAlign: "center",
          }}
          tintColor="#A52A2A"
        />
      </View>

      {/* Show Entered OTP */}
      {otp.length === 5 && (
        <Text className="text-center text-gray-600 mt-3">Entered OTP: {otp}</Text>
      )}

      {/* Try Another Way */}
      <TouchableOpacity className="mt-5">
        <Text className="text-red-500 font-semibold">Try another way</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOtp;
