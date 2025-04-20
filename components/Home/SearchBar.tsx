import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("searching for", searchTerm);
  };

  return (
    <View className="flex-row items-center justify-between bg-[#fcfcfc] rounded-full px-4 py-3 mb-6 shadow-md">
      <View className="flex-row items-center flex-1 gap-2">
        <MagnifyingGlassIcon size={26} color="gray" />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search your favourite kitchen"
          placeholderTextColor="#9CA3AF"
          className="text-gray-500 flex-1 text-[16px]"
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity onPress={handleSearch}>
        <AdjustmentsHorizontalIcon size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
