import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Camera } from 'lucide-react-native'

const Header = () => {
    return (
        <View className="items-center my-6 relative w-[140px] h-[140px] mx-auto">
            <Image
                source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
                className="w-[140px] h-[140px] rounded-[25px]"
            />
            <TouchableOpacity className="-right-2 -bottom-2 z-1 absolute bg-white p-2 rounded-lg shadow-lg shadow-gray-800" activeOpacity={0.9}>
                <Camera size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header