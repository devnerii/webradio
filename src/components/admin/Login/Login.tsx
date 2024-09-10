import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');  
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      usuario,
      password,
    });

    if (result?.error) {
      setError('Falha no login. Por favor, verifique suas credenciais.');
    } else {
      router.push('/administracao/painel');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#3C8476] to-[#EFFEF9]">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-4">
          {/* Pode incluir um ícone de login aqui, se desejar */}
        </div>
        <h1 className="text-center text-2xl font-bold mb-6 text-[#3C8476]">
          Login
        </h1>
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="text-center font-semibold">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              type="text"
              name="usuario"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-[#3C8476] text-white font-bold py-2 px-4 rounded-full hover:bg-[#2e6e5f] focus:outline-none focus:shadow-outline"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
