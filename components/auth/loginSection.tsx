import React, { useState } from 'react';
import { View } from 'react-native';
import CustomTextInput from '../common/customTextInput';
import Heading from '../common/heading';
import HoriontalDividerWithText from '../common/horiontalDividerWithText';
import SubmitButton from '../common/submitButton';
import Subtitle from '../common/subtitle';
import DevSkip from './devSkip';
import GoogleLogin from './googleLogin';
import NavigateToLoginSignIn from './navigateToLoginSignIn';
import TermsAndService from './termsAndService';
import { router } from 'expo-router';

const LoginSection: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const loginComponents = [
        <Heading key="heading" heading="Welcome to Ovenly" />,
        <Subtitle key="subtitle" subtitle="Enter your email address to get started" />,
        <CustomTextInput
            key="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            title="Email Address"
        />,
        <SubmitButton key="submit" email={email} title="Get OTP" onSubmit={() => router.replace({ pathname: '/(auth)/VerifyOtp', params: { email } })} />,
        <HoriontalDividerWithText key="divider" text="OR" />,
        <GoogleLogin key="google" />,
        <TermsAndService key="terms" />,
        <NavigateToLoginSignIn
            key="navigate"
            question="Don't have an account?"
            text="  Create Account"
            tag="signup"
        />
    ];

    if (process.env.EXPO_PUBLIC_DEV_MODE === 'true') {
        loginComponents.push(<DevSkip key="dev" />);
    }

    return (
        <View className="bg-white px-6 pt-6 rounded-t-3xl h-[650px] absolute bottom-0 left-0 right-0">
            {loginComponents}
        </View>
    );
};

export default LoginSection;