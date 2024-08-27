import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-500 text-white w-full py-4"> {/* Aumentei a altura da barra com py-4 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou nome à esquerda (opcional) */}
        <div className="flex-grow">
          {/* Você pode adicionar um logotipo ou nome aqui, se desejar */}
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-bold justify-end items-center mr-10"> {/* Alinhado à direita */}
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/">INÍCIO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/quem-somos">QUEM SOMOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/fale-conosco">FALE CONOSCO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/programacao">PROGRAMAÇÃO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/locutores">LOCUTORES</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/noticias">NOTÍCIAS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/fotos">FOTOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/mural">MURAL</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/videos">VIDEOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/audios">ÁUDIOS</Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <ul className="flex flex-col space-y-2 mt-2 md:hidden font-bold items-center"> {/* Centralização no mobile */}
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/">INÍCIO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/quem-somos">QUEM SOMOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/fale-conosco">FALE CONOSCO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/programacao">PROGRAMAÇÃO</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/locutores">LOCUTORES</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/noticias">NOTÍCIAS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/fotos">FOTOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/mural">MURAL</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/videos">VIDEOS</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/audios">ÁUDIOS</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
