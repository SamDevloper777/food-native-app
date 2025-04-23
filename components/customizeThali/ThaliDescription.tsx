import { kitchens } from '@/utils/constants/home';
import { thalis } from '@/utils/constants/kitchenProfile';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ThaliDescription = ({ thaliId, kitchenId }: { thaliId: string, kitchenId: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const fullDescription = thalis.find(thali => thali.id.toString() === thaliId)?.description || "No description available.";
    
    return (
        <View className="bg-gray-100 p-4 mb-8 mt-4 rounded-lg mx-2">
            <Text className="text-xl font-bold">{kitchens.find(kitchen => kitchen.id.toString() === kitchenId)?.title} | {thalis.find(thali => thali.id.toString() === thaliId)?.title}</Text>
            <View>
                <Text className="text-gray-500 mt-2">
                    {isExpanded ? fullDescription : fullDescription.slice(0, 60) + "..."}
                </Text>
                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} activeOpacity={0.7}>
                    <Text className="text-[#FC913A] font-bold text-md">
                        {isExpanded ? "Show Less" : "Read More"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between mt-4">
                <Text className="text-md text-gray-500">⏱️ {thalis.find(thali => thali.id.toString() === thaliId)?.time}</Text>
            </View>
        </View>
    )
}

export default ThaliDescription