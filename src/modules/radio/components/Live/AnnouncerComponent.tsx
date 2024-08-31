import React from 'react';
import Image from 'next/image';
import { FaMicrophone } from 'react-icons/fa'; // Ícone para melhorar a visualização

interface AnnouncerProps {
  title: string;
  imageUrl: string;
  name: string;
  description: string;
  time: string;
}

const AnnouncerComponent: React.FC<AnnouncerProps> = ({ title, imageUrl, name, description, time }) => {
  return (
    <div className="w-full max-w-xs md:max-w-sm p-6 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out h-auto md:h-96 flex flex-col justify-between md:justify-start md:space-y-4">
      {/* Título do Componente */}
      <div className="flex items-center text-red-700 font-bold text-lg mb-3 border-b-2 border-red-600 pb-1 md:pb-2 md:mb-4">
        <FaMicrophone className="mr-2 text-xl md:text-2xl" /> {/* Ícone redimensionado */}
        <span>{title}</span>
      </div>

      {/* Card de Locutor */}
      <div className="flex items-center p-2 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out flex-grow">
        <Image 
          src={imageUrl} 
          alt="Locutor" 
          width={64} 
          height={64} 
          className="rounded-full mr-3 hover:scale-105 transition-transform duration-200 ease-in-out" 
        />

        {/* Informações do Locutor */}
        <div className="flex flex-col space-y-1">
          <h3 className="text-red-600 font-semibold text-xl md:text-2xl">{name}</h3>
          <p className="text-gray-700 md:text-base">{description}</p>
          <p className="text-gray-500 text-sm md:text-base">{time}</p>
        </div>
      </div>
    </div>
  );
};

const AnnouncerExample: React.FC = () => {
  const exampleProps: AnnouncerProps = {
    title: "LOCUTOR NO AR",
    imageUrl: "https://via.placeholder.com/64",
    name: "Administrador",
    description: "Show da Manhã",
    time: "05:00 - 12:00",
  };

  return (
    <AnnouncerComponent 
      title={exampleProps.title}
      imageUrl={exampleProps.imageUrl}
      name={exampleProps.name}
      description={exampleProps.description}
      time={exampleProps.time}
    />
  );
};

export default AnnouncerExample;
