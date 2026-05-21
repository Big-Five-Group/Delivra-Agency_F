import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuarioLogado } = useContext(AuthContext);
  const token = (usuarioLogado as any)?.token;

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    descricao: '',
  });

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.warning('Você precisa estar logado.');
      navigate('/login');
    } else if (id) {
      buscar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
      });
    }
  }, [token, id, navigate]);

  async function apagarProduto() {
    setCarregando(true);

    try {
      await deletar(`/produtos/deletar/${id}`, {
        headers: { Authorization: token },
      });

      toast.success('Produto removido com sucesso!');
      navigate('/produtos');

    } catch (error) {
      console.error(error);

      toast.error(
        'Erro ao excluir o produto. Verifique se ele está vinculado a alguma categoria.'
      );

    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 flex items-center justify-center animate-reveal-up">

      <div className="bg-white p-8 rounded-[28px] shadow-xl w-full max-w-md border border-red-100 text-center space-y-6">

        <div className="text-5xl animate-pulse">
          🗑️
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Remover Produto?
          </h1>

          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Deseja realmente retirar o item{' '}
            <strong className="text-slate-800">
              "{produto.nome}"
            </strong>{' '}
            do cardápio ativo?
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider">
            Atenção
          </p>

          <p className="text-slate-600 text-sm mt-1">
            Esta ação não poderá ser desfeita.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">

          <Link
            to="/produtos"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-2xl text-sm transition-all duration-300 text-center"
          >
            Cancelar
          </Link>

          <button
            onClick={apagarProduto}
            disabled={carregando}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-2xl text-sm shadow-lg transition-all duration-300 disabled:bg-slate-400"
          >
            {carregando ? 'Removendo...' : 'Excluir Produto'}
          </button>

        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;