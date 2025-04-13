import { categories, specials, thalis, vegetarian } from "@/utils/constants/kitchenProfile";
import { Category } from "@/utils/types/recommendedSectionKitchenProfile";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ThaliCard from "../common/ThaliCard";

const RecommendedSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Thalis");

  const renderCards = () => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis.map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} description={item.description} thaliOffer={item.thaliOffer} />
        ));
      case "Vegetarian":
        return vegetarian.map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} description={item.description} thaliOffer={item.thaliOffer} />
        ));
      case "Specials":
        return specials.map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} description={item.description} thaliOffer={item.thaliOffer} />
        ));
      default:
        return null;
    }
  };

  return (
    <View className="pt-4 mb-6">
      {/* Header */}
      <View className="px-8 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Recommended</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-[#FC913A] font-medium">See All</Text>
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category: Category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
              activeOpacity={0.8}
              className={`px-4 py-2 rounded-full mr-2 ${activeCategory === category ? "bg-[#FC913A]" : "bg-gray-100"}`}
            >
              <Text className={`text-[16px] font-medium ${activeCategory === category ? "text-white" : "text-gray-700"}`}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Dynamic Cards */}
      <View className="px-4 space-y-4">{renderCards()}</View>
    </View>
  );
};

export default RecommendedSection;
