import React from 'react';
import { View, Image } from 'react-native';

const Thali = () => {
  return (
    <>
      <View className="w-[350px] h-[300px] mx-auto relative">
        <Image
          source={require('../../assets/images/thali.png')}
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          source={require('../../assets/images/rice.png')}
          style={{ width: '100%', height: '100%' }}
          className='absolute top-0 left-0 translate-y-11 translate-x-6 z-10 scale-[0.6]'
        />
        <Image
          source={require('../../assets/images/roti.png')}
          style={{ width: '100%', height: '100%' }}
          className='absolute top-0 left-0 translate-y-11 translate-x-28 z-10 scale-[0.6] rotate-[230deg]'
        />
        <Image
          source={require('../../assets/images/dal.png')}
          style={{ width: '100%', height: '100%' }}
          className='absolute top-0 left-0 translate-y-24 -translate-x-[105px] z-10 scale-[0.25]'
        />
        <Image
          source={require('../../assets/images/mixveg.png')}
          style={{ width: '100%', height: '100%' }}
          className='absolute top-0 left-0 -translate-x-[105px] z-10 scale-y-[0.25] scale-x-[0.22]'
        />
        <Image
          source={require('../../assets/images/paneer.png')}
          style={{ width: '100%', height: '100%' }}
          className='absolute top-0 left-0 -translate-x-[44px] -translate-y-[82px] z-10 scale-y-[0.29] scale-x-[0.26]'
        />
      </View>
    </>
  );
};

export default Thali;
