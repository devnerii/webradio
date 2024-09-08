// components/VideoGalleryComponent.tsx
import React from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';

const VideoGalleryComponent: React.FC = () => {
  const videos = [
    { title: "Explorando o Mundo", thumbnail: "https://via.placeholder.com/400x250?text=Video+1", videoUrl: "https://www.youtube.com/embed/1X5UVJgRkF0" },
    { title: "Tecnologia Avançada", thumbnail: "https://via.placeholder.com/400x250?text=Video+2", videoUrl: "https://www.youtube.com/embed/2Vn2xV6O7tU" },
    { title: "Inovações Futuras", thumbnail: "https://via.placeholder.com/400x250?text=Video+3", videoUrl: "https://www.youtube.com/embed/3He4drE1loE" },
    { title: "Melhores Gadgets 2024", thumbnail: "https://via.placeholder.com/400x250?text=Video+4", videoUrl: "https://www.youtube.com/embed/4JfH9B7kBfU" },
    { title: "Viagens Incríveis", thumbnail: "https://via.placeholder.com/400x250?text=Video+5", videoUrl: "https://www.youtube.com/embed/5Blf6JsN9fg" },
    { title: "Saúde e Bem-estar", thumbnail: "https://via.placeholder.com/400x250?text=Video+6", videoUrl: "https://www.youtube.com/embed/6PhDtrB3zVw" },
    { title: "Culinária Gourmet", thumbnail: "https://via.placeholder.com/400x250?text=Video+7", videoUrl: "https://www.youtube.com/embed/7KrFg5JhP2Q" },
    { title: "Esportes Radicais", thumbnail: "https://via.placeholder.com/400x250?text=Video+8", videoUrl: "https://www.youtube.com/embed/8ZcLj6jYXnk" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-blue-600 mb-10 text-center">Galeria de Vídeos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="relative group rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:scale-125 transition-transform duration-300">
                  <FaPlayCircle size={40} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{video.title}</h3>
            </div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryComponent;
