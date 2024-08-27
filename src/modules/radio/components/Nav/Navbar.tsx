import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-500 text-white w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Rádio FM 98.9</Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/a-radio">A Rádio</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/programacao">Programação</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/locutores">Locutores</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/videos">Vídeos</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/galeria-de-fotos">Galeria de Fotos</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/audio">Áudio</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/noticias">Notícias</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/contato">Contato</Link>
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
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/a-radio">A Rádio</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/programacao">Programação</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/locutores">Locutores</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/videos">Vídeos</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/galeria-de-fotos">Galeria de Fotos</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/audio">Áudio</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/noticias">Notícias</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
