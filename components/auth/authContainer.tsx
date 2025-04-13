import React, { useRef, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import LoginSection from './loginSection';
import SignUpSection from './signUpSection';

const { width } = Dimensions.get('window');

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const slideAnim = useRef(new Animated.Value(0)).current;

    const slideTo = (tab: 'login' | 'signup') => {
        const toValue = tab === 'login' ? 0 : -width;
        Animated.timing(slideAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setActiveTab(tab);
    };

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
                        <LoginSection onNavigateToSignUp={() => slideTo('signup')} />
                    </View>
                    <View style={{ width }} className="flex-1">
                        <SignUpSection onNavigateToLogin={() => slideTo('login')} />
                    </View>
                </Animated.View>
            </View>

            {/* Bottom Slider Indicator */}
            <View className="absolute bottom-4 left-0 right-0 items-center">
                <View className="w-[60%] h-1 bg-gray-200 rounded-full overflow-hidden">
                    <Animated.View
                        style={{
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#FC913A',
                            transform: [{
                                translateX: slideAnim.interpolate({
                                    inputRange: [-width, 0],
                                    outputRange: ['100%', '0%'],
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