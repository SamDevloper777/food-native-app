import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/utils/store";
import { logout } from "@/utils/slice/authSlice";
import { router } from "expo-router";

const ProfileHeader = ({ name, image }: any) => (
  <View className="flex-row items-center p-4">
    <Image source={{ uri: image }} className="w-12 h-12 rounded-full" />
    <Text className="text-xl font-bold ml-4">{name}</Text>
  </View>
);

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
          user?.image || "https://randomuser.me/api/portraits/women/44.jpg"
        }
      />

      <TouchableOpacity onPress={handleLogout} className="p-4 bg-red-500 mt-4">
        <Text className="text-white text-center">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
