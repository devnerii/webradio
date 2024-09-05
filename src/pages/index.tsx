import React from 'react';
import RadioPlayerHeader from '../modules/radio/components/Header/RadioPlayerHeader';
import BannerRotativo from '@/modules/radio/components/Banner/BannerRotativo';
import NavBar from '@/modules/radio/components/Nav/Navbar';
import Banner from '@/modules/radio/components/Banner/Banner'
import LiveRadio from '@/modules/radio/components/Live/LiveRadio';
import MiddleSection from '@/modules/radio/components/Middle/MiddleSection';
import AdBannerComponent from '@/modules/radio/components/AdBanner/AdComponentBanner';
import VideoGalleryComponent from '@/modules/radio/components/Videos/VideoGalleryComponent';
import AdSectionComponent from '@/modules/radio/components/Ad/AdSectionComponent';
import PhotoGalleryComponent from '@/modules/radio/components/Images/PhotoGalleryComponent';
import FooterComponent from '@/modules/radio/components/Footer/FooterComponent';

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
      <FooterComponent />
    </div>
  );
};

export default HomePage;
