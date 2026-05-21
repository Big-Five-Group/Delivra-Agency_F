import { useState, type ChangeEvent, type FormEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { login } from '../../services/Service';

function Login() {
  const navigate = useNavigate();
  const { logar } = useContext(AuthContext);
  const [carregando, setCarregando] = useState(false);

  const [usuarioLogin, setUsuarioLogin] = useState({
    usuario: '',
    senha: ''
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  async function executarLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);

    try {
      let respostaUsuario: any = {};
      
      await login('/usuarios/logar', usuarioLogin, (dados: any) => {
        respostaUsuario = dados;
      });

      if (respostaUsuario.token) {
        logar(respostaUsuario); 
        alert(`Bem-vindo de volta, ${respostaUsuario.nome || 'Usuário'}!`);
        navigate('/produtos');
      } else {
        alert('Falha na autenticação. Dados inconsistentes recebidos do servidor.');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      alert('Credenciais inválidas ou erro de conexão com o servidor.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 flex items-center justify-center">
      <form 
        onSubmit={executarLogin}
        className="bg-white p-8 rounded-[28px] shadow-xl w-full max-w-md border border-brand-orange/10 animate-reveal-up"
      >
        <div className="text-4xl mb-3 text-center animate-float">🚀</div>
        <h1 className="text-2xl font-black text-slate-800 text-center mb-1 tracking-tight">Acessar Painel</h1>
        <p className="text-center text-slate-500 text-xs mb-8">Entre com suas credenciais do Delivra Agency</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="usuario" className="text-xs font-bold text-slate-700 tracking-wide">E-mail / Usuário</label>
            <input 
              id="usuario" type="text" name="usuario" placeholder="seuemail@delivra.com"
              value={usuarioLogin.usuario} onChange={atualizarEstado} required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="senha" className="text-xs font-bold text-slate-700 tracking-wide">Senha</label>
            <input 
              id="senha" type="password" name="senha" placeholder="••••••••"
              value={usuarioLogin.senha} onChange={atualizarEstado} required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
            />
          </div>
        </div>

        <button 
          type="submit" disabled={carregando}
          className="w-full bg-brand-orange text-white py-4 rounded-xl font-black mt-8 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all disabled:bg-slate-300"
        >
          {carregando ? 'Autenticando...' : 'Entrar no Sistema'}
        </button>

        <p className="text-center text-slate-500 text-xs mt-6">
          Não possui uma conta?{' '}
          <Link to="/cadastro" className="text-brand-orange font-bold hover:underline">
            Cadastre-se aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;