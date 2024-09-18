declare module 'react-slick';
// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      usuario: string;
      nome: string;
      role: string;
    };
  }

  interface User {
    id: number;
    usuario: string;
    nome: string;
    role: string;
  }
}
