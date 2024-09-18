// src/pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        usuario: { label: 'Usuário', type: 'text', placeholder: 'Seu usuário' },
        password: { label: 'Senha', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              usuario: credentials.usuario,
              password: credentials.password
            })
          });

          if (!res.ok) {
            return null;
          }

          const user = await res.json();

          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',  // Usar JWT para a estratégia de sessão
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          usuario: user.usuario,
          nome: user.nome,
          role: user.role
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/administracao/login',
    error: '/administracao/login', // Redirecionar para a página de login em caso de erro
  },
  debug: false, // Desative o modo de depuração em produção
});
