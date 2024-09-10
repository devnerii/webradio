import React from 'react';
import Image from 'next/image';
import { FaMusic } from 'react-icons/fa'; // Ícone para melhorar a visualização

interface Song {
  position: number;
  title: string;
  artist: string;
  imageUrl: string;
}

const topSongs: Song[] = [
  { position: 1, title: 'Pipaparapou', artist: 'Xand Avião', imageUrl: 'https://via.placeholder.com/64' },
  { position: 2, title: 'Fica Lá Com Ela', artist: 'Bruna Magalhães & Bruno Martini', imageUrl: 'https://via.placeholder.com/64' },
  { position: 3, title: 'Ivete Sangalo e Ludimila', artist: 'Macetando', imageUrl: 'https://via.placeholder.com/64' },
  { position: 4, title: 'Casca de Bala', artist: 'Thullio Milionário', imageUrl: 'https://via.placeholder.com/64' },
  { position: 5, title: 'Song 5', artist: 'Artist 5', imageUrl: 'https://via.placeholder.com/64' },
  { position: 6, title: 'Song 6', artist: 'Artist 6', imageUrl: 'https://via.placeholder.com/64' },
  { position: 7, title: 'Song 7', artist: 'Artist 7', imageUrl: 'https://via.placeholder.com/64' },
  { position: 8, title: 'Song 8', artist: 'Artist 8', imageUrl: 'https://via.placeholder.com/64' },
  { position: 9, title: 'Song 9', artist: 'Artist 9', imageUrl: 'https://via.placeholder.com/64' },
  { position: 10, title: 'Song 10', artist: 'Artist 10', imageUrl: 'https://via.placeholder.com/64' }
];

const TopSongsComponent: React.FC = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-full p-6 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-xl flex flex-col space-y-4 max-h-96 overflow-y-scroll hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
      <h1 className="text-white font-extrabold text-xl flex items-center"><FaMusic className="mr-2"/>As 10 Melhores Músicas</h1>
      {topSongs.map((song) => (
        <div key={song.position} className="flex items-center p-2 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <Image 
            src={song.imageUrl} 
            alt={`Imagem da música ${song.title}`} 
            width={64} 
            height={64} 
            className="rounded-full mr-3 hover:scale-105 transition-transform duration-200 ease-in-out" 
          />

          <div>
            <h3 className="text-red-600 font-semibold text-lg">{song.position}. {song.title}</h3>
            <p className="text-gray-700">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSongsComponent;
