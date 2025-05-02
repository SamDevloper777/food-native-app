import React, { useMemo, useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { categories, thalis } from "@/utils/constants/kitchenProfile";
import { Category } from "@/utils/types/recommendedSectionKitchenProfile";
import ThaliCard from "../common/ThaliCard";
import SeeAllButton from "../common/seeAllButton";

const RecommendedSection = ({ kitchenId }: { kitchenId: string }): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Thalis");

  // Memoize the filtered data based on the active category to prevent recalculating on every render
  const filteredData = useMemo(() => {
    return thalis.filter(item => item.kitchenId.toString() === kitchenId);
  }, [kitchenId]);

  // Function to calculate cost
  const calculateCost = (item: any) => {
    return (
      (item.mainCourse.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0) +
        item.starters.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0) +
        item.desserts.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0))
      .toString() || ''
    );
  };

  // Memoize the rendering of cards for the active category
  const renderCards = useMemo(() => {
    let categoryData = filteredData;
    switch (activeCategory) {
      case "All Thalis":
        break;  // No filtering needed since it's already done
      case "Vegetarian":
        categoryData = categoryData.filter(item => item.type === "veg");
        break;
      case "Specials":
        categoryData = categoryData.filter(item => item.special);
        break;
      default:
        return null;
    }

    return categoryData.map((item) => ({
      key: item.id.toString(),
      content: (
        <ThaliCard
          key={item.id}
          Title={item.title}
          Cost={calculateCost(item)}
          Rating={item.rating}
          Time={item.time}
          Url={item.url}
          description={item.description}
          id={item.id}
          kitchenId={item.kitchenId}
          type={item.type}
        />
      ),
    }));
  }, [activeCategory, filteredData]);

  return (
    <View className="pt-4 mb-6">
      {/* Header */}
      <View className="px-8 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Recommended</Text>
          <SeeAllButton
            listType={
              activeCategory === "All Thalis"
                ? "Kitchen All Thalis"
                : activeCategory === "Vegetarian"
                ? "Kitchen Vegetarian"
                : "Kitchen Specials"
            }
            kitchenId={kitchenId}
          />
        </View>

        {/* Category Tabs */}
        <View className="flex-row flex-wrap">
          {categories.map((category: Category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
              activeOpacity={0.8}
              className={`px-4 py-2 rounded-full mr-2 mb-2 ${activeCategory === category ? "bg-[#FC913A]" : "bg-gray-100"}`}
            >
              <Text className={`text-[16px] font-medium ${activeCategory === category ? "text-white" : "text-gray-700"}`}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* FlatList for Cards */}
      <FlatList
        data={renderCards}
        renderItem={({ item }) => item.content}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
};

export default React.memo(RecommendedSection);  // Memoize the component for performance
