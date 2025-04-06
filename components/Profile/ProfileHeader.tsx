import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";

export const ProfileHeader = ({ name, image }: any) => {
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
        <View className="items-center -mt-20">
          <Image
            source={{ uri: image }}
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold text-black">{name}</Text>
        </View>
      </View>
    );
  };