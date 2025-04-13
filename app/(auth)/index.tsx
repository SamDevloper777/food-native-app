import BgImage from '@/components/auth/bgImage';
import LoginSection from '@/components/auth/loginSection';
import SignUpSection from '@/components/auth/signUpSection';
import React from 'react';
import {
  View
} from 'react-native';

const EmailLoginScreen = () => {
  return (
    <View className="flex-1 relative">
      <BgImage />
      <LoginSection />
      {/* <SignUpSection /> */}
    </View>
  );
};

export default EmailLoginScreen;