import db from '../../lib/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { usuario, password } = req.body;

  // Busca o usuário no banco de dados pelo nome de usuário
  const user = db.prepare('SELECT * FROM users WHERE usuario = ?').get(usuario);

  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado', field: 'usuario' });
  }

  // Verifica a senha comparando o hash armazenado no banco com a senha fornecida
  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    return res.status(200).json({ id: user.id, usuario: user.usuario, nome: user.nome, role: user.role });
  } else {
    return res.status(403).json({ message: 'Senha incorreta', field: 'password' });
  }
}
