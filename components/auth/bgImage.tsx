import { View, Text, Image } from 'react-native'
import React from 'react'

const BgImage = () => {
    return (
        <Image
            source={require('../../assets/images/login.jpg')}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            resizeMode="cover"
        />
    )
}

export default BgImage