import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Dimensions, BackHandler } from 'react-native';
import LoginSection from './loginSection';
import SignUpSection from './signUpSection';
import VerifyOtp from './VerifyOtp';
import { handleGetOtp, slideTo, handleBackFromOtp } from '@/utils/scripts/auth';

const { width } = Dimensions.get('window');

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [email, setEmail] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const otpSlideAnim = useRef(new Animated.Value(width)).current;

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (showOtp) {
                handleBackFromOtp(otpSlideAnim, width, setShowOtp);
                return true;
            }
            return false;
        });

        return () => backHandler.remove();
    }, [showOtp, otpSlideAnim]);

    const handleOtpRequest = () => handleGetOtp(email, setEmail, setShowOtp, otpSlideAnim, width);
    const handleBack = () => handleBackFromOtp(otpSlideAnim, width, setShowOtp);
    const navigateToSignup = () => slideTo('signup', slideAnim, width, setActiveTab);
    const navigateToLogin = () => slideTo('login', slideAnim, width, setActiveTab);

    const sliderTransform = slideAnim.interpolate({
        inputRange: [-width, 0],
        outputRange: [width * 0.3, 0],
    });

    return (
        <View className="flex-1">
            <View className="flex-1 overflow-hidden">
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        transform: [{ translateX: slideAnim }],
                        width: width * 2,
                    }}
                    className="flex-1"
                >
                    <View style={{ width }} className="flex-1">
                        <LoginSection 
                            onNavigateToSignUp={navigateToSignup}
                            onGetOtp={handleOtpRequest}
                        />
                    </View>
                    <View style={{ width }} className="flex-1">
                        <SignUpSection onNavigateToLogin={navigateToLogin} />
                    </View>
                </Animated.View>

                {showOtp && (
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            transform: [{ translateX: otpSlideAnim }],
                        }}
                    >
                        <VerifyOtp 
                            email={email}
                            onBack={handleBack}
                        />
                    </Animated.View>
                )}
            </View>

            <View className="absolute bottom-4 left-0 right-0 items-center">
                <View className="w-[60%] h-1 bg-gray-200 rounded-full overflow-hidden">
                    <Animated.View
                        style={{
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#FC913A',
                            position: 'absolute',
                            left: 0,
                            transform: [{
                                translateX: sliderTransform
                            }]
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default AuthContainer;