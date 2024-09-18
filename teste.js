const db = require('./lib/db'); // Ajuste o caminho de acordo com a estrutura do seu projeto
const usuario = 'teste'; // Nome de usuário de exemplo

const user = db.prepare('SELECT * FROM users WHERE usuario = ?').get(usuario);
console.log('Resultado da consulta:', user);
