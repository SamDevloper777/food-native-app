import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

const ProfileHeader = ({ name, image }) => (
  <View className="flex-row items-center p-4">
    <Image source={{ uri: image }} className="w-12 h-12 rounded-full" />
    <Text className="text-xl font-bold ml-4">{name}</Text>
  </View>
);

const CategoryButton = ({ icon, label }) => (
  <TouchableOpacity className="items-center p-4">
    {icon}
    <Text className="mt-2 font-medium">{label}</Text>
  </TouchableOpacity>
);

const MenuItem = ({ icon, label, subtext }) => (
  <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
    {icon}
    <View className="ml-4">
      <Text className="font-medium">{label}</Text>
      {subtext && <Text className="text-gray-500 text-xs">{subtext}</Text>}
    </View>
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <ScrollView className="bg-white flex-1">
      <ProfileHeader 
        name="Jade Collins" 
        image="https://randomuser.me/api/portraits/women/44.jpg" 
      />
      
      <View className="bg-gray-100 p-4 rounded-lg m-4">
        <Text className="font-medium">Personal</Text>
      </View>
      
      <View className="flex-row justify-around p-4">
        <CategoryButton icon={<FontAwesome name="star" size={24} color="gold" />} label="Favorite" />
        <CategoryButton icon={<FontAwesome name="wallet" size={24} color="green" />} label="Wallet" />
        <CategoryButton icon={<FontAwesome name="shopping-bag" size={24} color="orange" />} label="Orders" />
      </View>
      
      <MenuItem icon={<Feather name="tag" size={24} color="black" />} label="Promotions" subtext="Exclusive deals for you" />
      <MenuItem icon={<FontAwesome name="trophy" size={24} color="black" />} label="View Rewards" />
      <MenuItem icon={<Feather name="send" size={24} color="black" />} label="Send Feedback" />
      <MenuItem icon={<Ionicons name="settings-outline" size={24} color="black" />} label="App Preferences" />
      <MenuItem icon={<Feather name="phone" size={24} color="black" />} label="Support" />
      <MenuItem icon={<Ionicons name="information-circle-outline" size={24} color="black" />} label="About Ovenly" subtext="Passion for pizza explained" />
    </ScrollView>
  );
};

export default Profile;
