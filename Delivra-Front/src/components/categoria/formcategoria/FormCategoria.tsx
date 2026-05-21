import { useState, type ChangeEvent, type FormEvent, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, cadastrar, atualizar } from '../../../services/Service';

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuarioLogado } = useContext(AuthContext);
  const token = (usuarioLogado as any)?.token;

  const [carregando, setCarregando] = useState(false);

  const [categoriaData, setCategoriaData] = useState({
    id: 0,
    tipo: '',
    descricao: '',
  });

  useEffect(() => {
    if (id && token) {
      buscar(`/categorias/${id}`, setCategoriaData, {
        headers: { Authorization: token },
      });
    }
  }, [id, token]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoriaData({
      ...categoriaData,
      [e.target.name]: e.target.value,
    });
  }

  async function salvarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setCarregando(true);

    try {
      if (id) {
        await atualizar(
          `/categorias/atualizar`,
          categoriaData,
          () => {},
          {
            headers: { Authorization: token },
          }
        );

        alert('Categoria atualizada!');
      } else {
        const { id: _, ...dadosParaEnviar } = categoriaData;

        await cadastrar(
          `/categorias/cadastrar`,
          dadosParaEnviar,
          () => {},
          {
            headers: { Authorization: token },
          }
        );

        alert('Categoria cadastrada!');
      }

      navigate('/categorias');
    } catch (error) {
      alert('Erro ao salvar.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-2xl relative">

        {/* EFEITOS */}
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>

        <form
          onSubmit={salvarCategoria}
          className="relative z-10 bg-white rounded-[36px] shadow-2xl border border-brand-orange/10 overflow-hidden animate-reveal-up"
        >

          {/* HEADER */}
          <div className="relative px-8 md:px-12 pt-10 pb-8 border-b border-slate-100 overflow-hidden">

            <div className="absolute top-0 right-0 w-56 h-56 bg-brand-orange/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="space-y-3 text-center md:text-left">

                <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] inline-block">
                  Delivra Category
                </span>

                <div>
                  <h1 className="text-4xl font-black text-slate-800 tracking-tight">
                    {id ? 'Editar Categoria' : 'Nova Categoria'}
                  </h1>

                  <p className="text-slate-500 font-medium mt-2 max-w-lg">
                    Organize os grupos de produtos do ecossistema Delivra
                    com praticidade e visual moderno.
                  </p>
                </div>
              </div>

              {/* VISUAL */}
              <div className="w-28 h-28 rounded-[28px] bg-brand-bg border-4 border-white shadow-xl flex items-center justify-center text-5xl animate-float shrink-0">
                🗂️
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-8 md:p-12 space-y-7">

            {/* TIPO */}
            <div className="space-y-2">

              <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                Nome da Categoria
              </label>

              <input
                name="tipo"
                value={categoriaData.tipo}
                onChange={atualizarEstado}
                placeholder="Ex: Saudáveis, Bebidas, Sobremesas..."
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
              />
            </div>

            {/* DESCRIÇÃO */}
            <div className="space-y-2">

              <label className="text-sm font-black uppercase tracking-wide text-slate-500">
                Descrição
              </label>

              <input
                name="descricao"
                value={categoriaData.descricao}
                onChange={atualizarEstado}
                placeholder="Descreva rapidamente essa categoria..."
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
              />
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <button
                type="button"
                onClick={() => navigate('/categorias')}
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
                  : 'Cadastrar Categoria'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;