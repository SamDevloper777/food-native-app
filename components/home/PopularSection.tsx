import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ThaliCard from "../common/ThaliCard";
import KitchenCard from "./KitchenCard";
import SpecialsCard from "./SpecialsCard";

type Category = "All Thalis" | "Kitchens" | "Specials";

const categories: Category[] = ["All Thalis", "Kitchens", "Specials"];

const thalis = [
  {
    title: "Pepperoni Pizza",
    cost: "10.00",
    rating: "4.5",
    time: "20min",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Margherita Pizza",
    cost: "8.00",
    rating: "4.6",
    time: "30min",
    url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shahi Paneer",
    cost: "12.00",
    rating: "4.1",
    time: "25min",
    url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Veg Farmhouse",
    cost: "13.00",
    rating: "4.2",
    time: "20min",
    url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const kitchens = [
  { title: "Biryani Blues", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
  { title: "Pizza Palace", cost: "10.00", rating: "4.5", time: "20min", url: thalis[0].url },
  { title: "Indian Spice", cost: "8.00", rating: "4.6", time: "30min", url: thalis[1].url },
  { title: "Chettinad", cost: "12.00", rating: "4.1", time: "25min", url: thalis[2].url },
  { title: "Kebab Corner", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
];

// const specials = kitchens.map((kitchen, index) => ({
//   title: `${kitchen.title} Special`,
//   ...kitchen,
// }));

const PopularSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Thalis");

  const renderCards = () => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis.map((item, idx) => (
          <ThaliCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} />
        ));
      case "Kitchens":
        return kitchens.map((item, idx) => (
          <KitchenCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} />
        ));
      // case "Specials":
      //   return specials.map((item, idx) => (
      //     <SpecialsCard key={idx} Title={item.title} Cost={item.cost} Rating={item.rating} Time={item.time} Url={item.url} />
      //   ));
      default:
        return null;
    }
  };

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
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

export default PopularSection;
