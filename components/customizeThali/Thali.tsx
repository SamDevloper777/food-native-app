import React from 'react';
import { View, Image, ImageStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/store';

const Thali = () => {
  const selectedItems = useSelector((state: RootState) =>
    Object.values(state.customizeOwnThali.items)
  );

  const itemPositions: Record<string, {
    image: any,
    style: string,
  }> = {
    'naan': {
      image: require('../../assets/images/rice.png'),
      style: 'absolute top-0 left-0 translate-y-11 translate-x-6 z-10 scale-[0.6]',
    },
    'roti': {
      image: require('../../assets/images/roti.png'),
      style: 'absolute top-0 left-0 translate-y-11 translate-x-28 z-10 scale-[0.6] rotate-[230deg]',
    },
    'dal': {
      image: require('../../assets/images/dal.png'),
      style: 'absolute top-0 left-0 translate-y-24 -translate-x-[105px] z-10 scale-[0.25]',
    },
    'mix veg': {
      image: require('../../assets/images/mixveg.png'),
      style: 'absolute top-0 left-0 -translate-x-[105px] z-10 scale-y-[0.25] scale-x-[0.22]',
    },
    'paneer': {
      image: require('../../assets/images/paneer.png'),
      style: 'absolute top-0 left-0 -translate-x-[44px] -translate-y-[82px] z-10 scale-y-[0.29] scale-x-[0.26]',
    },
  };

  return (
    <View className="w-[350px] h-[300px] mx-auto relative">
      <Image
        source={require('../../assets/images/thali.png')}
        style={{ width: '100%', height: '100%' }}
      />

      {selectedItems.flatMap((thali) =>
        thali.items.map((item: any) => {
          const itemKey = item.id.toLowerCase()
          const positionKey = Object.keys(itemPositions).find((key) =>
            itemKey.includes(key)
          );
          const position = positionKey ? itemPositions[positionKey] : undefined;
          console.log(itemKey)
          if (!position) {
            console.log('No image for item:', item.id);
            return null;
          }

          const imageStyle: ImageStyle = {
            width: '100%',
            height: '100%',
          };

          return (
            <Image
              key={item.id}
              source={position.image}
              style={imageStyle}
              className={position.style}
            />
          );
        })
      )}
    </View>
  );
};

export default Thali;

