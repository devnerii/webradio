// components/PhotoGalleryComponent.tsx
import React from 'react';
import Image from 'next/image';
import { FaExpandArrowsAlt } from 'react-icons/fa';

const PhotoGalleryComponent: React.FC = () => {
  const photos = [
    {
      title: "Natureza Deslumbrante",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+1",
      description: "Uma vista espetacular das montanhas ao amanhecer."
    },
    {
      title: "Arquitetura Moderna",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+2",
      description: "Edifícios inovadores que transformam o horizonte urbano."
    },
    {
      title: "Praias Tropicais",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+3",
      description: "As águas cristalinas e areia branca das ilhas paradisíacas."
    },
    {
      title: "Culinária Exótica",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+4",
      description: "Pratos gourmet que são uma verdadeira obra de arte."
    },
    {
      title: "Cidade Histórica",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+5",
      description: "Uma cidade antiga cheia de história e cultura."
    },
    {
      title: "Selva Amazônica",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+6",
      description: "A exuberância da maior floresta tropical do mundo."
    },
    {
      title: "Cachoeira Magnífica",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+7",
      description: "Uma impressionante queda d'água em meio à natureza."
    },
    {
      title: "Vida Urbana",
      imgSrc: "https://via.placeholder.com/800x600?text=Foto+8",
      description: "A energia vibrante das grandes metrópoles."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-red-600 mb-10 text-center">Galeria de Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="relative group rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-full h-56"> {/* Reduzindo o tamanho das fotos */}
              <Image 
                src={photo.imgSrc} 
                alt={photo.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-red-600 p-4 rounded-full shadow-lg hover:scale-125 transition-transform duration-300">
                  <FaExpandArrowsAlt size={30} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">{photo.title}</h3>
              <p className="text-gray-600 mt-2">{photo.description}</p>
            </div>
            {/* Atualizando os efeitos de destaque de azul para vermelho */}
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-red-300 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-red-400 rounded-full blur-3xl opacity-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryComponent;
