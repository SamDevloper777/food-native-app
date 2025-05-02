import React, { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import Navigation from '@/components/common/navigation';
import ConfirmButton from '@/components/customizeThali/confirmButton';
import Thali from '@/components/customizeThali/Thali';
import ThaliDescription from '@/components/customizeThali/ThaliDescription';
import SelectedItemsList from '@/components/kitchenProfile/selectedItemsList';
import ThaliItems from '../customizeThali/ThaliItems';
import { selectThaliItems } from '@/utils/slice/customizeOwnThaliSlice';

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
  const thaliItems = useSelector(selectThaliItems, shallowEqual);

  const showThaliDescription = useMemo(() => !!id && !!kitchenId, [id, kitchenId]);

  const ThaliDescriptionMemo = useMemo(() => {
    return showThaliDescription ? (
      <ThaliDescription thaliId={id} kitchenId={kitchenId} />
    ) : null;
  }, [showThaliDescription, id, kitchenId]);

  const SelectedItemsRow = useMemo(() => (
    <View className="flex flex-row justify-between items-center my-4 px-4">
      <SelectedItemsList id={id} thaliItems={thaliItems} />
      <ConfirmButton thaliId={id} />
    </View>
  ), [id, thaliItems]);

  const renderHeader = useCallback(() => (
    <View className="p-4">
      <Navigation hasHeart={true} id={parseInt(id)} />
      <Thali />
      {SelectedItemsRow}
      {ThaliDescriptionMemo}
    </View>
  ), [id, SelectedItemsRow, ThaliDescriptionMemo]);

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={[]} // No list items; just using header/footer
        renderItem={null}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<ThaliItems kitchenId={kitchenId} thaliId={id} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default React.memo(CustomizeThaliComponent);
