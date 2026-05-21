import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';

interface Categoria {
  id: number;
  tipo: string;
  descricao: string;
}

function ListarCategoria() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState(true);
  const { usuarioLogado } = useContext(AuthContext);
  const token = (usuarioLogado as any)?.token;

  async function listarCategorias() {
    try {
      await buscar('/categorias/all', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error('Erro ao listar categorias:', error);
      alert('Erro ao carregar as categorias.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (!token) {
      alert('Você precisa estar logado.');
      navigate('/login');
    } else {
      listarCategorias();
    }
  }, [token]);

  async function funcaoDeletar(id: number) {
    if (window.confirm('Tem certeza que deseja apagar esta categoria? Todos os produtos vinculados serão removidos.')) {
      try {
        await deletar(`/categorias/deletar/${id}`, {
          headers: { Authorization: token },
        });
        alert('Categoria excluída com sucesso!');
        setCategorias(categorias.filter((cat) => cat.id !== id));
      } catch (error: any) {
        console.error('Erro ao deletar:', error);
        alert('Não foi possível excluir. Verifique se não há dependências ativas no banco de dados.');
      }
    }
  }

  if (carregando) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-slate-600 font-bold animate-pulse">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 animate-reveal-up">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-brand-orange/10 pb-5">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Categorias Registradas</h1>
            <p className="text-slate-500 font-medium text-sm">Gerencie os agrupamentos do cardápio.</p>
          </div>
          <Link to="/cadastrarcategoria" className="bg-brand-orange text-white px-5 py-3 rounded-xl font-bold hover:scale-[1.02] transition-all text-center text-sm">
            + Nova Categoria
          </Link>
        </div>

        {categorias.length === 0 && (
          <div className="bg-white p-12 rounded-[28px] text-center border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">Nenhuma categoria encontrada.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-brand-orange/5 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold bg-brand-bg text-brand-orange px-2.5 py-1 rounded-md uppercase">ID #{cat.id}</span>
                <h3 className="text-xl font-black text-slate-800">{cat.tipo}</h3>
                <p className="text-slate-500 text-sm">{cat.descricao}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-50">
                <Link to={`/editarcategoria/${cat.id}`} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-center text-xs transition-colors">✏️ Editar</Link>
                <button onClick={() => funcaoDeletar(cat.id)} className="bg-red-50 hover:bg-red-100 text-red-600 font-bold py-2.5 rounded-xl text-xs transition-colors">🗑️ Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListarCategoria;