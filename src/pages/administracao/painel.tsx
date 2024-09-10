// pages/administracao/painel.tsx
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/administracao/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const PainelPage = () => {
  return <div>Painel Admin</div>;
};

export default PainelPage;
