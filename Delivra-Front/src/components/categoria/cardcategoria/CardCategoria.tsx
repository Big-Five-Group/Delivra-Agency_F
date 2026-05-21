import { Link } from 'react-router-dom';

interface CardCategoriaProps {
  categoria: {
    id: number;
    tipo: string;
    descricao: string;
  };
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="relative bg-white p-6 rounded-[28px] border border-brand-orange/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col justify-between">

      {/* EFEITO */}
      <div className="absolute top-[-50px] right-[-50px] w-36 h-36 bg-brand-orange/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <span className="bg-brand-orange/10 text-brand-orange text-[10px] uppercase font-black tracking-[0.2em] px-4 py-2 rounded-full">
            Categoria
          </span>

          <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform duration-300">
            🗂️
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-3">

          <p className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-400">
            ID #{categoria.id}
          </p>

          <h2 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-brand-orange transition-colors">
            {categoria.tipo}
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed min-h-[60px]">
            {categoria.descricao}
          </p>
        </div>
      </div>

      {/* BOTÕES */}
      <div className="relative z-10 grid grid-cols-2 gap-3 mt-8 pt-5 border-t border-slate-100">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-black py-3 rounded-2xl text-center text-sm transition-all duration-300 hover:scale-[1.02]"
        >
          ✏️ Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="bg-red-50 hover:bg-red-100 text-red-600 font-black py-3 rounded-2xl text-center text-sm transition-all duration-300 hover:scale-[1.02]"
        >
          🗑️ Excluir
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;