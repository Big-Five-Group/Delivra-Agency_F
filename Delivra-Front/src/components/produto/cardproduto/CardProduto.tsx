import { Link } from "react-router-dom";

interface CardProdutoProps {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  foto?: string;
  categoria?: string;
  emoji?: string;
}

function CardProduto({
  id,
  nome,
  descricao,
  preco,
  foto,
  categoria,
  emoji = '🍔',
}: CardProdutoProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-orange/5 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group animate-card-entrance">

      <div>

        {/* CONTAINER DA IMAGEM */}
        <div
          className={`w-full h-40 rounded-xl mb-4 flex items-center justify-center text-5xl overflow-hidden border relative transition-all duration-300 ${
            emoji === '🥗'
              ? 'bg-brand-green/10 border-brand-green/10'
              : 'bg-brand-bg border-slate-100'
          }`}
        >
          {foto ? (
            <img
              src={foto}
              alt={nome}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <span className="group-hover:scale-110 transition-transform duration-500 select-none">
              {emoji}
            </span>
          )}

          {categoria && (
            <span className="absolute top-2 left-2 bg-brand-green text-white font-bold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider">
              {categoria}
            </span>
          )}
        </div>

        {/* INFORMAÇÕES */}
        <div className="space-y-1">
          <h3 className="font-black text-slate-800 text-base tracking-tight group-hover:text-brand-orange transition-colors line-clamp-1">
            {nome}
          </h3>

          <p className="text-slate-500 text-xs font-medium line-clamp-2 leading-relaxed">
            {descricao}
          </p>
        </div>
      </div>

      {/* PREÇO E BOTÕES */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">

        <span className="font-black text-brand-green text-lg">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(preco)}
        </span>

        <div className="flex gap-2">

          <Link
            to={`/editarproduto/${id}`}
            className="bg-slate-100 text-slate-700 text-[10px] font-black px-3 py-2 rounded-xl hover:bg-slate-200 transition-all"
          >
            Editar
          </Link>

          <Link
            to={`/deletarproduto/${id}`}
            className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-2 rounded-xl hover:bg-red-100 transition-all"
          >
            Excluir
          </Link>

        </div>
      </div>
    </div>
  );
}

export default CardProduto;