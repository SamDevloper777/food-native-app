import { ScrollView } from 'react-native';
import FoodCard from '../components/Home/FoodCard';
import LocationHeader from '../components/Home/LocationHeader';
import PopularPizzaCard from '../components/Home/PopularPizzaCard';
import SearchBar from '../components/Home/SearchBar';
import SpecialOfferCard from '../components/Home/SpecialOfferCard';

const Index = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6" contentContainerStyle={{ flexGrow: 1 }}>
      <LocationHeader />
      <SearchBar />
      <SpecialOfferCard />
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
