import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ff9900] text-white w-full py-4"> {/* Alterei a cor da barra para #ff9900 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou nome à esquerda (opcional) */}
        <div className="flex-grow">
          {/* Você pode adicionar um logotipo ou nome aqui, se desejar */}
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4 font-medium text-sm justify-end items-center mr-10">
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/">INÍCIO</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/quem-somos">QUEM SOMOS</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/programacao">PROGRAMAÇÃO</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/locutores">LOCUTORES</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/noticias">NOTÍCIAS</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/fotos">FOTOS</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/videos">VIDEOS</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/audios">ÁUDIOS</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-200 ease-in-out">
            <Link href="/fale-conosco">FALE CONOSCO</Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <ul className="flex flex-col space-y-1 mt-2 md:hidden font-medium text-sm items-center">
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
