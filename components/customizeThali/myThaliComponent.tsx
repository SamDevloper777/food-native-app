import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import Thali from "@/components/customizeThali/Thali";
import ThaliDescription from "@/components/customizeThali/ThaliDescription";
import SelectedItemsList from "@/components/kitchenProfile/mySelectedItemsList";
import { selectFilterParams, selectThaliItems } from "@/utils/slice/myThaliSlice";
import React, { useCallback, useMemo } from "react";
import { ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyThaliItems from "./MyThaliItems";
import { MoveRight } from "lucide-react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
  const hasItems = thaliItems.length > 0;

  const showThaliDescription = useMemo(
    () => thaliTitle && deliveryTime && kitchenName,
    [thaliTitle, deliveryTime, kitchenName]
  );

  const renderSelectedItemsList = useCallback(
    () => (
      <View className="flex flex-row justify-between items-center px-4 my-2">
        <SelectedItemsList
          id={id}
          title={title}
          quantity={1}
          dispatch={dispatch}
          thaliItems={filterParams}
        />
            <TouchableOpacity 
            className={`${hasItems ? 'bg-[#fc913a]' : 'bg-gray-200'} px-6 py-3 rounded-lg flex-row items-center justify-between gap-3`} 
            activeOpacity={0.9} onPress={() => {
              router.push({ pathname: '/(screens)/seeAll', params: { filterParams: JSON.stringify(filterParams) } })
            }}>
              <View className="flex flex-row">
                <Ionicons name="search-outline" size={20} color="white" />
                <Text className="text-white font-bold ml-2 text-lg">
                  Search
                </Text>
              </View>
            </TouchableOpacity>
      </View>
    ),
    [id, title, price, dispatch, thaliItems]
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
        </View>
        <MyThaliItems />
      </ScrollView>
    </View>
  );
};

export default React.memo(MyThaliComponent);
