/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaBroadcastTower,
} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center p-8 md:p-16 text-white"
      style={{ backgroundImage: "url('/radio/dj.jpg')" }} // Fundo do header
    >
      {/* Overlay escura com efeito gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      
      <div className="relative container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Esquerda: Logotipo */}
        <div className="flex items-center">
          <img
            src="https://pbr-str.srvsite.com/arquivos/9321/cabecalho-9321-20240813103951.png"
            alt="Logo"
            className="h-68 w-auto md:h-48 sm:h-28 transition-transform transform hover:scale-105 duration-300" // Adicionei efeito de escala no logotipo
          />
        </div>

        {/* Centro: Ícones Sociais */}
        <div className="flex flex-row items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-200"
          >
            <FaFacebook className="text-red-600 text-3xl hover:text-red-700" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-200"
          >
            <FaTwitter className="text-red-600 text-3xl hover:text-red-700" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-200"
          >
            <FaYoutube className="text-red-600 text-3xl hover:text-red-700" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-200"
          >
            <FaInstagram className="text-red-600 text-3xl hover:text-red-700" />
          </a>
        </div>

        {/* WhatsApp e Telefone */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <div className="flex items-center bg-green-600 rounded-full px-8 py-5 text-white shadow-lg hover:bg-green-700 transition-colors duration-200">
            <FaWhatsapp className="text-3xl mr-2" />
            <span className="text-xl">(89) 9.9401-4470</span>
          </div>
        </div>

        {/* Direita: No Ar */}
        <div className="flex items-center mt-4 md:mt-0 bg-white bg-opacity-90 rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://pbr-def.srvsite.com/img/sem_locutor2.jpg"
            alt="No Ar"
            className="h-20 w-20 rounded-full object-cover md:h-16 md:w-16 border-2 border-red-500" // Adicionei uma borda vermelha em volta da imagem
          />
          <div className="ml-4 text-black">
            <h2 className="text-red-700 text-lg font-bold flex items-center">
              <FaBroadcastTower className="mr-2 text-xl text-red-600" /> NO AR
            </h2>
            <p className="text-red-600 text-sm font-semibold">Programa Manhã Total 2ª Parte</p>
            <p className="text-gray-500 text-sm">lealfm.com.br</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
