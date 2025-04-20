import React from 'react';
import { Dimensions, Image } from 'react-native';

const CoverImage = ({url}: {url: string}) => {
  const { height } = Dimensions.get('window');

    return (
        <Image
            source={{ uri: url }}
            style={{ height: height * 0.3 }}
            resizeMode="cover"
            className="w-full"
        />
    )
}

export default CoverImage