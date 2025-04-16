import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import Thali from "@/components/customizeThali/Thali";
import ThaliItems from "@/components/customizeThali/ThaliItems";
import SelectedItemsList from "@/components/kitchenProfile/selectedItemsList";
import { selectThaliItems } from "@/utils/slice/customizeOwnThaliSlice";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView } from "react-native";
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

  return (
    <>
      <ScrollView 
        className="flex-1 bg-white p-4 pb-24 relative"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Navigation hasHeart={true} />
        <Thali />
        <SelectedItemsList 
          id={id} 
          title={title} 
          cost={price} 
          quantity={1} 
          dispatch={dispatch} 
          thaliItems={thaliItems} 
        />
        {showThaliDescription && (
          <ThaliDescription 
            thaliTitle={thaliTitle as string} 
            deliveryTime={deliveryTime as string} 
            kitchenName={kitchenName as string} 
          />
        )}
        <ThaliItems />
      </ScrollView>
      <ConfirmButton 
        id={id} 
        title={title} 
        cost={price} 
        quantity={1} 
        dispatch={dispatch} 
        thaliItems={thaliItems} 
        buttonText={confirmButtonText} 
      />
    </>
  );
};

export default React.memo(CustomizeThaliComponent);