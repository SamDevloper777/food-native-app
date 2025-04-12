import React from 'react';
import { View, Image } from 'react-native';

const Thali = () => {
  return (
    <View className="w-[350px] h-[300px] mx-auto relative">
      <Image
        source={require('../../assets/images/thali.png')}
        style={{ width: '100%', height: '100%'}}
      />
      <Image
        source={require('../../assets/images/rice.png')}
        style={{ width: '100%', height: '100%'}}
        className='absolute top-0 left-0 translate-y-10 translate-x-3 z-10 scale-[0.4]'
      />
    </View>
  );
};

export default Thali;
