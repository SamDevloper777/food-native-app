import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = ["All Pizzas", "Vegetarian", "Specials"];

const PopularPizzaCard = () => {
  const [activeCategory, setActiveCategory] = useState("All Pizzas");

  return (
    <View className="px-4 pt-4 my-6">
      {/* Header Row */}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-[22px] font-bold">Popular Pizza</Text>
        <TouchableOpacity>
          <Text className="text-[#FC913A] font-medium">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            className={`px-4 py-2 rounded-full mr-2 ${
              activeCategory === category ? "bg-[#FC913A]" : "bg-gray-100"
            }`}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              className={`text-[16px] font-medium ${
                activeCategory === category ? "text-white" : "text-gray-700"
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularPizzaCard;
