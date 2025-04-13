import BgImage from '@/components/auth/bgImage';
import LoginSection from '@/components/auth/loginSection';
import React from 'react';
import {
  View
} from 'react-native';

const EmailLoginScreen = () => {
  return (
    <View className="flex-1 relative bg-[#FC913A]">
      <BgImage />
      <LoginSection />
    </View>
  );
};

export default EmailLoginScreen;