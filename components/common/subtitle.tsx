import { View, Text } from 'react-native'
import React from 'react'

const Subtitle = ({ subtitle }: { subtitle: string }) => {
    return (
        <Text className="text-md text-gray-500 mb-6">
            {subtitle}
        </Text>
    )
}

export default Subtitle