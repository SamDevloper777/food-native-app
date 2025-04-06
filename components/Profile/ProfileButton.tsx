import { Pressable, Text, View } from "react-native";
import { logout } from "@/utils/slice/authSlice";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch } from "react-redux";

const ProfileButton = ({ title }: { title: string }) => {
  const dispatch = useDispatch();

  // Define functions for each button
  const handleProfileSetting = () => alert("hi");
  const handleManageAddress = () => alert("hi");
  const handleWishlist = () => alert("hi");
  const handlePayment = () => alert("hi");
  const handleOrderHistory = () => alert("hi");
  const handleVouchers = () => alert("hi");
  const handleNotificationSettings = () => alert("hi");
  const handleLogout = () => {
    dispatch(logout());
    router.replace("/(auth)");
  };

  // Map title to respective function
  const actionMap: Record<string, () => void> = {
    "Profile Setting": handleProfileSetting,
    "Manage Delivery Address": handleManageAddress,
    "My Wishlist": handleWishlist,
    "Manage Payment": handlePayment,
    "My Orders History": handleOrderHistory,
    "My Vouchers": handleVouchers,
    "Notification Settings": handleNotificationSettings,
    "Log out": handleLogout,
  };

  const handlePress = () => {
    const action = actionMap[title];
    if (action) action();
    else console.warn("No action assigned to this button.");
  };

  // Map title to icon name
  const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
    "Profile Setting": "person-outline",
    "Manage Delivery Address": "location-outline",
    "My Wishlist": "heart-outline",
    "Manage Payment": "wallet-outline",
    "My Orders History": "time-outline",
    "My Vouchers": "ticket-outline",
    "Notification Settings": "notifications-outline",
    "Log out": "log-out-outline",
  };

  return (
    <Pressable
      className="flex-row items-center shadow-slate-400 bg-[#F5F5F5] rounded-l-[100px] rounded-r-[25px] shadow-sm mx-4 mb-4 border-2 border-gray-200 pr-4"
      onPress={handlePress}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 64,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 12,
          borderWidth: 1,
          borderColor: "#e5e5e5",
        }}
      >
        <Ionicons name={iconMap[title] || "help-outline"} size={32} color="black" />
      </View>
      <Text className="flex-1 text-[18px] font-medium text-gray-900">{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="gray" />
    </Pressable>
  );
};

export default ProfileButton;
