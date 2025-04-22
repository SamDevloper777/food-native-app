import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import Thali from "@/components/customizeThali/Thali";
import ThaliDescription from "@/components/customizeThali/ThaliDescription";
import SelectedItemsList from "@/components/kitchenProfile/mySelectedItemsList";
import { selectFilterParams, selectThaliItems } from "@/utils/slice/myThaliSlice";
import React, { useCallback, useMemo } from "react";
import { ScrollView, Touchable, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyThaliItems from "./MyThaliItems";
import { MoveRight } from "lucide-react-native";
import { router } from "expo-router";

interface MyThaliComponentProps {
  thaliTitle?: string;
  deliveryTime?: string;
  kitchenName?: string;
  confirmButtonText: string;
  id: string;
  title: string;
  cost: string;
}

const MyThaliComponent = ({
  thaliTitle,
  deliveryTime,
  kitchenName,
  confirmButtonText,
  id,
  title,
  cost,
}: MyThaliComponentProps) => {
  const price = parseFloat(cost);
  const dispatch = useDispatch();
  const thaliItems = useSelector(selectThaliItems);
  const filterParams = useSelector(selectFilterParams);

  const showThaliDescription = useMemo(
    () => thaliTitle && deliveryTime && kitchenName,
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

  const renderSelectedItemsList = useCallback(
    () => (
      <SelectedItemsList
        id={id}
        title={title}
        quantity={1}
        dispatch={dispatch}
        thaliItems={filterParams}
      />
    ),
    [id, title, price, dispatch, thaliItems]
  );

  const hasItems = thaliItems.length > 0;
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
        <MyThaliItems />
      </ScrollView>
      {
        hasItems ? (
          <TouchableOpacity className="bg-[#FC913A] rounded-full absolute bottom-0 z-10 right-0 mb-4 gap-3 p-3 mr-4" activeOpacity={0.9} onPress={() => {
            router.push({ pathname: '/(screens)/seeAll', params: { filterParams: JSON.stringify(filterParams) } })
          }}>
            <MoveRight size={38} color="white" />
          </TouchableOpacity>
        ) : null
      }
    </View>
  );
};

export default React.memo(MyThaliComponent);
