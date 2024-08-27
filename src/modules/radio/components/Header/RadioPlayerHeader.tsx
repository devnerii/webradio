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
    <header className="bg-red-500 text-white w-full p-2 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 h-[125px] md:h-[150px] lg:h-[125px]">
      {/* Controle de Reprodução e Volume */}
      <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
        <button
          onClick={togglePlay}
          className="bg-green-500 p-1 md:p-2 lg:p-3 rounded-full hover:bg-green-600 focus:outline-none transition duration-200 ease-in-out"
          aria-label={isPlaying ? "Pausar" : "Tocar"}
        >
          {isPlaying ? <FaPause size={20} className="md:size-[24px] lg:size-[28px]" /> : <FaPlay size={20} className="md:size-[24px] lg:size-[28px]" />}
        </button>
        <div className="relative w-36 md:w-48 lg:w-64">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 md:h-2 lg:h-3 bg-blue-500 rounded-lg focus:outline-none"
            aria-label="Ajustar volume"
          />
          <button
            onClick={toggleMute}
            className="absolute top-1/2 right-[-25px] md:right-[-30px] lg:right-[-35px] transform -translate-y-1/2 focus:outline-none transition duration-200 ease-in-out"
            aria-label={isMuted ? "Desmutar" : "Mutar"}
          >
            {isMuted ? (
              <FaVolumeMute size={18} className="text-blue-500 md:text-[22px] lg:text-[26px]" />
            ) : (
              <FaVolumeUp size={18} className="text-blue-500 md:text-[22px] lg:text-[26px]" />
            )}
          </button>
        </div>
      </div>

      {/* Informações do Locutor e Imagem */}
      <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
        <div className="flex-shrink-0">
          <Image
            src="/radio/avatar.jpeg"
            alt="Sara Shirley - Locutora da Rádio Interativa FM 98.9"
            width={40}
            height={40}
            className="rounded-full md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px]"
            priority
          />
        </div>
        <div className="text-center md:text-left md:ml-4">
          <p className="text-sm md:text-base lg:text-lg font-bold leading-tight">
            No Ar: Sucessão de Sucessos
          </p>
          <p className="text-xs md:text-sm lg:text-base text-orange-300 leading-tight">
            com Sara Shirley
          </p>
        </div>
      </div>

      {/* Ícones de Plataformas */}
      <nav className="flex justify-end space-x-2 md:space-x-3 lg:space-x-4 text-yellow-400">
        <a
          href="https://play.google.com/store/apps/details?id=com.radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Android"
        >
          <AiFillAndroid
            size={20}
            className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer md:size-[24px] lg:size-[28px]"
          />
        </a>
        <a
          href="https://apps.apple.com/us/app/radio-fm-98-9/id123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apple"
        >
          <AiFillApple
            size={20}
            className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer md:size-[24px] lg:size-[28px]"
          />
        </a>
        <a
          href="https://www.microsoft.com/store/apps/9nblggh4nns1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Windows"
        >
          <AiFillWindows
            size={20}
            className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer md:size-[24px] lg:size-[28px]"
          />
        </a>
        <a
          href="https://www.facebook.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <AiFillFacebook
            size={20}
            className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer md:size-[24px] lg:size-[28px]"
          />
        </a>
        <a
          href="https://twitter.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-xl hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer md:text-[24px] lg:text-[28px]"
          />
        </a>
      </nav>
    </header>
  );
};

export default RadioPlayerHeader;
