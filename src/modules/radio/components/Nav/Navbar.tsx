import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaMicrophone,
  FaNewspaper,
  FaCamera,
  FaVideo,
  FaMusic,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ff9900] text-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Espaço opcional para logotipo ou nome à esquerda */}
        <div className="flex-grow"></div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-medium text-sm justify-end items-center">
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/" className="flex items-center">
              <FaHome className="text-lg mr-2" /> <span>INÍCIO</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/quem-somos" className="flex items-center">
              <FaInfoCircle className="text-lg mr-2" /> <span>QUEM SOMOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/programacao" className="flex items-center">
              <FaMicrophone className="text-lg mr-2" /> <span>PROGRAMAÇÃO</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/locutores" className="flex items-center">
              <FaMicrophone className="text-lg mr-2" /> <span>LOCUTORES</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/noticias" className="flex items-center">
              <FaNewspaper className="text-lg mr-2" /> <span>NOTÍCIAS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/fotos" className="flex items-center">
              <FaCamera className="text-lg mr-2" /> <span>FOTOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/videos" className="flex items-center">
              <FaVideo className="text-lg mr-2" /> <span>VIDEOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/audios" className="flex items-center">
              <FaMusic className="text-lg mr-2" /> <span>ÁUDIOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/fale-conosco" className="flex items-center">
              <FaEnvelope className="text-lg mr-2" /> <span>FALE CONOSCO</span>
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none transition-transform transform hover:scale-110 duration-200"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <ul className="flex flex-col space-y-2 mt-2 md:hidden bg-[#ff9900] py-4 px-6 rounded-md shadow-lg text-white">
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/" className="flex items-center">
              <FaHome className="text-lg mr-2" /> <span>INÍCIO</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/quem-somos" className="flex items-center">
              <FaInfoCircle className="text-lg mr-2" /> <span>QUEM SOMOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/fale-conosco" className="flex items-center">
              <FaEnvelope className="text-lg mr-2" /> <span>FALE CONOSCO</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/programacao" className="flex items-center">
              <FaMicrophone className="text-lg mr-2" /> <span>PROGRAMAÇÃO</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/locutores" className="flex items-center">
              <FaMicrophone className="text-lg mr-2" /> <span>LOCUTORES</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/noticias" className="flex items-center">
              <FaNewspaper className="text-lg mr-2" /> <span>NOTÍCIAS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/fotos" className="flex items-center">
              <FaCamera className="text-lg mr-2" /> <span>FOTOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/mural" className="flex items-center">
              <FaMicrophone className="text-lg mr-2" /> <span>MURAL</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/videos" className="flex items-center">
              <FaVideo className="text-lg mr-2" /> <span>VIDEOS</span>
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200 ease-in-out flex items-center">
            <Link href="/audios" className="flex items-center">
              <FaMusic className="text-lg mr-2" /> <span>ÁUDIOS</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
