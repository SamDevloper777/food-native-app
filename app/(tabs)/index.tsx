import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FoodCard from '../components/Home/FoodCard';
import PopularPizzaCard from '../components/Home/PopularPizzaCard';
import SpecialOfferCard from '../components/Home/SpecialOfferCard';

const Index = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6" contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity className="p-2">
          <View className="w-6 h-6 bg-gray-700 rounded" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Ontario, Ohio ▼</Text>
        <TouchableOpacity className="p-2">
          <View className="w-6 h-6 bg-gray-700 rounded-full" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
        <View className="w-5 h-5 bg-gray-500 rounded mr-2" />
        <TextInput
          placeholder="Restaurant, item & r"
          placeholderTextColor="gray"
          className="flex-1 text-base"
        />
        <TouchableOpacity>
          <View className="w-5 h-5 bg-gray-500 rounded" />
        </TouchableOpacity>
      </View>
      <SpecialOfferCard/>    
      <PopularPizzaCard />
      <FoodCard
        Title='Pepperoni Pizza'
        Cost='10.00'
        Rating='4.5'
        Time='20min'
      />
      <FoodCard
        Title='Margherita Pizza'
        Cost='8.00'
        Rating='4.6'
        Time='30min'
      />
      <FoodCard
        Title='Shahi Paneer'
        Cost='12.00'
        Rating='4.1'
        Time='25min'
      />
      <FoodCard
        Title='Veg Farmhouse'
        Cost='13.00'
        Rating='4.2'
        Time='20min'
      />
    </ScrollView>
  );
};

export default Index;
