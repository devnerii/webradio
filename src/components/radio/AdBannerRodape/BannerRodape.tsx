// components/AdBannerComponent.tsx
import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const BannerRodape: React.FC = () => {
  const banners = [
    {
      title: "",
      description: "",
      imgSrc: "https://via.placeholder.com/800x400?text=An%C3%BAncio+Banner+1",
      link: "#",
      hideTitle: true,
      hideDescription: true,
      hideCtaButton: true,
      hidePlayButton: true,
    },
    {
      title: "",
      description: "",
      imgSrc: "https://via.placeholder.com/800x400?text=An%C3%BAncio+Banner+2",
      link: "#",
      hideTitle: true,
      hideDescription: true,
      hideCtaButton: true,
      hidePlayButton: true,
    },
    {
      title: "",
      description: "",
      imgSrc: "https://via.placeholder.com/800x400?text=An%C3%BAncio+Banner+3",
      link: "#",
      hideTitle: true,
      hideDescription: true,
      hideCtaButton: true,
      hidePlayButton: true,
    },
    {
      title: "",
      description: "",
      imgSrc: "https://via.placeholder.com/800x400?text=An%C3%BAncio+Banner+4",
      link: "#",
      hideTitle: true,
      hideDescription: true,
      hideCtaButton: true,
      hidePlayButton: true,
    },
  ];

  return (
    <div className="w-full mx-0 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg shadow-2xl overflow-hidden h-40"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="absolute inset-0">
              <Image src={banner.imgSrc} alt={banner.title} layout="fill" objectFit="cover" />
            </div>
            <div className="relative flex flex-col justify-between h-full z-10">
              <div>
                {!banner.hideTitle && (
                  <h2 className="text-2xl font-extrabold mb-2" style={{ color: '#FF0000' }}>
                    {banner.title}
                  </h2>
                )}
                {!banner.hideDescription && (
                  <p className="text-sm mb-4" style={{ color: '#FF0000' }}>
                    {banner.description}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-4">
                {!banner.hideCtaButton && (
                  <a href={banner.link} className="inline-block bg-[#FF0000] text-white py-2 px-4 rounded-full font-bold uppercase">
                    Saiba Mais <FaArrowRight className="ml-2 inline" />
                  </a>
                )}
                {!banner.hidePlayButton && (
                  <button className="inline-flex items-center justify-center bg-[#FF0000] text-white p-2 rounded-full shadow-lg">
                    <FaPlay size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerRodape;
