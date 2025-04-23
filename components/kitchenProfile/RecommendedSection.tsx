import { categories, thalis } from "@/utils/constants/kitchenProfile";
import { Category } from "@/utils/types/recommendedSectionKitchenProfile";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ThaliCard from "../common/ThaliCard";
import SeeAll from "@/app/(screens)/seeAll";
import SeeAllButton from "../common/seeAllButton";

const RecommendedSection = ({ kitchenId }: { kitchenId: string }): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Thalis");

  const data = useMemo(() => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis.filter(item => item.kitchenId.toString() === kitchenId);
      case "Vegetarian":
        return thalis.filter(item => item.type === "veg" && item.kitchenId.toString() === kitchenId);
      case "Specials":
        return thalis.filter(item => item.special && item.kitchenId.toString() === kitchenId);
      default:
        return [];
    }
  }, [activeCategory]);

  const renderCards = () => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis.filter(item => item.kitchenId.toString() === kitchenId).map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={
            (item.mainCourse.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0) + item.starters.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0) + item.desserts.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0)).toString() || ''
          } Rating={item.rating} Time={item.time} Url={item.url} description={item.description} id={item.id} kitchenId={item.kitchenId} />
        ));
      case "Vegetarian":
        return thalis.filter(item => item.type === "veg" && item.kitchenId.toString() === kitchenId).map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={
            (item.mainCourse.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0) + item.starters.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0) + item.desserts.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0)).toString() || ''
          } Rating={item.rating} Time={item.time} Url={item.url} description={item.description} id={item.id} kitchenId={item.kitchenId} />
        ));
      case "Specials":
        return thalis.filter(item => item.special && item.kitchenId.toString() === kitchenId).map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={
            (item.mainCourse.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0) + item.starters.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0) + item.desserts.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0)).toString() || ''
          } Rating={item.rating} Time={item.time} Url={item.url} description={item.description} id={item.id} kitchenId={item.kitchenId} />
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
          <SeeAllButton listType={activeCategory === "All Thalis" ? "Kitchen All Thalis" : activeCategory === "Vegetarian" ? "Kitchen Vegetarian" : "Kitchen Specials"} kitchenId={kitchenId} />
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

