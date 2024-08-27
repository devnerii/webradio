import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { themes, Theme } from '../Header/themes'; // Caminho relativo para o arquivo themes.ts

interface Banner {
  id: number;
  imgSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  text: string;
  theme: Theme;
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
    arrows: true,
  };

  const banners: Banner[] = [
    {
      id: 1,
      imgSrc: '/radio/banner1.png',
      altText: 'Banner 1',
      title: 'Não importa o que as pessoas pensam, se você acredita que vale a pena, lute por isso.',
      subtitle: 'O ESSENCIAL É CONFIAR EM DEUS. O AMOR CONSTRÓI E SOLIDIFICA.',
      text: 'Tudo seria melhor se houvesse mais amor. Santa Dulce dos Pobres',
      theme: themes.corporativo,
    },
    {
      id: 2,
      imgSrc: '/radio/banner2.png',
      altText: 'Banner 2',
      title: 'Título do Banner 2',
      subtitle: 'Subtítulo do Banner 2',
      text: 'Texto adicional do Banner 2',
      theme: themes.elegante,
    },
    {
      id: 3,
      imgSrc: '/radio/banner3.png',
      altText: 'Banner 3',
      title: 'Título do Banner 3',
      subtitle: 'Subtítulo do Banner 3',
      text: 'Texto adicional do Banner 3',
      theme: themes.vibrante,
    },
  ];

  return (
    <div className="w-full overflow-hidden mb-[-6px]">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className={`relative w-full ${banner.theme.colorScheme.background}`}>
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[475px]">
              <Image
                src={banner.imgSrc}
                alt={banner.altText}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority={banner.id === 1}
              />
              {/* Texto sobreposto de acordo com o tema específico de cada banner */}
              <div className={`absolute top-1/2 ${banner.theme.position} transform -translate-y-1/2 flex flex-col items-end ${banner.theme.padding}`}>
                <h2 className={`${banner.theme.fontSize.title} ${banner.theme.colorScheme.title} mb-4 text-right`}>
                  {banner.title}
                </h2>
                <h3 className={`${banner.theme.fontSize.subtitle} ${banner.theme.colorScheme.subtitle} mb-2 text-right`}>
                  {banner.subtitle}
                </h3>
                <p className={`${banner.theme.fontSize.text} ${banner.theme.colorScheme.text} text-right`}>
                  {banner.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerRotativo;
