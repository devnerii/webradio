// pages/api/stats.js
import fs from 'fs';
import path from 'path';

// Caminho para salvar os dados no arquivo
const filePath = path.resolve('data.json');

const getData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { visitorCount: 0, onlineUsers: 0 };
  }
};

const saveData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

let onlineUsers = 0;

export default function handler(req, res) {
  let { visitorCount } = getData();

  if (req.method === 'POST') {
    // Aumenta o número de visitas quando a página é acessada
    visitorCount++;
    onlineUsers++; // Incrementa o número de usuários online
    saveData({ visitorCount, onlineUsers });
    return res.status(200).json({ visitorCount, onlineUsers });
  }

  if (req.method === 'DELETE') {
    // Decrementa o número de usuários online quando o usuário sai
    onlineUsers = Math.max(onlineUsers - 1, 0); // Não deixa ser menor que 0
    saveData({ visitorCount, onlineUsers });
    return res.status(200).json({ visitorCount, onlineUsers });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ visitorCount, onlineUsers });
  }
}
