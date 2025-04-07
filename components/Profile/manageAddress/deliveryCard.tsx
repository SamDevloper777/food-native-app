import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
// import { styled } from 'nativewind';

// const View = styled(View);
// const Text = styled(Text);
// const StyledPressable = styled(Pressable);

const DeliveryCard = ({ title, address }: { title: string, address: string }) => {
    const [checkBoxState, setCheckBoxState] = useState<boolean>(false)
    return (
        <View className="flex-row m-4 px-6">
            {/* Side Icon */}
            {/* <View className="bg-orange-100 p-3 rounded-full self-center mr-[-24px] z-10 shadow-md">
          <FontAwesome name="home" size={20} color="#F97316" />
        </View> */}

            {/* Card */}
            <View className="flex-1 bg-white p-4 rounded-xl shadow-lg shadow-gray-500">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-2">
                    {
                        title == 'Work' ? 
                        <Ionicons name='business' size={24} color={"#FC913A"} /> :
                        <Ionicons name='home' size={24} color={"#FC913A"} /> 
                    }
                    <Text className="text-[22px] font-bold text-gray-800">{title}</Text>
                    <Feather name="edit-3" size={20} color="#F97316" />
                </View>

                <View className='w-full h-[1px] bg-gray-200 mx-auto rounded-md mt-1 mb-3' />

                {/* Address */}
                <Text className="text-md text-gray-600 leading-normal mb-4">
                    {address}
                </Text>

                <View className='w-full h-[1px] bg-gray-200 mx-auto rounded-md mt-1 mb-3' />

                {/* Footer */}
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Checkbox value={checkBoxState} onValueChange={setCheckBoxState} color={checkBoxState ? '#FC913A' : undefined} />
                        <Text className="ml-2 text-[14px] text-gray-700">Make as a default</Text>
                    </View>
                    <Pressable>
                        <Text className="text-md text-orange-500 font-bold">Remove</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default DeliveryCard