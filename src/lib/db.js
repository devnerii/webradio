// src/lib/db.js
const Database = require('better-sqlite3');
const db = new Database('database.db'); // Use o nome do seu arquivo de banco de dados SQLite

module.exports = db;
