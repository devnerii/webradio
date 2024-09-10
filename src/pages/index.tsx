// pages/index.tsx

import React from 'react';
import RadioPlayerHeader from '@/components/radio/Header/RadioPlayerHeader';
import BannerRotativo from '@/components/radio/Banner/BannerRotativo';
import NavBar from '@/components/radio/Nav/Navbar';
import Banner from '@/components/radio/Banner/Banner';
import LiveRadio from '@/components/radio/Live/LiveRadio';
import MiddleSection from '@/components/radio/Middle/MiddleSection';
import AdBannerComponent from '@/components/radio/AdBanner/AdComponentBanner';
import VideoGalleryComponent from '@/components/radio/Videos/VideoGalleryComponent';
import AdSectionComponent from '@/components/radio/Ad/AdSectionComponent';
import PhotoGalleryComponent from '@/components/radio/Images/PhotoGalleryComponent';
import FooterComponent from '@/components/radio/Footer/FooterComponent';
import BannerRodape from '@/components/radio/AdBannerRodape/BannerRodape';

const HomePage = () => {
  return (
    <div>
      <RadioPlayerHeader />
      <Banner />
      <NavBar />
      <BannerRotativo />
      <LiveRadio />
      <MiddleSection />
      <AdBannerComponent />
      <VideoGalleryComponent />
      <AdSectionComponent />
      <PhotoGalleryComponent />
      <BannerRodape />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
