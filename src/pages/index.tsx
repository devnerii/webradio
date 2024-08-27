import React from 'react';
import RadioPlayerHeader from '../modules/radio/components/Header/RadioPlayerHeader';
import BannerRotativo from '@/modules/radio/components/Banner/BannerRotativo';
import NavBar from '@/modules/radio/components/Nav/Navbar';
import Banner from '@/modules/radio/components/Banner/Banner'

const HomePage = () => {
  return (
    <div>
      <RadioPlayerHeader />
      <Banner />
      <NavBar />
      <BannerRotativo />
    </div>
  );
};

export default HomePage;
