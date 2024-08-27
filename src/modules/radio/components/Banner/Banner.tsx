import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center p-4"
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
            className="h-24 w-auto"
          />
        </div>

        {/* Centro: Ícones Sociais e WhatsApp */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-red-600 text-2xl hover:text-red-700" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-red-600 text-2xl hover:text-red-700" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 text-2xl hover:text-red-700" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-red-600 text-2xl hover:text-red-700" />
          </a>
          <div className="flex items-center bg-green-600 rounded-full px-3 py-1 text-white">
            <FaWhatsapp className="text-xl mr-2" />
            <span>(89) 9.9401-4470</span>
          </div>
        </div>

        {/* Direita: No Ar */}
        <div className="flex items-center">
          <div className="flex items-center bg-white rounded-full p-2 shadow-md">
            <img
              src="https://pbr-def.srvsite.com/img/sem_locutor2.jpg"
              alt="No Ar"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <h2 className="text-purple-700 text-sm font-bold">NO AR</h2>
              <p className="text-red-600 text-xs font-semibold">Programa Manhã Total 2ª Parte</p>
              <p className="text-gray-500 text-xs">lealfm.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
