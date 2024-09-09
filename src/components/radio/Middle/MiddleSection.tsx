// components/MiddleSection.tsx
import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

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
    {
      title: "Nova legislação sobre impostos gera debate no senado",
      date: "24/03/2024",
      category: "Política",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+5"
    },
    {
      title: "Pesquisa revela aumento no índice de desemprego",
      date: "24/03/2024",
      category: "Economia",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+6"
    },
    {
      title: "Campanha de vacinação contra a gripe começa na próxima semana",
      date: "24/03/2024",
      category: "Saúde",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+7"
    },
    {
      title: "Festival de música atrai milhares de turistas",
      date: "24/03/2024",
      category: "Entretenimento",
      imgSrc: "https://via.placeholder.com/400x250?text=Notícia+8"
    },
  ];

  return (
    <div className="w-full mx-0 px-4 py-4 space-y-8">
      {/* Shared Border Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 mx-0 rounded-lg overflow-hidden">
        
        {/* News Section - Expanded to occupy more columns */}
        <div className="relative bg-white p-3 shadow-md overflow-hidden group md:col-span-3 z-10 rounded-lg">
          <h2 className="text-3xl font-extrabold mb-3 text-red-600 group-hover:underline group-hover:text-red-800 transition-all duration-300">Últimas Notícias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-0 px-0"> 
            {newsItems.slice(0, 8).map((item, index) => (
              <div key={index} className="group bg-gray-100 p-2 rounded-md shadow-sm transform hover:scale-105 hover:shadow-md transition-transform duration-500 relative"> 
                <div className="overflow-hidden rounded-md">
                  <Image src={item.imgSrc} alt={item.title} width={400} height={250} className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-1"> 
                  <p className="text-xs text-red-600 font-semibold">{item.date} - {item.category}</p>
                  <h3 className="text-sm font-bold mt-1 text-gray-800 group-hover:text-red-700 transition-colors duration-300">{item.title}</h3>
                  <a href="#" className="mt-1 inline-block text-red-600 hover:text-red-800 font-bold transition-colors duration-300">Leia mais</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - Reduced to occupy fewer columns and slightly expanded to the left with border-radius */}
        <div className="relative bg-gradient-to-r from-red-400 to-red-600 p-6 shadow-md text-center overflow-hidden group flex flex-col justify-center items-center z-10 md:col-span-1 ml-[-10px] rounded-l-lg">
          <h2 className="text-3xl font-extrabold mb-4 text-white">Nosso Contato</h2>
          <p className="text-lg mb-2 text-white">Nosso Whatsapp</p>
          <p className="text-2xl font-bold mb-6 text-white">(82) 9.9911-2619</p>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://instagram.com" className="text-white transform hover:scale-125 transition-transform duration-300">
              <FaInstagram size={28} />
            </a>
            <a href="https://facebook.com" className="text-white transform hover:scale-125 transition-transform duration-300">
              <FaFacebookF size={28} />
            </a>
            <a href="https://youtube.com" className="text-white transform hover:scale-125 transition-transform duration-300">
              <FaYoutube size={28} />
            </a>
            <a href="https://twitter.com" className="text-white transform hover:scale-125 transition-transform duration-300">
              <FaTwitter size={28} />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600 rounded-full blur-2xl opacity-70 z-0"></div> 
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-red-600 rounded-full blur-2xl opacity-50 z-0"></div> 
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
