import React from 'react'
import { Text } from 'react-native'

const Heading = ({ heading }: { heading: string }) => {
    return (
        <Text className="text-3xl font-bold text-gray-900 mb-2">
            {heading}
        </Text>
    )
}

export default Heading