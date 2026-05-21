import { useState, type ChangeEvent, type FormEvent, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, cadastrar, atualizar } from '../../../services/Service';

interface Categoria {
  id: number;
  tipo: string;
}

function FormProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuarioLogado } = useContext(AuthContext);

  const token = (usuarioLogado as any)?.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [carregando, setCarregando] = useState(false);

  const [produtoData, setProdutoData] = useState({
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    descricao: '',
    categoria: { id: 0 },
  });

  useEffect(() => {
    buscar('/categorias/all', setCategorias, {
      headers: { Authorization: token },
    });

    if (id) {
      buscar(`/produtos/${id}`, setProdutoData, {
        headers: { Authorization: token },
      });
    }
  }, [id, token]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (e.target.name === 'categoria') {
      setProdutoData({
        ...produtoData,
        categoria: { id: Number(e.target.value) },
      });
    } else {
      setProdutoData({
        ...produtoData,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function salvarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setCarregando(true);

    const payload = {
      ...produtoData,
      preco: Number(produtoData.preco),
      categoria: { id: Number(produtoData.categoria.id) },
    };

    try {
      if (id) {
        await atualizar(
          `/produtos/atualizar`,
          { ...payload, id: Number(id) },
          () => {},
          {
            headers: { Authorization: token },
          }
        );

        alert('Produto atualizado!');
      } else {
        await cadastrar(
          `/produtos/cadastrar`,
          { ...payload, id: undefined },
          () => {},
          {
            headers: { Authorization: token },
          }
        );

        alert('Produto cadastrado!');
      }

      navigate('/produtos');
    } catch (error) {
      alert('Erro ao salvar. Verifique se escolheu a categoria.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-3xl relative">

        {/* EFEITOS */}
        <div className="absolute -top-28 -right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>

        <form
          onSubmit={salvarProduto}
          className="relative z-10 bg-white rounded-[36px] shadow-2xl border border-brand-orange/10 overflow-hidden animate-reveal-up"
        >

          {/* HEADER */}
          <div className="relative px-8 md:px-12 pt-10 pb-8 border-b border-slate-100 overflow-hidden">

            <div className="absolute top-0 right-0 w-56 h-56 bg-brand-orange/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

              <div className="space-y-3 text-center lg:text-left">

                <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] inline-block">
                  Delivra Products
                </span>

                <div>
                  <h1 className="text-4xl font-black text-slate-800 tracking-tight">
                    {id ? 'Editar Produto' : 'Novo Produto'}
                  </h1>

                  <p className="text-slate-500 font-medium mt-2 max-w-xl">
                    Cadastre produtos com aparência moderna e organização
                    profissional para o catálogo Delivra.
                  </p>
                </div>
              </div>

              {/* VISUAL */}
              <div className="w-32 h-32 rounded-[32px] bg-brand-bg border-4 border-white shadow-2xl flex items-center justify-center text-6xl animate-float shrink-0">
                🍔
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-8 md:p-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* NOME */}
              <div className="space-y-2 md:col-span-2">

                <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Nome do Produto
                </label>

                <input
                  name="nome"
                  type="text"
                  placeholder="Ex: X-Burger Premium"
                  value={produtoData.nome}
                  onChange={atualizarEstado}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                />
              </div>

              {/* PREÇO */}
              <div className="space-y-2">

                <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Preço
                </label>

                <input
                  name="preco"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={produtoData.preco}
                  onChange={atualizarEstado}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                />
              </div>

              {/* CATEGORIA */}
              <div className="space-y-2">

                <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Categoria
                </label>

                <select
                  name="categoria"
                  value={produtoData.categoria.id}
                  onChange={atualizarEstado}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                >
                  <option value="">
                    Selecione uma categoria
                  </option>

                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.tipo}
                    </option>
                  ))}
                </select>
              </div>

              {/* DESCRIÇÃO */}
              <div className="space-y-2 md:col-span-2">

                <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Descrição
                </label>

                <input
                  name="descricao"
                  type="text"
                  placeholder="Descreva rapidamente o produto..."
                  value={produtoData.descricao}
                  onChange={atualizarEstado}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                />
              </div>

              {/* FOTO */}
              <div className="space-y-2 md:col-span-2">

                <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                  URL da Foto
                </label>

                <input
                  name="foto"
                  type="text"
                  placeholder="https://..."
                  value={produtoData.foto}
                  onChange={atualizarEstado}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 pt-10">

              <button
                type="button"
                onClick={() => navigate('/produtos')}
                className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black py-4 rounded-2xl transition-all"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-brand-orange hover:brightness-110 text-white font-black py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                {carregando
                  ? 'Salvando...'
                  : id
                  ? 'Salvar Alterações'
                  : 'Cadastrar Produto'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;