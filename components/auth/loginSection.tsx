import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from '../common/customTextInput';
import Heading from '../common/heading';
import HoriontalDividerWithText from '../common/horiontalDividerWithText';
import SubmitButton from '../common/submitButton';
import Subtitle from '../common/subtitle';
import DevSkip from './devSkip';
import GoogleLogin from './googleLogin';
import TermsAndService from './termsAndService';
import NavigateToLoginSignUp from './navigateToLoginSignUp';

interface LoginSectionProps {
    onNavigateToSignUp: () => void;
    onGetOtp: (email: string) => void;
}

const LoginSection: React.FC<LoginSectionProps> = ({ onNavigateToSignUp, onGetOtp }) => {
    const [email, setEmail] = useState<string>('');

    const handleEmailChange = useCallback((text: string) => {
        setEmail(text);
    }, []);

    const handleSubmit = useCallback(() => {
        onGetOtp(email);
    }, [email, onGetOtp]);

    const loginComponents = useMemo(() => {
        const components = [
            <Heading key="heading" heading="Welcome to Ovenly" />,
            <Subtitle key="subtitle" subtitle="Enter your email address to get started" />,
            <CustomTextInput
                key="email"
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter your email address"
                title="Email Address"
            />,
            <SubmitButton
                key="submit"
                email={email}
                title="Get OTP"
                isLogin={true}
                onSubmit={handleSubmit}
            />,
            <HoriontalDividerWithText key="divider" text="OR" />,
            <GoogleLogin key="google" />,
            <TermsAndService key="terms" />,
            <NavigateToLoginSignUp 
                key="navigate" 
                text="  Create Account" 
                question="Don't have an account?" 
                onNavigateToSignUp={onNavigateToSignUp} 
            />
        ];

        if (process.env.EXPO_PUBLIC_DEV_MODE === 'true') {
            components.push(<DevSkip key="dev" />);
        }

        return components;
    }, [email, handleEmailChange, handleSubmit, onNavigateToSignUp]);

    return (
        <View className="bg-white px-6 pt-6 h-[650px] bottom-0 absolute left-0 right-0">
            {loginComponents}
        </View>
    );
};

export default React.memo(LoginSection);