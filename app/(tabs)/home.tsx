import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import FoodCard from '../../components/home/FoodCard';
import LocationHeader from '../../components/home/LocationHeader';
import PopularPizzaCard from '../../components/home/PopularPizzaCard';
import SearchBar from '../../components/home/SearchBar';
import SpecialOfferCard from '../../components/home/SpecialOfferCard';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
      <LocationHeader />
      <SearchBar />

      {loading ? (
        <>
          <ShimmerPlaceHolder style={{ height: 180, borderRadius: 12, marginBottom: 16 }} />
          <ShimmerPlaceHolder style={{ height: 180, borderRadius: 12, marginBottom: 16 }} />
          <ShimmerPlaceHolder style={{ height: 180, borderRadius: 12, marginBottom: 16 }} />
        </>
      ) : (
        <>
          <SpecialOfferCard Url='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3' />
          <PopularPizzaCard />
          <FoodCard
            Title='Pepperoni Pizza'
            Cost='10.00'
            Rating='4.5'
            Time='20min'
            Url='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <FoodCard
            Title='Margherita Pizza'
            Cost='8.00'
            Rating='4.6'
            Time='30min'
            Url='https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <FoodCard
            Title='Shahi Paneer'
            Cost='12.00'
            Rating='4.1'
            Time='25min'
            Url='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <FoodCard
            Title='Veg Farmhouse'
            Cost='13.00'
            Rating='4.2'
            Time='20min'
            Url='https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </>
      )}
    </ScrollView>
  );
};

export default Home;
