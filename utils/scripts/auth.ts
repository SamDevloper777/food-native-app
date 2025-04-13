import axios from "axios";
import { router } from "expo-router";
import { Alert, Animated } from "react-native";
import { loginSuccess } from "../slice/authSlice";

export const handleSignUp = async (email: string, username: string, password: string, confirmPassword: string, setLoading: (loading: boolean) => void, dispatch: any) => {
    const isValidForm =
        email.includes("@") &&
        username.length >= 3 &&
        password.length >= 6 &&
        password === confirmPassword;

    if (!isValidForm) {
        Alert.alert("Error", "Please fill all the fields correctly.");
        return;
    }

    setLoading(true);
    const formData = { email, name: username, password };

    console.log(formData);

    // try {
    //     const response = await axios.post(
    //         "http://192.168.1.5:8000/api/user/register/customer/",
    //         formData,
    //         {
    //             headers: { "Content-Type": "application/json" },
    //         }
    //     );

    //     console.log("Registration Successful:", response.data);

    //     // Save User & Token in Redux
    //     dispatch(
    //         loginSuccess({
    //             user: response.data.user,
    //             token: response.data.token,
    //         })
    //     );

    //     router.replace("/(tabs)/home");
    // } catch (error: any) {
    //     console.error("❌ API Error:", error.response?.data || error.message);
    //     Alert.alert(
    //         "Error",
    //         error.response?.data?.message || "Registration failed!"
    //     );
    // } finally {
    //     setLoading(false);
    // }
};  

export const handleGetOtp = (email: string, setEmail: (email: string) => void, setShowOtp: (showOtp: boolean) => void, otpSlideAnim: Animated.Value, width: number) => {
    setEmail(email);
    setShowOtp(true);
    Animated.timing(otpSlideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    }).start();
};

export const handleBackFromOtp = (otpSlideAnim: Animated.Value, width: number, setShowOtp: (showOtp: boolean) => void) => {
    Animated.timing(otpSlideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        setShowOtp(false);
    });
};

export const slideTo = (tab: 'login' | 'signup', slideAnim: Animated.Value, width: number, setActiveTab: (activeTab: 'login' | 'signup') => void) => {
    const toValue = tab === 'login' ? 0 : -width;
    Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        useNativeDriver: true,
    }).start();
    setActiveTab(tab);
};
