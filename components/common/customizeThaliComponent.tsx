import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import Thali from "@/components/customizeThali/Thali";
import ThaliItems from "@/components/customizeThali/ThaliItems";
import SelectedItemsList from "@/components/kitchenProfile/selectedItemsList";
import { selectThaliItems } from "@/utils/slice/customizeOwnThaliSlice";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ThaliDescription from "@/components/customizeThali/ThaliDescription";

interface CustomizeThaliComponentProps {
  thaliTitle?: string;
  deliveryTime?: string;
  kitchenName?: string;
}

const CustomizeThaliComponent = ({ thaliTitle, deliveryTime, kitchenName }: CustomizeThaliComponentProps) => {
  const { id, title, cost } = useLocalSearchParams<{
    id: string;
    title: string;
    cost: string;
  }>();

  const [quantity, setQuantity] = useState(1);
  const price = parseFloat(cost);
  const dispatch = useDispatch();
  const thaliItems = useSelector(selectThaliItems);

  useEffect(() => {
    console.log('Thali items updated:', thaliItems);
  }, [thaliItems]);

  return (
    <>
      <ScrollView className="flex-1 bg-white p-4 pb-24 relative">
        <Navigation hasHeart={true} />
        <Thali />
        <SelectedItemsList id={id} title={title} cost={price} quantity={quantity} dispatch={dispatch} thaliItems={thaliItems} />
        {thaliTitle && deliveryTime && kitchenName && (
          <ThaliDescription thaliTitle={thaliTitle} deliveryTime={deliveryTime} kitchenName={kitchenName} />
        )}
        <ThaliItems />
      </ScrollView>
      <ConfirmButton id={id} title={title} cost={price} quantity={quantity} dispatch={dispatch} thaliItems={thaliItems} />
    </>
  );
};

export default CustomizeThaliComponent;