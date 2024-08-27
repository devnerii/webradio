/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center p-16"
      style={{ backgroundImage: "url('/radio/dj.jpg')" }} // Fundo do header
    >
      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="relative container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Esquerda: Logotipo */}
        <div className="flex items-center">
          <img
            src="https://pbr-str.srvsite.com/arquivos/9321/cabecalho-9321-20240813103951.png"
            alt="Logo"
            className="h-48 w-auto md:h-36 sm:h-28" // Aumentei o tamanho do logotipo para telas maiores e ajustei para dispositivos móveis
          />
        </div>

        {/* Centro: Ícones Sociais e WhatsApp */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-red-600 text-4xl hover:text-red-700 md:text-3xl" /> {/* Ícones maiores */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-red-600 text-4xl hover:text-red-700 md:text-3xl" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 text-4xl hover:text-red-700 md:text-3xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-red-600 text-4xl hover:text-red-700 md:text-3xl" />
          </a>
          <div className="flex items-center bg-green-600 rounded-full px-8 py-5 text-white">
            <FaWhatsapp className="text-3xl mr-2" />
            <span className="text-xl">(89) 9.9401-4470</span>
          </div>
        </div>

        {/* Direita: No Ar */}
        <div className="flex items-center mt-4 md:mt-0">
          <div className="flex items-center bg-white rounded-full p-4 shadow-md">
            <img
              src="https://pbr-def.srvsite.com/img/sem_locutor2.jpg"
              alt="No Ar"
              className="h-20 w-20 rounded-full object-cover md:h-16 md:w-16" // Aumentei a imagem para telas maiores e ajustei para dispositivos móveis
            />
            <div className="ml-4">
              <h2 className="text-purple-700 text-lg font-bold">NO AR</h2>
              <p className="text-red-600 text-sm font-semibold">Programa Manhã Total 2ª Parte</p>
              <p className="text-gray-500 text-sm">lealfm.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
