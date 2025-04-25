import { View, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Camera } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/store';
import * as ImagePicker from 'expo-image-picker';

const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageUrl = selectedImage || user?.profilePicture || "https://www.sjbwindsor.uk/wp-content/uploads/2024/01/Group-808.png";

  const handleImagePick = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please grant permission to access your gallery.');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      // Here you can also dispatch to Redux or upload to a server
      console.log('New profile image URI:', result.assets[0].uri);
    }
  };

  return (
    <View className="items-center my-6 relative w-[140px] h-[140px] mx-auto">
      <Image
        source={{ uri: imageUrl }}
        className="w-[140px] h-[140px] rounded-full"
      />
      <TouchableOpacity
        className="-right-2 -bottom-2 z-1 absolute bg-white p-2 rounded-lg shadow-lg shadow-gray-800"
        activeOpacity={0.9}
        onPress={handleImagePick}
      >
        <Camera size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
