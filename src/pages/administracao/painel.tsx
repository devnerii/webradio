// src/pages/administracao/painel.tsx
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Painel = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/administracao/login');
    }
  }, [status, router]); // Inclui 'router' na lista de dependências

  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Bem-vindo ao Painel, {session?.user?.nome}</h1>
      {/* Conteúdo do painel */}
    </div>
  );
};

export default Painel;
