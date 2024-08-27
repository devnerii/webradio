import React, { useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillWindows,
  AiFillFacebook,
} from "react-icons/ai";
import Image from "next/image";

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
    <header className="bg-red-500 text-white w-full flex flex-col md:flex-row items-center justify-between p-2 md:p-4 h-auto md:h-[70px] space-y-2 md:space-y-0">
      {/* Seção de Controle de Reprodução e Volume */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="bg-transparent p-1 rounded-full focus:outline-none transition duration-200 ease-in-out"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <FaPause size={24} className="text-blue-400" />
            ) : (
              <FaPlay size={24} className="text-blue-400" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            className="w-24 h-1 bg-blue-500 rounded-lg focus:outline-none"
            aria-label="Ajustar volume"
          />
          <button
            onClick={toggleMute}
            className="bg-transparent focus:outline-none transition duration-200 ease-in-out"
            aria-label={isMuted ? "Desmutar" : "Mutar"}
          >
            {isMuted ? (
              <FaVolumeMute size={24} className="text-blue-400" />
            ) : (
              <FaVolumeUp size={24} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Informações do Locutor e Imagem */}
      <div className="flex items-center space-x-2 bg-red-700 p-1 rounded-lg w-full md:w-auto">
        <Image
          src="/radio/avatar.jpeg"
          alt="Sara Shirley - Locutora da Rádio Interativa FM 98.9"
          width={40}
          height={40}
          className="object-cover"
          priority
        />
        <div className="text-white text-center md:text-left">
          <p className="text-sm md:text-base font-bold leading-tight">
            No Ar: Sucessão de Sucessos
          </p>
          <p className="text-xs md:text-sm text-orange-300 leading-tight">
            com Sara Shirley
          </p>
        </div>
      </div>

      {/* Ícones de Plataformas */}
      <nav className="flex space-x-4 justify-center md:justify-end text-yellow-400 w-full md:w-auto">
        <a
          href="https://play.google.com/store/apps/details?id=com.radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Android"
        >
          <AiFillAndroid size={30} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://apps.apple.com/us/app/radio-fm-98-9/id123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apple"
        >
          <AiFillApple size={30} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://www.microsoft.com/store/apps/9nblggh4nns1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Windows"
        >
          <AiFillWindows size={30} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <AiFillFacebook size={30} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-lg hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
      </nav>
    </header>
  );
};

export default RadioPlayerHeader;
