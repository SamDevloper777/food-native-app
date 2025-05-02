import Navigation from '@/components/common/navigation';
import ConfirmButton from '@/components/customizeThali/confirmButton';
import Thali from '@/components/customizeThali/Thali';
import ThaliDescription from '@/components/customizeThali/ThaliDescription';
import SelectedItemsList from '@/components/kitchenProfile/selectedItemsList';
import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';
import React, { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import ThaliItems from '../customizeThali/ThaliItems';

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
    return <ThaliDescription thaliId={id} kitchenId={kitchenId} />;
  }, [showThaliDescription, id, kitchenId]);

  const renderSelectedItemsList = useCallback(
    () => (
      <View className="flex flex-row justify-between items-center my-4 px-4">
        <SelectedItemsList id={id} thaliItems={thaliItems} />
        <ConfirmButton thaliId={id} />
      </View>
    ),
    [id, cost, thaliItems]
  );

  const renderHeader = useCallback(
    () => (
      <View className="p-4">
        <Navigation hasHeart={true} id={parseInt(id)} />
        <Thali />
        {renderSelectedItemsList()}
        {renderThaliDescription()}
      </View>
    ),
    [renderSelectedItemsList, renderThaliDescription, id]
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={[]} // No data since we're using header and footer
        renderItem={() => null} // No items to render
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<ThaliItems kitchenId={kitchenId} thaliId={id} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default React.memo(CustomizeThaliComponent);