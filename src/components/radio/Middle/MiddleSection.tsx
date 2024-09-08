// components/MiddleSection.tsx
import React from 'react';
import Image from 'next/image';
import { 
  FaInstagram, FaFacebookF, FaYoutube, FaTwitter, 
  FaLinkedin, FaPinterest, FaSnapchatGhost, FaTiktok, 
  FaPhoneAlt, FaMicrophoneAlt, FaNewspaper 
} from 'react-icons/fa';

const MiddleSection = () => {
  const newsItems = [
    {
      title: "Baixada Santista registra 4 acidentes com parapente em menos de um mês",
      date: "24/03/2024",
      category: "Cidade",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+1"
    },
    {
      title: "Ira apoia plano proposto por presidente da Síria para encerrar crise",
      date: "24/03/2024",
      category: "Cidade",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+2"
    },
    {
      title: "A gente precisava de mais tempo, disse advogado sobre troca na defesa",
      date: "24/03/2024",
      category: "Cidade",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+3"
    },
    {
      title: "Oposição da Venezuela convoca protestos contra posse de Chávez",
      date: "24/03/2024",
      category: "Cidade",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+4"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      
      {/* Locutores e Redes Sociais na mesma linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Locutores Section */}
        <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-10 rounded-lg shadow-2xl overflow-hidden group">
          <h2 className="text-5xl font-extrabold mb-8 z-10 relative group-hover:underline group-hover:text-blue-200 transition-all duration-300">Locutores</h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 z-10 relative">
            <div className="group text-center transform hover:scale-125 hover:rotate-6 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full group-hover:bg-opacity-0 transition-all duration-300"></div>
              <Image src="https://via.placeholder.com/150" alt="Jorge Cavalcante" width={150} height={150} className="rounded-full mx-auto mb-4 z-20 relative shadow-xl hover:shadow-2xl transition-shadow duration-300" />
              <h3 className="text-3xl font-bold relative z-20 text-white">Jorge Cavalcante</h3>
              <p className="relative z-20 text-lg text-white">Radialista e Diretor</p>
            </div>
            <div className="group text-center transform hover:scale-125 hover:-rotate-6 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full group-hover:bg-opacity-0 transition-all duration-300"></div>
              <Image src="https://via.placeholder.com/150" alt="Jota Domingos" width={150} height={150} className="rounded-full mx-auto mb-4 z-20 relative shadow-xl hover:shadow-2xl transition-shadow duration-300" />
              <h3 className="text-3xl font-bold relative z-20 text-white">Jota Domingos</h3>
              <p className="relative z-20 text-lg text-white">Locutor</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-800 rounded-full blur-3xl opacity-70 z-0"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-900 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-20 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-40 z-0 transition-opacity duration-300 group-hover:opacity-60"></div>
          <div className="absolute bottom-5 right-5 p-3 rounded-full bg-blue-700 text-white transform hover:scale-125 transition-transform duration-300 z-20">
            <FaMicrophoneAlt size={32} />
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-10 rounded-lg shadow-2xl text-center overflow-hidden group">
          <h2 className="text-5xl font-extrabold mb-8 text-white group-hover:underline group-hover:text-blue-200 transition-all duration-300">Nosso Contato</h2>
          <p className="text-3xl mb-4 text-white">Nosso Whatsapp</p>
          <p className="text-5xl font-bold mb-8 text-white">(82) 9.9911-2619</p>
          <div className="flex justify-center space-x-8 mt-6">
            <a href="https://instagram.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaInstagram size={32} />
            </a>
            <a href="https://facebook.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaFacebookF size={32} />
            </a>
            <a href="https://youtube.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaYoutube size={32} />
            </a>
            <a href="https://twitter.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaTwitter size={32} />
            </a>
          </div>
          <div className="flex justify-center space-x-8 mt-10">
            <a href="https://linkedin.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://pinterest.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaPinterest size={32} />
            </a>
            <a href="https://snapchat.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaSnapchatGhost size={32} />
            </a>
            <a href="https://tiktok.com" className="text-white transform hover:scale-150 transition-transform duration-300">
              <FaTiktok size={32} />
            </a>
          </div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-800 rounded-full blur-3xl opacity-70 z-0"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-700 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-20 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-40 z-0 transition-opacity duration-300 group-hover:opacity-60"></div>
          <div className="absolute top-5 left-5 p-3 rounded-full bg-blue-700 text-white transform hover:scale-125 transition-transform duration-300 z-20">
            <FaPhoneAlt size={32} />
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="relative bg-white p-10 rounded-lg shadow-2xl overflow-hidden group">
        <h2 className="text-5xl font-extrabold mb-8 text-blue-600 group-hover:underline group-hover:text-blue-800 transition-all duration-300">Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {newsItems.map((item, index) => (
            <div key={index} className="group bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-500 relative">
              <div className="overflow-hidden rounded-t-lg">
                <Image src={item.imgSrc} alt={item.title} width={400} height={250} className="rounded-lg object-cover transform group-hover:scale-125 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-xs text-blue-600 font-semibold">{item.date} - {item.category}</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien vel odio congue ullamcorper...
                </p>
                <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-bold transition-colors duration-300">Leia mais</a>
              </div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-blue-600 opacity-20 z-0"></div>
        <div className="absolute bottom-5 left-5 p-3 rounded-full bg-blue-700 text-white transform hover:scale-125 transition-transform duration-300 z-20">
          <FaNewspaper size={32} />
        </div>
      </div>

    </div>
  );
};

export default MiddleSection;
