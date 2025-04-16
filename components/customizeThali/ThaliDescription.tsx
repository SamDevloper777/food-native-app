import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ThaliDescription = ({ thaliTitle, deliveryTime, kitchenName }: { thaliTitle: string, deliveryTime: string, kitchenName: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const fullDescription = "A deliciously crafted thali, offering a perfect balance of flavors and textures. Each thali comes with a thoughtfully curated selection of dishes including dal, rice, roti, and various vegetable preparations. Our chefs ensure authentic taste and premium quality ingredients in every serving.";
    
    return (
        <View className="bg-gray-100 p-4 mb-8 mt-4 rounded-lg mx-2">
            <Text className="text-xl font-bold">{kitchenName} | {thaliTitle}</Text>
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
                <Text className="text-md text-gray-500">⏱️ {deliveryTime}</Text>
            </View>
        </View>
    )
}

export default ThaliDescription