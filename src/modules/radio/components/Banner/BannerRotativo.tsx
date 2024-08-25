import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const BannerRotativo: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: true
  };

  const banners = [
    {
      id: 1,
      imgSrc: '/radio/banner1.png',
      altText: 'Banner 1'
    },
    {
      id: 2,
      imgSrc: '/radio/banner2.png',
      altText: 'Banner 2'
    },
    {
      id: 3,
      imgSrc: '/radio/banner3.png',
      altText: 'Banner 3'
    }
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="w-full">
            <div className="relative h-[100px] md:h-[200px] lg:h-[150px]">
              <Image
                src={banner.imgSrc}
                alt={banner.altText}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority={banner.id === 1}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerRotativo;
