import React, { useState, useMemo, useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { kitchens, categories } from "@/utils/constants/home";
import { thalis } from "@/utils/constants/kitchenProfile";
import ThaliCard from "../common/ThaliCard";
import KitchenCard from "./KitchenCard";
import SeeAllButton from "../common/seeAllButton";
import { router } from "expo-router";

type HomeCategory = "All Thalis" | "Kitchens" | "Specials";

// Types
type Thali = {
  id: number;
  kitchenId: number;
  title: string;
  rating: string;
  time: string;
  type: string;
  special: boolean;
  url: string;
  description: string;
  mainCourse: { title: string; cost: string; url: string }[];
  starters: { title: string; cost: string; url: string }[];
  desserts: { title: string; cost: string; url: string }[];
  thaliOffer?: string;
};

type Kitchen = {
  id: number;
  title: string;
  cost: string;
  rating: string;
  time: string;
  coverUrl: string;
  logoUrl: string;
  description: string;
  tagline: string;
  distance: string;
  deliveryFee: string;
  reviewCount: string;
};

const PopularSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<HomeCategory>("All Thalis");

  const rawData = useMemo<Thali[] | Kitchen[]>(() => {
    switch (activeCategory) {
      case "All Thalis":
        return thalis;
      case "Kitchens":
        return kitchens;
      case "Specials":
        return thalis.filter((thali) => thali.special);
      default:
        return [];
    }
  }, [activeCategory]);

  const processedData = useMemo(() => {
    return rawData.slice(0, Math.min(5, rawData.length)).map((item) => {
      if (activeCategory === "Kitchens") {
        return item as Kitchen;
      }

      const thali = item as Thali;

      const mainCourseTotal = thali.mainCourse?.reduce(
        (sum, course) => sum + parseFloat(course.cost),
        0
      ) || 0;
      const startersTotal = thali.starters?.reduce(
        (sum, starter) => sum + parseFloat(starter.cost),
        0
      ) || 0;
      const dessertsTotal = thali.desserts?.reduce(
        (sum, dessert) => sum + parseFloat(dessert.cost),
        0
      ) || 0;

      return {
        ...thali,
        totalCost: mainCourseTotal + startersTotal + dessertsTotal,
      };
    });
  }, [rawData, activeCategory]);

  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      if (activeCategory === "Kitchens") {
        return <KitchenCard key={index} 
          id={item.id}
          LogoUrl={item.logoUrl}
          Time={item.time}
          Title={item.title}
          Rating={item.rating}
          CoverUrl={item.coverUrl}
          DeliveryFee={item.deliveryFee}
          Distance={item.distance}
          ReviewCount={item.reviewCount}
          Tagline={item.tagline}
        />;
      }

      return (
        <ThaliCard
          key={index}
          id={item.id}
          Title={item.title}
          Cost={item.totalCost}
          Rating={item.rating}
          type={item.type}
          Time={item.time}
          Url={item.url}
          description={item.description || ""}
          thaliOffer={item.thaliOffer}
          kitchenId={item.kitchenId}
        />
      );
    },
    [activeCategory]
  );

  const keyExtractor = useCallback((item: any, index: number) => `${item.id}-${index}`, []);

  const handleSeeMore = useCallback(() => {
    router.push({
      pathname: "/(screens)/seeAll",
      params: {
        listType: activeCategory,
        searchParam: "",
      },
    });
  }, [activeCategory]);

  return (
    <View className="pt-4 my-6">
      {/* Header */}
      <View className="px-4 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[22px] font-bold">Popular Choices</Text>
          <SeeAllButton listType={activeCategory} />
        </View>

        {/* Category Tabs */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(item as HomeCategory)}
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
        data={processedData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={7}
        removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: 140,
          offset: 140 * index,
          index,
        })}
        className="px-4"
      />

      <TouchableOpacity
        activeOpacity={0.9}
        className="border-2 border-[#FC913A] rounded-full mx-4 py-4 my-8"
        onPress={handleSeeMore}
      >
        <Text className="text-[#FC913A] text-center text-[16px] font-bold">See More</Text>
      </TouchableOpacity>

      <View className="bg-gray-100 w-full flex flex-col justify-center items-start px-4 py-8">
        <Text className="text-[20px] font-bold">Are You a Kitchen Partner?</Text>
        <Text className="text-[14px] text-gray-500">
          Join Ovenly to connect with thousands of customers
        </Text>
      </View>
    </View>
  );
};

export default React.memo(PopularSection);
