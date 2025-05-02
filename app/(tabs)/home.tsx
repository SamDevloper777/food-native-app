import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { FlatList, View, InteractionManager } from 'react-native';
import CustomizeOwn from '@/components/home/CustomizeOwn';
import PopularSection from '@/components/home/PopularSection';
import { globalOffers } from '@/utils/constants/home';
import LocationHeader from '../../components/home/LocationHeader';
import SearchBar from '../../components/home/SearchBar';
import SpecialOfferCard from '../../components/home/SpecialOfferCard';

const Home = () => {
  const randomGlobalOfferId = useMemo(() => (
    Math.floor(Math.random() * globalOffers.length)
  ), []);

  const renderHeader = useCallback(() => (
    <View>
      <LocationHeader />
      <SearchBar />
      <CustomizeOwn />
      <SpecialOfferCard globalOfferId={String(globalOffers[randomGlobalOfferId].id)} />
    </View>
  ), [randomGlobalOfferId]);

  const [showPopular, setShowPopular] = useState(false);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setShowPopular(true);
    });
    return () => task.cancel();
  }, []);

  return (
    <FlatList
      className="flex-1 bg-white"
      data={[]}
      renderItem={null}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={showPopular ? PopularSection : null}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

export default Home;
