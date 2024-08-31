import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillWindows,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
    <header className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-6 h-auto md:h-[80px] space-y-2 md:space-y-0 shadow-lg">
      {/* Seção de Controle de Reprodução e Volume */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-10 p-2 rounded-full focus:outline-none hover:bg-opacity-20 transition duration-200 ease-in-out transform hover:scale-110"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <FaPause size={28} className="text-blue-300" />
            ) : (
              <FaPlay size={28} className="text-blue-300" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            className="w-28 h-1 bg-blue-400 rounded-lg focus:outline-none appearance-none"
            aria-label="Ajustar volume"
          />
          <button
            onClick={toggleMute}
            className="bg-white bg-opacity-10 p-2 rounded-full focus:outline-none hover:bg-opacity-20 transition duration-200 ease-in-out transform hover:scale-110"
            aria-label={isMuted ? "Desmutar" : "Mutar"}
          >
            {isMuted ? (
              <FaVolumeMute size={28} className="text-blue-300" />
            ) : (
              <FaVolumeUp size={28} className="text-blue-300" />
            )}
          </button>
        </div>
      </div>

      {/* Informações do Locutor e Imagem */}
      <div className="flex items-center space-x-3 bg-red-700 p-2 rounded-lg w-full md:w-auto shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <Image
          src="/radio/avatar.jpeg"
          alt="Sara Shirley - Locutora da Rádio Interativa FM 98.9"
          width={50}
          height={50}
          className="rounded-full border-2 border-white hover:scale-105 transition-transform duration-200 ease-in-out"
          priority
        />
        <div className="text-white text-center md:text-left">
          <p className="text-base md:text-lg font-bold leading-tight">
            No Ar: Sucessão de Sucessos
          </p>
          <p className="text-sm md:text-md text-yellow-300 leading-tight">
            com Sara Shirley
          </p>
        </div>
      </div>

      {/* Ícones de Plataformas e Redes Sociais */}
      <nav className="flex space-x-3 justify-center md:justify-end text-yellow-400 w-full md:w-auto">
        <a
          href="https://play.google.com/store/apps/details?id=com.radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Android"
        >
          <AiFillAndroid size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://apps.apple.com/us/app/radio-fm-98-9/id123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apple"
        >
          <AiFillApple size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://www.microsoft.com/store/apps/9nblggh4nns1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Windows"
        >
          <AiFillWindows size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-lg hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://instagram.com/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/company/radiofm989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} className="hover:text-yellow-500 transition duration-200 ease-in-out cursor-pointer" />
        </a>
      </nav>
    </header>
  );
};

export default RadioPlayerHeader;
