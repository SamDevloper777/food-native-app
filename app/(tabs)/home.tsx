import CustomizeOwn from '@/components/home/CustomizeOwn';
import PopularSection from '@/components/home/PopularSection';
import { globalOffers } from '@/utils/constants/home';
import { FlatList, Platform, ScrollView, View } from 'react-native';
import LocationHeader from '../../components/home/LocationHeader';
import SearchBar from '../../components/home/SearchBar';
import SpecialOfferCard from '../../components/home/SpecialOfferCard';

const Home = () => {
  const renderHeader = () => (
    <View>
      <LocationHeader />
      <SearchBar />
      <CustomizeOwn />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-4 pt-0"
      >
        {globalOffers.map((offer) => (
          <SpecialOfferCard key={offer.id} globalOfferId={String(offer.id)} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <FlatList
      className="flex-1 bg-white"
      data={[1]}
      renderItem={() => null}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={PopularSection}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

export default Home;
