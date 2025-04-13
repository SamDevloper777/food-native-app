import React, { useState } from 'react';
import { View } from 'react-native';
import LoginFormSubmitButton from './loginFormSubmitButton';
import CustomTextInput from '../common/customTextInput';
import Heading from '../common/heading';
import HoriontalDividerWithText from '../common/horiontalDividerWithText';
import Subtitle from '../common/subtitle';
import DevSkip from './devSkip';
import GoogleLogin from './googleLogin';
import NavigateToLoginSignIn from './navigateToLoginSignIn';
import TermsAndService from './termsAndService';
const LoginSection = () => {
    const [email, setEmail] = useState('');

    return (
        <View className="bg-white px-6 pt-6 rounded-t-3xl h-[575px] absolute bottom-0 left-0 right-0">
            <Heading
                heading="Welcome to Ovenly"
            />
            <Subtitle
                subtitle="Enter your email address to get started"
            />
            <CustomTextInput 
                email={email} 
                setEmail={setEmail} 
                placeholder="Enter your email address" 
                title="Email Address" 
            />
            <LoginFormSubmitButton 
                email={email} 
            />
            <HoriontalDividerWithText text="OR" />
            <GoogleLogin />
            <TermsAndService />
            <NavigateToLoginSignIn 
                question="Don't have an account?" 
                text="  Create Account" 
                tag="signup"
            />
            <DevSkip />
        </View>
    )
}

export default LoginSection