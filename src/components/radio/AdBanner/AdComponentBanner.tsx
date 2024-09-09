// components/AdBannerComponent.tsx
import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const AdBannerComponent: React.FC = () => {
  const banners = [
    {
      title: "",
      description: "",
      imgSrc: "https://via.placeholder.com/800x400?text=An%C3%BAncio+Banner+1",
      link: "#",
      hideTitle: false, // Variável para controlar visibilidade do título
      hideDescription: false, // Variável para controlar visibilidade da descrição
      hideCtaButton: true, // Variável para controlar visibilidade do botão "Saiba Mais"
      hidePlayButton: true, // Variável para controlar visibilidade do botão "Play"
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
  ];

  return (
    <div className="w-full mx-0 px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-none">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative p-10 rounded-lg shadow-2xl overflow-hidden h-80" // Altura fixa de 80
            style={{ backgroundColor: '#FFFFFF' }} // Fundo branco
          >
            <div className="absolute inset-0">
              <Image src={banner.imgSrc} alt={banner.title} layout="fill" objectFit="cover" />
            </div>
            <div className="relative flex flex-col justify-between h-full z-10">
              <div>
                {!banner.hideTitle && (
                  <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#FF0000' }}>
                    {banner.title}
                  </h2>
                )}
                {!banner.hideDescription && (
                  <p className="text-lg mb-8" style={{ color: '#FF0000' }}>
                    {banner.description}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-4">
                {!banner.hideCtaButton && (
                  <a href={banner.link} className="inline-block bg-[#FF0000] text-white py-3 px-6 rounded-full font-bold uppercase">
                    Saiba Mais <FaArrowRight className="ml-2 inline" />
                  </a>
                )}
                {!banner.hidePlayButton && (
                  <button className="inline-flex items-center justify-center bg-[#FF0000] text-white p-3 rounded-full shadow-lg">
                    <FaPlay size={20} />
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

export default AdBannerComponent;
