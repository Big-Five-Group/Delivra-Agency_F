import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuarioLogado } = useContext(AuthContext);
  const token = (usuarioLogado as any)?.token;

  const [categoria, setCategoria] = useState({
    id: 0,
    tipo: '',
    descricao: '',
  });

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.warning('Você precisa estar logado.');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id && token) {
      buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    }
  }, [id, token]);

  async function apagarCategoria() {
    setCarregando(true);

    try {
      await deletar(`/categorias/${id}`, {
        headers: { Authorization: token },
      });

      toast.success('Categoria removida com sucesso!');
      navigate('/categorias');

    } catch (error) {
      console.error(error);

      toast.error(
        'Erro ao excluir categoria. Existem produtos vinculados a ela.'
      );

    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 flex items-center justify-center animate-reveal-up">

      <div className="bg-white p-8 rounded-[28px] shadow-xl w-full max-w-md border border-red-100 text-center space-y-6">

        <div className="text-5xl animate-bounce">
          ⚠️
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Excluir Categoria?
          </h1>

          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Você está prestes a apagar a categoria{' '}
            <strong className="text-slate-800">
              "{categoria.tipo}"
            </strong>.
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider">
            Atenção
          </p>

          <p className="text-slate-600 text-sm mt-1">
            Essa ação removerá permanentemente a categoria do sistema.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">

          <Link
            to="/categorias"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-2xl text-sm transition-all duration-300 text-center"
          >
            Cancelar
          </Link>

          <button
            onClick={apagarCategoria}
            disabled={carregando}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-2xl text-sm shadow-lg transition-all duration-300 disabled:bg-slate-400"
          >
            {carregando ? 'Excluindo...' : 'Excluir Categoria'}
          </button>

        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;