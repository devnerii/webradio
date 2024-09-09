import React, { useState, useEffect } from 'react';
import { FaBroadcastTower } from 'react-icons/fa'; 

const VideoComponent: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>('');

  const getFormattedDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-white shadow-xl rounded-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-between bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-2 rounded-t-md shadow-md">
        <span className="font-semibold text-lg flex items-center"><FaBroadcastTower className="mr-2"/>AO VIVO</span>
        <span className="text-sm">{dateTime}</span>
      </div>
      
      <div className="relative bg-black rounded-b-md overflow-hidden">
        <iframe 
          className="w-full h-[340px] rounded-b-md hover:scale-105 transition-transform duration-500 ease-in-out"
          src="https://www.youtube.com/embed/X1mS3mTSpgU?si=47bA_FXAHZ_bOyOQ"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
