import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  title: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  required?: boolean;
  confirmPassword?: string;
  isPassword?: boolean;
}

const CustomTextInput = ({ 
  value,
  onChangeText,
  placeholder,
  title,
  keyboardType = 'default',
  secureTextEntry = false,
  required = true,
  confirmPassword,
  isPassword = false
}: CustomTextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const validatePassword = (text: string) => {
    let strength = 0;
    if (text.length >= 8) strength++;
    if (/[A-Z]/.test(text)) strength++;
    if (/[0-9]/.test(text)) strength++;
    if (/[^A-Za-z0-9]/.test(text)) strength++;
    setPasswordStrength(strength);
    onChangeText(text);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  const passwordsMatch = () => {
    if (!isPassword || !confirmPassword) return true;
    return value === confirmPassword;
  };

  const showPasswordError = () => {
    if (!isPassword) return false;
    if (value.length > 0 && value.length < 6) return true;
    return false;
  };

  return (
    <View className='mb-4'>
      <Text className="text-xs font-semibold text-gray-600 mb-1">
        {title} {required && <Text className="text-[#FC913A]">*</Text>}
      </Text>
      <View className="relative">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          autoCapitalize="none"
          value={value}
          onChangeText={isPassword ? validatePassword : onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          className="w-full border-b border-gray-300 text-base text-gray-800 py-2 pr-10"
        />
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-3"
          >
            {showPassword ? <Eye size={20} color="#666" /> : <EyeOff size={20} color="#666" />}
          </TouchableOpacity>
        )}
      </View>
      
      {isPassword && value.length > 0 && (
        <View className="mt-2">
          <View className="flex-row h-1 gap-1">
            {[...Array(4)].map((_, i) => (
              <View 
                key={i} 
                className={`flex-1 rounded-full ${i < passwordStrength ? getPasswordStrengthColor() : 'bg-gray-200'}`}
              />
            ))}
          </View>
          <Text className="text-xs text-gray-500 mt-1">
            {passwordStrength === 0 ? 'Very Weak' :
             passwordStrength === 1 ? 'Weak' :
             passwordStrength === 2 ? 'Medium' :
             passwordStrength === 3 ? 'Strong' : 'Very Strong'}
          </Text>
        </View>
      )}

      {showPasswordError() && (
        <Text className="text-red-500 text-xs mt-1">
          Password must be at least 6 characters long
        </Text>
      )}

      {isPassword && confirmPassword && !passwordsMatch() && (
        <Text className="text-red-500 text-xs mt-1">
          Passwords do not match
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;