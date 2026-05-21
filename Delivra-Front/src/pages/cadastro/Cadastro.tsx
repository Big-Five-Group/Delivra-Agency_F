// src/pages/cadastro/Cadastro.tsx
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';

function Cadastro() {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [usuarioData, setUsuarioData] = useState({
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioData({
      ...usuarioData,
      [e.target.name]: e.target.value
    });
  }

  async function executarCadastro(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);

    if (usuarioData.senha !== confirmarSenha) {
      alert('Atenção: As senhas digitadas não coincidem.');
      setCarregando(false);
      return;
    }

    try {
      // Envia os dados para a rota pública de criação de usuários
      await cadastrarUsuario('/usuarios/cadastrar', usuarioData, () => {});
      alert('Operador cadastrado com sucesso no ecossistema!');
      navigate('/login'); // Redireciona direto para a tela de login
    } catch (error) {
      console.error('Erro ao cadastrar operador:', error);
      alert('Erro ao processar cadastro. Verifique os dados ou se o e-mail já existe.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 flex items-center justify-center">
      <form 
        onSubmit={executarCadastro}
        className="bg-white p-8 rounded-[28px] shadow-xl w-full max-w-md border border-brand-orange/10 animate-reveal-up"
      >
        <div className="text-4xl mb-3 text-center animate-float">📝</div>
        <h1 className="text-2xl font-black text-slate-800 text-center mb-1 tracking-tight">Criar Conta</h1>
        <p className="text-center text-slate-500 text-xs mb-8">Registre-se para gerenciar o ecossistema de entregas</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome" className="text-xs font-bold text-slate-700 tracking-wide">Nome Completo</label>
            <input 
              id="nome" type="text" name="nome" placeholder="Ex: Jean Pedro"
              value={usuarioData.nome} onChange={atualizarEstado} required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="usuario" className="text-xs font-bold text-slate-700 tracking-wide">E-mail (Será seu Usuário)</label>
            <input 
              id="usuario" type="email" name="usuario" placeholder="jean@delivra.com"
              value={usuarioData.usuario} onChange={atualizarEstado} required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="foto" className="text-xs font-bold text-slate-700 tracking-wide">URL da Foto de Perfil (Opcional)</label>
            <input 
              id="foto" type="text" name="foto" placeholder="https://github.com/seuusuario.png"
              value={usuarioData.foto} onChange={atualizarEstado}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="senha" className="text-xs font-bold text-slate-700 tracking-wide">Senha</label>
              <input 
                id="senha" type="password" name="senha" placeholder="••••••••"
                value={usuarioData.senha} onChange={atualizarEstado} required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmarSenha" className="text-xs font-bold text-slate-700 tracking-wide">Confirmar Senha</label>
              <input 
                id="confirmarSenha" type="password" name="confirmarSenha" placeholder="••••••••"
                value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-orange bg-slate-50 text-slate-800 font-medium transition-all"
              />
            </div>
          </div>
        </div>

        <button 
          type="submit" disabled={carregando}
          className="w-full bg-brand-orange text-white py-4 rounded-xl font-black mt-8 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all disabled:bg-slate-300"
        >
          {carregando ? 'Processando...' : 'Finalizar Cadastro'}
        </button>

        <p className="text-center text-slate-500 text-xs mt-6">
          Já possui registro?{' '}
          <Link to="/login" className="text-brand-orange font-bold hover:underline">
            Faça login aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;