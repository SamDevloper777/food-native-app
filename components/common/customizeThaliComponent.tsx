import Navigation from '@/components/common/navigation';
import ConfirmButton from '@/components/customizeThali/confirmButton';
import Thali from '@/components/customizeThali/Thali';
import ThaliDescription from '@/components/customizeThali/ThaliDescription';
import SelectedItemsList from '@/components/kitchenProfile/selectedItemsList';
import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';
import React, { useCallback, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ThaliItems from '../customizeThali/ThaliItems';
import { thalis } from '@/utils/constants/kitchenProfile';

interface CustomizeThaliComponentProps {
  id: string;
  cost: string;
  kitchenId: string;
}

const CustomizeThaliComponent = ({
  id,
  cost,
  kitchenId,
}: CustomizeThaliComponentProps) => {
  const thaliItems = useSelector(selectThaliItems);

  const showThaliDescription = useMemo(
    () => id && kitchenId,
    [id, kitchenId]
  );

  const renderThaliDescription = useCallback(() => {
    if (!showThaliDescription) return null;
    return (
      <ThaliDescription
        thaliId={id}
        kitchenId={kitchenId}
      />
    );
  }, [showThaliDescription, id, kitchenId]);

  const renderSelectedItemsList = useCallback(
    () => (
      <View className='flex flex-row justify-between items-center my-4 px-4'>
        <SelectedItemsList
          id={id}
          thaliItems={thaliItems}
        />
        <ConfirmButton thaliId={id} />
      </View>
    ),
    [id, cost, thaliItems]
  );

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="p-4">
          <Navigation hasHeart={true} />
          <Thali />
          {renderSelectedItemsList()}
          {renderThaliDescription()}
        </View>
        <ThaliItems kitchenId={kitchenId} thaliId={id} />
      </ScrollView>
    </View>
  );
};

export default React.memo(CustomizeThaliComponent);