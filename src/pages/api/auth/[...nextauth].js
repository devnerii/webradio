import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        usuario: { label: 'usuario', type: 'text' },
        password: { label: 'senha', type: 'password' }
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',  // Usar JWT para a estratégia de sessão
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,  // Aqui você usa a variável de ambiente NEXTAUTH_SECRET
  pages: {
    signIn: '/administracao/login'
  }
});
