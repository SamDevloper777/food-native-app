import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Navigation from "@/components/common/navigation";
import ConfirmButton from "@/components/customizeThali/confirmButton";
import MyThali from "./MyThali";
import MyThaliItems from "./MyThaliItems";
import SelectedItemsList from "@/components/kitchenProfile/mySelectedItemsList";
import ThaliDescription from "@/components/customizeThali/ThaliDescription";
import { selectFilterParams, selectThaliItems } from "@/utils/slice/myThaliSlice";
import { Ionicons } from "@expo/vector-icons";
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
  const dispatch = useDispatch();

  const thaliItems = useSelector(selectThaliItems, shallowEqual);
  const filterParams = useSelector(selectFilterParams, shallowEqual);
  const hasItems = thaliItems.length > 0;

  const showThaliDescription = useMemo(() => {
    return Boolean(thaliTitle && deliveryTime && kitchenName);
  }, [thaliTitle, deliveryTime, kitchenName]);

  const handleSearchPress = useCallback(() => {
    router.push({
      pathname: "/(screens)/seeAll",
      params: { filterParams: JSON.stringify(filterParams) },
    });
  }, [filterParams]);

  const SelectedItemsRow = useMemo(() => (
    <View className="flex flex-row justify-between items-center px-4 my-2">
      <SelectedItemsList
        id={id}
        title={title}
        quantity={1}
        dispatch={dispatch}
        thaliItems={filterParams}
      />
      <TouchableOpacity
        className={`${
          hasItems ? "bg-[#fc913a]" : "bg-gray-200"
        } px-6 py-3 rounded-lg flex-row items-center justify-between gap-3`}
        activeOpacity={0.9}
        onPress={handleSearchPress}
      >
        <View className="flex flex-row">
          <Ionicons name="search-outline" size={20} color="white" />
          <Text className="text-white font-bold ml-2 text-lg">Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  ), [id, title, hasItems, dispatch, filterParams, handleSearchPress]);

  const renderHeader = useCallback(() => (
    <View className="p-4">
      <Navigation hasHeart={true} />
      <MyThali />
      {SelectedItemsRow}
    </View>
  ), [SelectedItemsRow]);

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={[]} // No list items, just layout
        renderItem={null}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<MyThaliItems />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default React.memo(MyThaliComponent);
