import { handleSignUp } from '@/utils/scripts/signUp';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomTextInput from '../common/customTextInput';
import Heading from '../common/heading';
import SubmitButton from '../common/submitButton';
import Subtitle from '../common/subtitle';
import DevSkip from './devSkip';
import NavigateToLoginSignUp from './navigateToLoginSignUp';
import TermsAndService from './termsAndService';

interface SignUpSectionProps {
    onNavigateToLogin: () => void;
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onNavigateToLogin }) => {
    const [email, setEmail] = useState<string>('');
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signUpComponents = [
        <Heading key="heading" heading="Create Your Account" />,
        <Subtitle key="subtitle" subtitle="Enter the details below to sign up" />,
        <CustomTextInput
            key="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            title="Email Address"
            keyboardType="email-address"
        />,
        <CustomTextInput
            key="username"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            title="Username (Minimum 3 characters)"
            keyboardType="default"
        />,
        <CustomTextInput
            key="password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            title="Password (Minimum 6 characters)"
            secureTextEntry={true}
            keyboardType="default"
            isPassword={true}
        />,
        <CustomTextInput
            key="confirmPassword"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            title="Confirm Password"
            secureTextEntry={true}
            keyboardType="default"
            confirmPassword={password}
        />,
        <SubmitButton 
            key="submit" 
            email={email} 
            username={username}
            password={password}
            confirmPassword={confirmPassword}
            title="Sign Up" 
            onSubmit={() => handleSignUp(email, username, password, confirmPassword, setLoading, dispatch)} 
        />,
        <TermsAndService key="terms" />,
        <NavigateToLoginSignUp key="navigate" text="  Login" question="Already have an account?" onNavigateToSignUp={onNavigateToLogin} />
    ];

    if (process.env.EXPO_PUBLIC_DEV_MODE === 'true') {
        signUpComponents.push(<DevSkip key="dev" />);
    }

    return (
        <ScrollView className="bg-white px-6 pt-6 h-[650px] bottom-0 absolute left-0 right-0">
            {signUpComponents}
        </ScrollView>
    );
};

export default SignUpSection;