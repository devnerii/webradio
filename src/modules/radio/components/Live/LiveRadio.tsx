// components/LiveRadio.tsx
import React from 'react';
import VideoComponent from './VideoComponent';
import AnnouncerExample from './AnnouncerComponent';
import TopSongsComponent from './TopSongsComponent';

const LiveRadio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-4 md:space-x-4 space-y-4 md:space-y-0 w-full">
      {/* Componente do Locutor (à esquerda) */}
      <div className="w-full md:w-1/4 flex-shrink-0">
        <AnnouncerExample />
      </div>

      {/* Componente do Player de Vídeo (ao centro) */}
      <div className="w-full md:w-1/2 mx-auto">
        <VideoComponent />
      </div>

      {/* Componente das 10 Melhores Músicas (à direita) */}
      <div className="w-full md:w-1/4 flex-shrink-0">
        <TopSongsComponent />
      </div>
    </div>
  );
};

export default LiveRadio;
