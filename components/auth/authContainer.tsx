import React, { useRef, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import LoginSection from './loginSection';
import SignUpSection from './signUpSection';
import VerifyOtp from './VerifyOtp';

const { width } = Dimensions.get('window');

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'otp'>('login');
    const [email, setEmail] = useState('');
    const slideAnim = useRef(new Animated.Value(0)).current;

    const slideTo = (tab: 'login' | 'signup' | 'otp') => {
        let toValue = 0;
        switch (tab) {
            case 'login':
                toValue = 0;
                break;
            case 'signup':
                toValue = -width;
                break;
            case 'otp':
                toValue = -width * 2;
                break;
        }
        Animated.timing(slideAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setActiveTab(tab);
    };

    const handleGetOtp = (email: string) => {
        setEmail(email);
        slideTo('otp');
    };

    return (
        <View className="flex-1">
            <View className="flex-1 overflow-hidden">
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        transform: [{ translateX: slideAnim }],
                        width: width * 3,
                    }}
                    className="flex-1"
                >
                    <View style={{ width }} className="flex-1">
                        <LoginSection 
                            onNavigateToSignUp={() => slideTo('signup')} 
                            onGetOtp={handleGetOtp}
                        />
                    </View>
                    <View style={{ width }} className="flex-1">
                        <SignUpSection onNavigateToLogin={() => slideTo('login')} />
                    </View>
                    <View style={{ width }} className="flex-1">
                        <VerifyOtp 
                            email={email} 
                            onBack={() => slideTo('login')} 
                        />
                    </View>
                </Animated.View>
            </View>

            {/* Bottom Slider Indicator */}
            <View className="absolute bottom-4 left-0 right-0 items-center">
                <View className="w-[60%] h-1 bg-gray-200 rounded-full overflow-hidden">
                    <Animated.View
                        style={{
                            width: '33.33%',
                            height: '100%',
                            backgroundColor: '#FC913A',
                            position: 'absolute',
                            left: 0,
                            transform: [{
                                translateX: slideAnim.interpolate({
                                    inputRange: [-width * 2, -width, 0],
                                    outputRange: [width * 0.4, width * 0.2, 0],
                                })
                            }]
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default AuthContainer; 