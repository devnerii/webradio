// components/AdSectionComponent.tsx
import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';

const AdSectionComponent: React.FC = () => {
  const ads = [
    {
      title: "Ofertas Imperdíveis de Moda",
      description: "Confira as últimas tendências com até 70% de desconto!",
      imgSrc: "https://via.placeholder.com/600x300?text=An%C3%BAncio+Moda",
      link: "#",
      cta: "Compre Agora"
    },
    {
      title: "Promoções Exclusivas de Viagem",
      description: "Pacotes de viagem a preços inacreditáveis para os melhores destinos.",
      imgSrc: "https://via.placeholder.com/600x300?text=An%C3%BAncio+Viagem",
      link: "#",
      cta: "Saiba Mais"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ads.map((ad, index) => (
          <div key={index} className="relative group bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 z-0">
              <Image 
                src={ad.imgSrc} 
                alt={ad.title} 
                layout="fill" 
                objectFit="cover" 
                className="opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-4xl font-extrabold mb-4 group-hover:underline transition-all duration-300">{ad.title}</h2>
                <p className="text-lg mb-8">{ad.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <a href={ad.link} className="inline-block bg-blue-700 py-3 px-6 rounded-full text-white font-bold uppercase transform hover:scale-110 transition-transform duration-300">
                  {ad.cta} <FaArrowRight className="ml-2 inline"/>
                </a>
                <button className="inline-flex items-center justify-center bg-white text-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-100 transform hover:scale-110 transition-transform duration-300">
                  <FaInfoCircle size={20} />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-800 rounded-full blur-3xl opacity-70 z-0"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-700 rounded-full blur-2xl opacity-70 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900 opacity-30 z-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdSectionComponent;
