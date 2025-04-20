import { router } from "expo-router";
import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    router.push({
      pathname: "/(screens)/seeAll",
      params: {
        listType: "All Thalis",
        searchParam: searchTerm,
      },
    });

  };

  return (
    <View className="flex-row items-center justify-between bg-[#fcfcfc] rounded-full px-4 py-3 mb-6 shadow-md">
      <View className="flex-row items-center flex-1 gap-2">
        <TouchableOpacity onPress={handleSearch}>
          <MagnifyingGlassIcon size={26} color="gray" />
        </TouchableOpacity>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Craving 'paneer', 'samosa' or a full thali?"
          placeholderTextColor="#9CA3AF"
          className="text-gray-500 flex-1 text-[16px]"
          onSubmitEditing={handleSearch}
        />
      </View>
      {/* <TouchableOpacity onPress={() => { }}>
        <AdjustmentsHorizontalIcon size={28} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchBar;
