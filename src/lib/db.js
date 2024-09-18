// src/lib/db.js
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obter o diretório atual do módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho absoluto para o arquivo do banco de dados SQLite chamado database.db
const dbPath = path.resolve(__dirname, 'database.db');

let db;

try {
  db = new Database(dbPath, { fileMustExist: true }); // Evita criar um novo DB se não existir
} catch (error) {
  console.error('Erro ao conectar ao banco de dados:', error);
  throw error;
}

export default db;
