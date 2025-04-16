import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import Thali from "@/components/customizeThali/Thali";
import ThaliItems from "@/components/customizeThali/ThaliItems";
import SelectedItemsList from "@/components/kitchenProfile/selectedItemsList";
import { selectThaliItems } from "@/utils/slice/customizeOwnThaliSlice";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useCallback } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ThaliDescription from "@/components/customizeThali/ThaliDescription";

interface CustomizeThaliComponentProps {
  thaliTitle?: string;
  deliveryTime?: string;
  kitchenName?: string;
  confirmButtonText: string;
}

const CustomizeThaliComponent = ({ 
  thaliTitle, 
  deliveryTime, 
  kitchenName, 
  confirmButtonText 
}: CustomizeThaliComponentProps) => {
  const { id, title, cost } = useLocalSearchParams<{
    id: string;
    title: string;
    cost: string;
  }>();

  const price = parseFloat(cost);
  const dispatch = useDispatch();
  const thaliItems = useSelector(selectThaliItems);

  const showThaliDescription = useMemo(() => 
    thaliTitle && deliveryTime && kitchenName,
    [thaliTitle, deliveryTime, kitchenName]
  );

  const renderThaliDescription = useCallback(() => {
    if (!showThaliDescription) return null;
    return (
      <ThaliDescription 
        thaliTitle={thaliTitle as string} 
        deliveryTime={deliveryTime as string} 
        kitchenName={kitchenName as string} 
      />
    );
  }, [showThaliDescription, thaliTitle, deliveryTime, kitchenName]);

  const renderSelectedItemsList = useCallback(() => (
    <SelectedItemsList 
      id={id} 
      title={title} 
      cost={price} 
      quantity={1} 
      dispatch={dispatch} 
      thaliItems={thaliItems} 
    />
  ), [id, title, price, dispatch, thaliItems]);

  const renderConfirmButton = useCallback(() => (
    <ConfirmButton 
      id={id} 
      title={title} 
      cost={price} 
      quantity={1} 
      dispatch={dispatch} 
      thaliItems={thaliItems} 
      buttonText={confirmButtonText} 
    />
  ), [id, title, price, dispatch, thaliItems, confirmButtonText]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView 
        className="flex-1 p-4 pb-24 relative"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      >
        <Navigation hasHeart={true} />
        <Thali />
        {renderSelectedItemsList()}
        {renderThaliDescription()}
        <ThaliItems />
      </ScrollView>
      {renderConfirmButton()}
    </View>
  );
};

export default React.memo(CustomizeThaliComponent);