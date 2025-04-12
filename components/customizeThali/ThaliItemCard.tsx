import { Minus, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';

const ThaliItemCard = ({ Title, Cost, Url }: { Title: string, Cost: string, Url: string }) => {
    const [turnedOn, setTurnedOn] = useState(false)
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => {
      if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    return (
        <TouchableOpacity
            className={`flex-row items-center gap-2 bg-white p-4 rounded-2xl shadow-md w-[95%] h-[148px] py-8 my-2 mx-auto ${turnedOn ? 'border border-[#FC913A]' : ''}`}
            activeOpacity={0.8}
            onPress={() => setTurnedOn(!turnedOn)}
        >
            <View className="w-32 h-32 bg-gray-200 rounded-full">
                <Image
                    source={{ uri: Url }}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    resizeMode="cover"
                />
            </View>
            <View className="flex-1 ml-4">
                <Text className="text-lg font-bold">{Title}</Text>
                <View className="flex-row items-center mt-2">
                    <Text className="text-xl font-bold">${Cost}</Text>
                </View>
            </View>
            <View className='flex flex-col justify-between items-center h-full'>
                <Switch
                    trackColor={{ false: "#e0e0e0", true: "#FFCDA4" }}
                    thumbColor={turnedOn ? "#FC913A" : "#e0e0e0"}
                    onValueChange={setTurnedOn}
                    ios_backgroundColor="#e0e0e0"
                    value={turnedOn}
                    disabled={!turnedOn}
                />
                <View className={`flex-row ${turnedOn ? 'bg-[#FC913A]' : 'bg-[#e0e0e0]'} rounded-full px-4 py-2 items-center gap-2`}>
                    <TouchableOpacity onPress={handleDecrement} disabled={!turnedOn}>
                        <Minus size={16} color={"white"} />
                    </TouchableOpacity>
                    <Text className="text-white text-md font-bold">
                        {quantity < 10 ? `0${quantity}` : quantity}
                    </Text>
                    <TouchableOpacity onPress={handleIncrement} disabled={!turnedOn}>
                        <Plus size={16} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ThaliItemCard
