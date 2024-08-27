import React from 'react';
import RadioPlayerHeader from '../modules/radio/components/Header/RadioPlayerHeader';
import BannerRotativo from '@/modules/radio/components/Banner/BannerRotativo';
import NavBar from '@/modules/radio/components/Nav/Navbar';

const HomePage = () => {
  return (
    <div>
      <RadioPlayerHeader />
      <BannerRotativo />
      <NavBar />
    </div>
  );
};

export default HomePage;
