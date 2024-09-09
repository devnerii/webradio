import React from 'react';
import Image from 'next/image';
import { FaMicrophoneAlt } from 'react-icons/fa'; 

const LocutoresComponent: React.FC = () => {
  const locutores = [
    { nome: 'Jorge Cavalcante', cargo: 'Radialista e Diretor', imageUrl: 'https://via.placeholder.com/150' },
    { nome: 'Jota Domingos', cargo: 'Locutor', imageUrl: 'https://via.placeholder.com/150' },
    { nome: 'Ana Silva', cargo: 'Locutora', imageUrl: 'https://via.placeholder.com/150' },
    { nome: 'Carlos Souza', cargo: 'Locutor', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="w-full h-96 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-3xl font-extrabold mb-2 text-center">Nossos Locutores</h2>
      <div className="grid grid-cols-2 gap-6">
        {locutores.map((locutor, index) => (
          <div key={index} className="group text-center transition-transform duration-500 relative">
            <div className="relative">
              <Image 
                src={locutor.imageUrl} 
                alt={locutor.nome} 
                width={80} 
                height={80} 
                className="mx-auto mb-2 shadow-xl hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="text-lg font-bold whitespace-nowrap">{locutor.nome}</h3>
              <p className="text-sm text-gray-200">{locutor.cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocutoresComponent;
