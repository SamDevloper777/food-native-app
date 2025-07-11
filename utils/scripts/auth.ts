import axios from "axios";
import { router } from "expo-router";
import { Alert, Animated } from "react-native";
import { loginSuccess } from "../slice/authSlice";
import { setUser } from "../slice/userSlice"; // ✅ add this import

const mapUserToState = (data: any) => ({
    userId: data.user.id,
    userName: data.user.name,
    emailAddress: data.user.email,
    profilePicture: data.user.profile_picture || null,
    phoneNumber: data.user.phone_number || null,
    address: data.user.address || null,
    accessToken: data.token,
    refreshToken: data.refresh_token || null,
    paymentMethod: data.user.payment_method || null,
});

export const handleSignUp = async (
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    setLoading: (loading: boolean) => void,
    dispatch: any
) => {
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

    try {
        const response = await axios.post(
            "http://192.168.1.5:8000/api/user/register/customer/",
            formData,
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        console.log("Registration Successful:", response.data);

        dispatch(loginSuccess({
            user: response.data.user,
            token: response.data.token,
        }));

        dispatch(setUser(mapUserToState(response.data)));

        router.replace("/(tabs)/home");
    } catch (error: any) {
        console.error("❌ API Error:", error.response?.data || error.message);
        Alert.alert(
            "Error",
            error.response?.data?.message || "Registration failed!"
        );
    } finally {
        setLoading(false);
    }
};

export const handleGetOtp = (
    email: string,
    setEmail: (email: string) => void,
    setShowOtp: (showOtp: boolean) => void,
    otpSlideAnim: Animated.Value,
    width: number
) => {
    setEmail(email);
    setShowOtp(true);
    Animated.timing(otpSlideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    }).start();
};

export const handleBackFromOtp = (
    otpSlideAnim: Animated.Value,
    width: number,
    setShowOtp: (showOtp: boolean) => void
) => {
    Animated.timing(otpSlideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        setShowOtp(false);
    });
};

export const slideTo = (
    tab: 'login' | 'signup',
    slideAnim: Animated.Value,
    width: number,
    setActiveTab: (activeTab: 'login' | 'signup') => void
) => {
    const toValue = tab === 'login' ? 0 : -width;
    Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        useNativeDriver: true,
    }).start();
    setActiveTab(tab);
};

export const handleVerifyOtp = async (
    email: string,
    otp: string,
    setIsLoading: (isLoading: boolean) => void,
    dispatch: any
) => {
    if (otp.length !== 4) {
        Alert.alert("Invalid OTP", "Please enter a 4-digit OTP.");
        return;
    }

    setIsLoading(true);
    console.log("Sending OTP:", otp);

    try {
        const response = await axios.post(
            "http://192.168.1.5:8000/api/user/verifyemail/",
            {
                email: email,
                otp: otp,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Verification Success:", response.data);

        dispatch(loginSuccess({
            user: response.data.user,
            token: response.data.token,
        }));

        dispatch(setUser(mapUserToState(response.data)));

        Alert.alert("Success", "OTP Verified Successfully!");
        router.replace("/(tabs)/home");
    } catch (error: any) {
        console.error("API Error:", error.response?.data || error.message);
        Alert.alert(
            "Error",
            error.response?.data?.message || "Verification failed!"
        );
    } finally {
        setIsLoading(false);
    }
};

export const handleSkip = (dispatch: any) => {
    const dummyData = {
        user: {
            id: 1,
            name: "Dev User",
            email: "dev@ovenly.com",
        },
        token: "dummy_dev_token",
    };

    dispatch(loginSuccess(dummyData));

    dispatch(setUser({
        userId: dummyData.user.id.toString(),
        userName: dummyData.user.name,
        emailAddress: dummyData.user.email,
        profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        phoneNumber: null,
        address: [
            {
                title: 'Home',
                address: '2118 Thornridge,\nCir.Syrucuse, Connecticut\nUSA - 35624',
                isDefault: true,
            },
            {
                title: 'Work',
                address: '6589 12th Avenue,\nMintic, New York\nUSA - 35687',
                isDefault: false,
            }
        ],
        accessToken: dummyData.token,
        refreshToken: null,
        wishlist: [
            1033,
            1011,
            1051
        ],
        paymentMethod: null,
    }));

    router.replace("/(tabs)/home");
};

export const handlePress = (
    isFormValid: boolean,
    onSubmit?: () => void,
    onGetOtp?: (email: string) => void,
    email?: string
) => {
    if (isFormValid) {
        if (onSubmit) {
            onSubmit();
        } else if (onGetOtp && email) {
            onGetOtp(email);
        }
    }
};
