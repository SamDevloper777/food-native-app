import BgImage from '@/components/auth/bgImage';
import AuthContainer from '@/components/auth/authContainer';
import React from 'react';
import { View } from 'react-native';

const AuthScreen = () => {
  return (
    <View className="flex-1 relative">
      <BgImage />
      <AuthContainer />
    </View>
  );
};

export default AuthScreen;