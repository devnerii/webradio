const bcrypt = require('bcrypt');
const Database = require('better-sqlite3');

// Configuração do Banco de Dados
const db = new Database('database.db');

// Função para Criar um Usuário Admin
async function createAdminUser() {
  const usuario = 'admin'; // Substitua pelo nome de usuário desejado
  const nome = 'Administrador'; // Substitua pelo nome real do administrador
  const password = 'rede@01553oc'; // A senha em texto puro (não é seguro armazenar assim diretamente)
  const role = 'admin'; // Role pode ser 'admin' ou 'visualizar'

  // Gera um hash seguro para a senha
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Cria a tabela de usuários, se ainda não existir
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT UNIQUE,
      nome TEXT,
      password TEXT,
      role TEXT
    );
  `);

  // Insere o usuário admin na tabela de usuários
  try {
    const stmt = db.prepare('INSERT INTO users (usuario, nome, password, role) VALUES (?, ?, ?, ?)');
    stmt.run(usuario, nome, hashedPassword, role);
    console.log('Usuário admin criado com sucesso!');
  } catch (err) {
    console.error('Erro ao criar usuário admin:', err);
  }

  // Exibe o hash da senha
  console.log('Senha Hashed:', hashedPassword);
}

// Executa a função para criar o usuário admin
createAdminUser().catch((err) => console.error(err));
