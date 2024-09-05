// components/FooterComponent.tsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção Sobre Nós */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">Sobre Nós</h2>
            <p className="text-gray-300 mb-4">
              Somos uma empresa dedicada a trazer as últimas novidades e tendências do mundo digital. Nossa missão é conectar você com o que há de melhor na internet.
            </p>
            <button className="bg-white text-blue-700 py-2 px-6 rounded-full font-bold uppercase transform hover:scale-110 transition-transform duration-300">
              Saiba Mais
            </button>
          </div>

          {/* Seção Contato */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">Contato</h2>
            <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> +55 (11) 1234-5678</p>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> contato@exemplo.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-white hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Seção Links Rápidos */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Início</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Serviços</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-blue-600 my-8"></div>

        {/* Direitos Autorais */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Todos os direitos reservados. Exemplo Ltda.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4 transition-colors duration-300">Termos de Serviço</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
