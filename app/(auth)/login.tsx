import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import { ChevronLeft, ChevronDown } from "lucide-react-native";

const Login: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>("IN"); 
  const [callingCode, setCallingCode] = useState<string>("+91");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <View className="flex-1 bg-white p-5">
      {/* Top Navigation */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full">
          <Text className="text-gray-600 mr-1">English</Text>
          <ChevronDown size={16} color="black" />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text className="text-2xl font-bold mt-6">Welcome to Ovenly</Text>
      <Text className="text-gray-600 mt-1">We'll send you a verification code to get started</Text>

      {/* Phone Number Input */}
      <Text className="text-sm font-semibold mt-5 text-gray-800">
        Phone number <Text className="text-red-500">*</Text>
      </Text>
      <View className="flex-row items-center border-b border-gray-400 pb-2 mt-2">
        <CountryPicker
          withCallingCode
          withFlag
          withFilter
          countryCode={countryCode}
          onSelect={(country: Country) => {
            setCountryCode(country.cca2);
            setCallingCode(`+${country.callingCode[0]}`);
          }}
        />
        <Text className="text-lg ml-2">{callingCode}</Text>
        <TextInput
          className="flex-1 text-lg ml-3"
          keyboardType="phone-pad"
          placeholder="9876XXXXXX"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`py-3 mt-6 rounded-lg ${
          phoneNumber.length < 8 ? "bg-gray-200" : "bg-black"
        }`}
        disabled={phoneNumber.length < 8}
      >
        <Text
          className={`text-center text-lg font-semibold ${
            phoneNumber.length < 8 ? "text-gray-400" : "text-white"
          }`}
        >
          Continue
        </Text>
      </TouchableOpacity>

      {/* Terms & Policy */}
      <Text className="text-center text-sm text-gray-600 mt-4">
        You agree to our{" "}
        <Text className="text-red-500 font-bold">Terms of Service</Text> &{" "}
        <Text className="text-red-500 font-bold">Privacy Policy</Text>.
      </Text>
    </View>
  );
};

export default Login;
