import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

const SearchBar = () => {
  return (
    <View className="flex-row items-center justify-between bg-[#fcfcfc] rounded-full px-4 py-3 mb-9">
      <View className="flex-row items-center flex-1 gap-2">
        <MagnifyingGlassIcon size={26} color="gray" />
        <TextInput
          placeholder="Search your favourite pizza"
          placeholderTextColor="#9CA3AF"
          className="text-gray-500 flex-1 text-[16px]"
        />
      </View>
      <TouchableOpacity>
        <AdjustmentsHorizontalIcon size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;