import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardproduto/CardProduto'; 

interface Produto {
  id: number;
  nome: string;
  preco: number;
  foto: string;
  descricao: string;
  categoria: {
    tipo: string;
  } | null;
}

function ListarProduto() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const { usuarioLogado } = useContext(AuthContext);
  const token = (usuarioLogado as any)?.token;

  async function listarProdutos() {
    try {
      await buscar('/produtos/all', setProdutos, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error('Erro ao listar:', error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      listarProdutos();
    }
  }, [token]);

  if (carregando) return <div className="p-10 text-center">Carregando cardápio...</div>;

  return (
    <div className="min-h-screen bg-brand-bg p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black text-slate-800">Cardápio</h1>
          <Link to="/cadastrarproduto" className="bg-brand-orange text-white px-4 py-2 rounded-xl font-bold">
            + Novo Produto
          </Link>
        </div>
        
        {produtos.length === 0 && <p className="text-center">Nenhum produto cadastrado.</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((prod) => (
            <CardProduto 
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              preco={prod.preco}
              descricao={prod.descricao}
              foto={prod.foto}
              categoria={prod.categoria?.tipo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListarProduto;