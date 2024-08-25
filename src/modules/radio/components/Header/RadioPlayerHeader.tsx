import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { AiFillAndroid, AiFillApple, AiFillWindows, AiFillFacebook } from 'react-icons/ai';
import Image from 'next/image';

const RadioPlayerHeader: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <header className="bg-red-500 text-white w-full overflow-hidden p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
      
      {/* Controle de Reprodução e Volume */}
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <button
          onClick={togglePlay}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 focus:outline-none transition duration-200 ease-in-out"
          aria-label={isPlaying ? "Pausar" : "Tocar"}
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <div className="relative w-80 md:w-56"> {/* Largura menor em dispositivos móveis, maior em telas maiores */}
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 bg-blue-500 rounded-lg focus:outline-none"
            aria-label="Ajustar volume"
          />
          <button
            onClick={toggleMute}
            className="absolute top-1/2 right-[-30px] md:right-[-40px] transform -translate-y-1/2 focus:outline-none transition duration-200 ease-in-out"
            aria-label={isMuted ? "Desmutar" : "Mutar"}
          >
            {isMuted ? <FaVolumeMute size={20} className="text-blue-500" /> : <FaVolumeUp size={20} className="text-blue-500" />}
          </button>
        </div>
      </div>

      {/* Informações do Locutor e Imagem */}
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <div className="flex-shrink-0">
          <Image
            src="/radio/avatar.jpeg"
            alt="Sara Shirley - Locutora da Rádio Interativa FM 98.9"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-bold leading-tight">No Ar: Sucessão de Sucessos</p>
          <p className="text-sm text-orange-300 leading-tight">com Sara Shirley</p>
        </div>
      </div>

      {/* Ícones de Plataformas */}
      <nav className="flex justify-center md:justify-end space-x-2 md:space-x-4 w-full md:w-auto text-yellow-400">
        <a href="https://play.google.com/store/apps/details?id=com.radiofm989" target="_blank" rel="noopener noreferrer" aria-label="Android">
          <AiFillAndroid size={24} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a href="https://apps.apple.com/us/app/radio-fm-98-9/id123456789" target="_blank" rel="noopener noreferrer" aria-label="Apple">
          <AiFillApple size={24} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a href="https://www.microsoft.com/store/apps/9nblggh4nns1" target="_blank" rel="noopener noreferrer" aria-label="Windows">
          <AiFillWindows size={24} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/radiofm989" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <AiFillFacebook size={24} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a href="https://twitter.com/radiofm989" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <FontAwesomeIcon icon={faXTwitter} className="text-2xl hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
      </nav>
    </header>
  );
};

export default RadioPlayerHeader;
