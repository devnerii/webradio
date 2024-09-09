import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'; // Import do Next.js para otimização de imagem

const FooterComponent: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    // Incrementa o número de visitantes e usuários online
    fetch('/api/stats', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        setVisitorCount(data.visitorCount);
        setOnlineUsers(data.onlineUsers);
      });

    // Remove o usuário online ao fechar a página
    const handleBeforeUnload = () => {
      fetch('/api/stats', { method: 'DELETE' });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Garante que ao desmontar o componente, o usuário seja removido
      handleBeforeUnload();
    };
  }, []);

  return (
    <footer className="bg-gradient-to-r from-red-700 to-red-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Seção Sobre Nós, Nossas Redes Sociais, Facebook Embed e Nosso WhatsApp lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-6">
          
          {/* Sobre Nós */}
          <div className="text-left">
            <h2 className="text-lg font-extrabold mb-2">Sobre Nós</h2>
            <p className="text-gray-300 mb-2 text-sm">
              Somos uma empresa dedicada a trazer as últimas novidades e tendências do mundo digital. Nossa missão é conectar você com o que há de melhor na internet.
            </p>
            <button className="bg-white text-red-700 py-1 px-4 rounded-full text-sm font-bold uppercase transform hover:scale-110 transition-transform duration-300">
              Saiba Mais
            </button>
          </div>

          {/* Nossas Redes Sociais */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Usando o componente Image de Next.js */}
            <Image
              src="https://via.placeholder.com/190x92"
              alt="Banner Placeholder"
              width={190}
              height={92}
              className="mb-4"
            />
            <h2 className="text-lg font-extrabold mb-2">Nossas Redes Sociais</h2>
            <div className="flex space-x-3">
              <a href="http://www.facebook.com/redestreamhost" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="http://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Página do Facebook Embutida */}
          <div className="flex justify-center lg:col-span-1 mr-20">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="150"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>

          {/* Nosso WhatsApp e Visitantes/Usuários Online */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-extrabold mb-2">Nosso Whatsapp</h2>
            <p className="text-green-400 text-xl font-bold flex items-center mb-2">
              <FaWhatsapp className="mr-2" /> (84) 9.9904-0161
            </p>
            <div className="mt-2 text-left">
              <p className="text-gray-400 text-sm"><i className="fa fa-signal mr-2"></i>Visitas: <span className="text-white">{visitorCount}</span></p>
              <p className="text-gray-400 text-sm"><i className="fa fa-user mr-2"></i>Usuários Online: <span className="text-white">{onlineUsers}</span></p>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-red-600 my-6"></div>

        {/* Direitos Autorais Centralizado */}
        <div className="flex justify-center mt-6">
          <p className="text-gray-400 text-sm">© 2024 Todos os direitos reservados. Exemplo Ltda.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
