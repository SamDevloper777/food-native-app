import { kitchens, thalis, specials, categories } from "@/utils/constants/home";
import React, { useState, useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ThaliCard from "../common/ThaliCard";
import KitchenCard from "./KitchenCard";

type homeCategory = "All Thalis" | "Kitchens" | "Specials";

const PopularSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<homeCategory>("All Thalis");

  const data = useMemo(() => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis;
      case "Kitchens":
        return kitchens;
      case "Specials":
        return specials;
      default:
        return [];
    }
  }, [activeCategory]);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (activeCategory === "Kitchens") {
      return (
        <KitchenCard
          key={index}
          Title={item.title}
          Cost={item.cost}
          Rating={item.rating}
          Time={item.time}
          Url={item.url}
        />
      );
    }
    return (
      <ThaliCard
        key={index}
        Title={item.title}
        Cost={item.cost}
        Rating={item.rating}
        Time={item.time}
        Url={item.url}
        description={item.description || ""}
      />
    );
  };

  const keyExtractor = (item: any, index: number) => `${item.title}-${index}`;

  return (
    <View className="pt-4 my-6">
      {/* Header */}
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Popular Choices</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(item)}
              activeOpacity={0.8}
              className={`px-4 py-2 rounded-full mr-2 ${
                activeCategory === item ? "bg-[#FC913A]" : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-[16px] font-medium ${
                  activeCategory === item ? "text-white" : "text-gray-700"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Dynamic Cards */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
};

export default React.memo(PopularSection);
