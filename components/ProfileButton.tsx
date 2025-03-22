import { View, Text, TouchableOpacity, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";


const ProfileButton = () => {
  return (
    <Pressable className="flex-row items-center p-4 shadow-slate-400 shadow bg-gray-100 rounded-2xl shadow-sm mx-4">

    <View className="w-12 h-12 bg-gray-100 rounded-[100%] flex items-center justify-center mr-3">
      <Ionicons name="person-outline" size={22} color="black" />
    </View>
    
    <Text className="flex-1 text-lg font-medium text-gray-900">Profile Setting</Text>

    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
  </Pressable>
  )
}

export default ProfileButton