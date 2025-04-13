import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { kitchenProfileConstants } from '@/utils/constants/kitchenProfile'

const CoverImage = () => {
  const { height } = Dimensions.get('window');

    return (
        <Image
            source={{ uri: kitchenProfileConstants.coverImage }}
            style={{ height: height * 0.3 }}
            resizeMode="cover"
            className="w-full"
        />
    )
}

export default CoverImage