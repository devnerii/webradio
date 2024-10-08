import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface Banner {
  id: number;
  imgSrc: string;
  altText: string;
}

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
    adaptiveHeight: false,
    arrows: true, // Mantém as setas padrão
  };

  const banners: Banner[] = [
    {
      id: 1,
      imgSrc: '/radio/banner1.png',
      altText: 'Banner 1',
    },
    {
      id: 2,
      imgSrc: '/radio/banner2.jpeg',
      altText: 'Banner 2',
    },
    {
      id: 3,
      imgSrc: '/radio/banner3.jpeg',
      altText: 'Banner 3',
    },
  ];

  return (
    <div className="w-full overflow-hidden mb-[-6px] relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full">
            <div className="relative w-full h-[500px] sm:h-[510px] md:h-[520px] lg:h-[530px] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={banner.imgSrc}
                alt={banner.altText}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority={banner.id === 1}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{banner.altText}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerRotativo;
