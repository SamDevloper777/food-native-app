import { kitchens, categories } from "@/utils/constants/home";
import React, { useState, useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ThaliCard from "../common/ThaliCard";
import KitchenCard from "./KitchenCard";
import SeeAllButton from "../common/seeAllButton";
import { thalis } from "@/utils/constants/kitchenProfile";
import { router } from "expo-router";

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
        return thalis.filter(thali => thali.special);
      default:
        return [];
    }
  }, [activeCategory]);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const mainCourseTotal = item.mainCourse?.reduce((sum: number, course: any) => sum + parseFloat(course.cost), 0);
    const startersTotal = item.starters?.reduce((sum: number, starter: any) => sum + parseFloat(starter.cost), 0);
    const dessertsTotal = item.desserts?.reduce((sum: number, dessert: any) => sum + parseFloat(dessert.cost), 0);

    const totalCost = mainCourseTotal + startersTotal + dessertsTotal;

    if (activeCategory === "Kitchens") {
      return (
        <KitchenCard
          key={index}
          id={item.id}
          Title={item.title}
          Rating={item.rating}
          Time={item.time}
          CoverUrl={item.coverUrl}
          LogoUrl={item.logoUrl}
          Tagline={item.tagline}
          Distance={item.distance}
          DeliveryFee={item.deliveryFee}
          ReviewCount={item.reviewCount}
        />
      );
    }
    return (
      <ThaliCard
        key={index}
        id={item.id}
        Title={item.title}
        Cost={totalCost || 0}
        Rating={item.rating}
        Time={item.time}
        Url={item.url}
        description={item.description || ""}
        thaliOffer={item.thaliOffer}
        kitchenId={item.kitchenId}
      />
    );
  };

  const keyExtractor = (item: any, index: number) => `${item.id}-${index}`;

  return (
    <View className="pt-4 mb-6">
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
              onPress={() => setActiveCategory(item)}
              activeOpacity={0.8}
              className={`px-4 py-2 rounded-full mr-2 ${activeCategory === item ? "bg-[#FC913A]" : "bg-gray-100"
                }`}
            >
              <Text
                className={`text-[16px] font-medium ${activeCategory === item ? "text-white" : "text-gray-700"
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
        data={data.slice(0, Math.min(5, data.length))}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
      <TouchableOpacity activeOpacity={0.9} className="border-2 border-[#FC913A] rounded-full mx-4 py-4 my-8" onPress={() => router.push({ pathname: '/(screens)/seeAll', params: { listType: activeCategory, searchParam: '' } })}>
        <Text className="text-[#FC913A] text-center text-[16px] font-bold">
          See More
        </Text>
      </TouchableOpacity>
      <View className="bg-gray-100 w-full flex flex-col justify-center items-start px-4 py-8">
        <Text className="text-[20px] font-bold">
          Are You a Kitchen Partner?
        </Text>
        <Text className="text-[14px] text-gray-500">
          Join Ovenly to connect with thousands of customers
        </Text>
      </View>
    </View>
  );
};

export default React.memo(PopularSection);

