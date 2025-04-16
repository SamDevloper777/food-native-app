import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { View, Animated, Dimensions, BackHandler, ViewStyle } from 'react-native';
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

    const handleOtpRequest = useCallback(() => 
        handleGetOtp(email, setEmail, setShowOtp, otpSlideAnim, width),
        [email, otpSlideAnim]
    );

    const handleBack = useCallback(() => 
        handleBackFromOtp(otpSlideAnim, width, setShowOtp),
        [otpSlideAnim]
    );

    const navigateToSignup = useCallback(() => 
        slideTo('signup', slideAnim, width, setActiveTab),
        [slideAnim]
    );

    const navigateToLogin = useCallback(() => 
        slideTo('login', slideAnim, width, setActiveTab),
        [slideAnim]
    );

    const sliderTransform = useMemo(() => 
        slideAnim.interpolate({
            inputRange: [-width, 0],
            outputRange: [width * 0.3, 0],
        }),
        [slideAnim]
    );

    const animatedStyle = useMemo<Animated.WithAnimatedValue<ViewStyle>>(() => ({
        flexDirection: 'row' as const,
        transform: [{ translateX: slideAnim }],
        width: width * 2,
    }), [slideAnim]);

    const otpAnimatedStyle = useMemo<Animated.WithAnimatedValue<ViewStyle>>(() => ({
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: [{ translateX: otpSlideAnim }],
    }), [otpSlideAnim]);

    return (
        <View className="flex-1">
            <View className="flex-1 overflow-hidden">
                <Animated.View
                    style={animatedStyle}
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
                    <Animated.View style={otpAnimatedStyle}>
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

export default React.memo(AuthContainer);