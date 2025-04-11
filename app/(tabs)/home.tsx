import CustomizeOwn from '@/components/home/CustomizeOwn';
import PopularSection from '@/components/home/PopularSection';
import { ScrollView } from 'react-native';
import LocationHeader from '../../components/home/LocationHeader';
import SearchBar from '../../components/home/SearchBar';
import SpecialOfferCard from '../../components/home/SpecialOfferCard';

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
      <LocationHeader />
      <SearchBar />
      <CustomizeOwn />
      <SpecialOfferCard Url='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3' />
      <PopularSection />
    </ScrollView>
  );
};

export default Home;
