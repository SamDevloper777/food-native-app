import { logout } from "@/utils/slice/authSlice";
import { RootState } from "@/utils/store";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const ProfileHeader = ({ name, image }: any) => {
  return (
    <View className="bg-white pb-6">
      <Text className="text-[28px] font-bold text-center mt-6">Profile</Text>
      <LinearGradient
        colors={['#FCD6A3', '#FC913A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: 130,
          marginHorizontal: 16,
          marginTop: 16,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      />
      <View className="items-center -mt-12">
        <Image
          source={{ uri: image }}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </View>
      <View className="items-center">
        <Text className="text-lg font-bold text-black">{name}</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/(auth)");
  };

  return (
    <ScrollView className="bg-white flex-1">
      <ProfileHeader
        name={user?.name || "Guest"}
        image={
          user?.image || "https://randomuser.me/api/portraits/men/44.jpg"
        }
      />

      <TouchableOpacity onPress={handleLogout} className="p-4 bg-[#FC913A] mt-4">
        <Text className="text-white text-center">Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
