import { handleSignUp } from '@/utils/scripts/auth';
import React, { useState, useCallback, useMemo } from 'react';
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

    const handleEmailChange = useCallback((text: string) => setEmail(text), []);
    const handleUsernameChange = useCallback((text: string) => setUsername(text), []);
    const handlePasswordChange = useCallback((text: string) => setPassword(text), []);
    const handleConfirmPasswordChange = useCallback((text: string) => setConfirmPassword(text), []);

    const handleSubmit = useCallback(() => {
        handleSignUp(email, username, password, confirmPassword, setLoading, dispatch);
    }, [email, username, password, confirmPassword, dispatch]);

    const signUpComponents = useMemo(() => {
        const components = [
            <Heading key="heading" heading="Create Your Account" />,
            <Subtitle key="subtitle" subtitle="Enter the details below to sign up" />,
            <CustomTextInput
                key="email"
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter your email address"
                title="Email Address"
                keyboardType="email-address"
            />,
            <CustomTextInput
                key="username"
                value={username}
                onChangeText={handleUsernameChange}
                placeholder="Enter your username"
                title="Username (Minimum 3 characters)"
                keyboardType="default"
            />,
            <CustomTextInput
                key="password"
                value={password}
                onChangeText={handlePasswordChange}
                placeholder="Enter your password"
                title="Password (Minimum 6 characters)"
                secureTextEntry={true}
                keyboardType="default"
                isPassword={true}
            />,
            <CustomTextInput
                key="confirmPassword"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
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
                onSubmit={handleSubmit}
            />,
            <TermsAndService key="terms" />,
            <NavigateToLoginSignUp 
                key="navigate" 
                text="  Login" 
                question="Already have an account?" 
                onNavigateToSignUp={onNavigateToLogin} 
            />
        ];

        if (process.env.EXPO_PUBLIC_DEV_MODE === 'true') {
            components.push(<DevSkip key="dev" />);
        }

        return components;
    }, [
        email, username, password, confirmPassword,
        handleEmailChange, handleUsernameChange, 
        handlePasswordChange, handleConfirmPasswordChange,
        handleSubmit, onNavigateToLogin
    ]);

    return (
        <ScrollView 
            className="bg-white px-6 pt-6 h-[650px] bottom-0 absolute left-0 right-0"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            {signUpComponents}
        </ScrollView>
    );
};

export default React.memo(SignUpSection);