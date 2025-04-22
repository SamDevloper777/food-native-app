import { Minus, Plus } from 'lucide-react-native';
import React, { useCallback, memo } from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  isItemSelected,
} from '../../utils/slice/myThaliSlice';

interface ThaliItemCardProps {
  id: string;
  title: string;
  url: string;
  activeCategory: 'mainCourse' | 'starters' | 'desserts'; 
}

const MyThaliItemCard = memo(({
  id,
  title,
  url,
  activeCategory,
}: ThaliItemCardProps) => {
  const dispatch = useDispatch();

  const isSelected = useSelector(isItemSelected(id));

  const handleToggle = useCallback(() => {
    if (isSelected) {
      dispatch(removeItem(id));
    } else {
      dispatch(addItem({ id, title, url, category: activeCategory }));
    }
  }, [isSelected, id, title, url, activeCategory, dispatch]);
  

  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-md w-full h-[148px] py-4 px-6 my-2 mx-auto ${isSelected ? 'border border-[#FC913A]' : ''
        }`}
      activeOpacity={0.9}
      onPress={handleToggle}
    >
      {/* Image */}
      <View className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
        <Image
          source={{ uri: url }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      {/* Info */}
      <View className="flex-1 flex-col justify-center items-start h-full">
        <Text
          className="text-[16px] font-bold"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>

      {/* Divider */}
      <View className="w-[1px] h-[70%] bg-gray-200 mr-6" />

      {/* Switch */}
      <Switch
        trackColor={{ false: '#e0e0e0', true: '#FFCDA4' }}
        thumbColor={isSelected ? '#FC913A' : '#e0e0e0'}
        onValueChange={handleToggle}
        ios_backgroundColor="#e0e0e0"
        value={isSelected}
        className='items-center justify-center mx-auto align-middle mr-2'
      />
    </TouchableOpacity>
  );
});

MyThaliItemCard.displayName = 'MyThaliItemCard';

export default MyThaliItemCard;