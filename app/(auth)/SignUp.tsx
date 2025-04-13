import BgImage from '@/components/auth/bgImage';
import SignUpSection from '@/components/auth/signUpSection';
import React from 'react';
import {
  View
} from 'react-native';

const EmailLoginScreen = () => {
  return (
    <View className="flex-1 relative">
      <BgImage />
      <SignUpSection />
    </View>
  );
};

export default EmailLoginScreen;