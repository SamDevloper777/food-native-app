import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import axios from "axios";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/utils/slice/authSlice";

interface VerifyOtpProps {
    email: string;
    onBack: () => void;
}

const VerifyOtp: React.FC<VerifyOtpProps> = ({ email, onBack }) => {
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const otpInputRef = useRef<OTPTextInput>(null);
  const dispatch = useDispatch();

  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      Alert.alert("Invalid OTP", "Please enter a 4-digit OTP.");
      return;
    }

    setIsLoading(true);
    console.log("Sending OTP:", otp);

    try {
      const response = await axios.post(
        "http://192.168.1.5:8000/api/user/verifyemail/",
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

      console.log("Verification Success:", response.data);

      dispatch(
        loginSuccess({
          user: response.data.user,
          token: response.data.token,
        })
      );

      Alert.alert("Success", "OTP Verified Successfully!");
      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("API Error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Verification failed!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-5 pt-2 h-[650px] bottom-0 absolute left-0 right-0">
      <View className="flex-row items-center justify-between mt-5">
        <TouchableOpacity onPress={onBack}>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-[#FC913A] font-medium">Need help?</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-2xl font-bold mt-6">Verify Your Email</Text>
      <Text className="text-gray-500 mt-1">
        Enter the PIN sent to <Text className="font-semibold">{email}</Text>
      </Text>

      <View className="flex-row justify-center mt-6">
        <OTPTextInput
          ref={otpInputRef}
          handleTextChange={(code) => setOtp(code)}
          inputCount={4}
          keyboardType="numeric"
          textInputStyle={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#F5F5F5",
            borderWidth: 1,
            borderColor: "#E5E5E5",
          }}
          tintColor="#A52A2A"
        />
      </View>

      {otp.length === 4 && (
        <Text className="text-center text-gray-600 mt-3">
          Entered OTP: {otp}
        </Text>
      )}

      {isLoading ? (
        <ActivityIndicator size="large" color="#A52A2A" className="mt-6" />
      ) : (
        <TouchableOpacity
          className={`py-3 mt-6 rounded-lg ${
            otp.length === 4 ? "bg-black" : "bg-gray-200"
          }`}
          disabled={otp.length !== 4 || isLoading}
          onPress={handleVerifyOtp}
        >
          <Text
            className={`text-center text-lg font-semibold ${
              otp.length === 4 ? "text-white" : "text-gray-400"
            }`}
          >
            Continue
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VerifyOtp;
