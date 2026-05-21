import { useState } from 'react';
import CardProduto from '../../produto/cardproduto/CardProduto';

function FiltrarSaudavel() {
  const [apenasSaudaveis, setApenasSaudaveis] = useState(false);

  const produtosMock = [
    {
      id: 1,
      nome: 'Salada Caesar Premium',
      descricao:
        'Alface americana, croutons, parmesão e molho caesar especial.',
      preco: 28.9,
      categoria: 'Saudável',
      saudavel: true,
    },
    {
      id: 2,
      nome: 'X-Burger Duplo',
      descricao:
        'Dois hambúrgueres artesanais com queijo prato e molho especial.',
      preco: 34.9,
      categoria: 'Fast Food',
      saudavel: false,
    },
    {
      id: 3,
      nome: 'Suco Natural de Laranja',
      descricao:
        'Suco natural sem açúcar e sem conservantes.',
      preco: 12.0,
      categoria: 'Saudável',
      saudavel: true,
    },
    {
      id: 4,
      nome: 'Batata Frita Grande',
      descricao:
        'Batatas crocantes preparadas na hora.',
      preco: 18.0,
      categoria: 'Fast Food',
      saudavel: false,
    },
    {
      id: 5,
      nome: 'Wrap Integral Fit',
      descricao:
        'Frango grelhado, alface, tomate e molho leve.',
      preco: 24.9,
      categoria: 'Saudável',
      saudavel: true,
    },
    {
      id: 6,
      nome: 'Pizza Pepperoni',
      descricao:
        'Pizza artesanal com pepperoni e muito queijo.',
      preco: 42.9,
      categoria: 'Fast Food',
      saudavel: false,
    },
    {
      id: 7,
      nome: 'Bowl Tropical',
      descricao:
        'Mix de frutas, granola premium e mel orgânico.',
      preco: 21.9,
      categoria: 'Saudável',
      saudavel: true,
    },
    {
      id: 8,
      nome: 'Combo Crispy Chicken',
      descricao:
        'Hambúrguer crocante acompanhado de fritas.',
      preco: 39.9,
      categoria: 'Fast Food',
      saudavel: false,
    },
  ];

  const produtosExibidos = apenasSaudaveis
    ? produtosMock.filter((p) => p.saudavel)
    : produtosMock;

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 overflow-hidden animate-reveal-up">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO */}
        <div className="relative bg-white rounded-[36px] shadow-xl border border-brand-orange/10 overflow-hidden">

          <div className="absolute top-[-120px] right-[-80px] w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-80px] w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-14 flex flex-col xl:flex-row items-center justify-between gap-10">

            {/* TEXTO */}
            <div className="max-w-3xl space-y-6">

              <span className="bg-brand-green/10 text-brand-green font-black text-xs px-5 py-2 rounded-full uppercase tracking-[0.2em] inline-block animate-pulse">
                Delivra Health
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  Linha
                  <span className="block text-brand-green">
                    Saudável
                  </span>
                </h1>

                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Produtos leves, naturais e equilibrados para quem busca
                  praticidade sem abrir mão da qualidade.
                </p>
              </div>

              {/* BOTÃO */}
              <button
                onClick={() => setApenasSaudaveis(!apenasSaudaveis)}
                className={`mt-4 px-8 py-5 rounded-[24px] font-black shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
                  apenasSaudaveis
                    ? 'bg-brand-green text-white border-brand-green'
                    : 'bg-white text-brand-green border-brand-green/20 hover:border-brand-green'
                }`}
              >
                {apenasSaudaveis
                  ? '🥗 Exibindo Apenas Produtos Saudáveis'
                  : '🍔 Mostrar Todos os Produtos'}
              </button>
            </div>

            {/* VISUAL */}
            <div className="relative shrink-0">

              <div className="w-72 h-72 rounded-[36px] bg-brand-bg border-4 border-white shadow-2xl flex items-center justify-center animate-float">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-56 h-56 border-8 border-brand-green/10 rounded-full animate-ping"></div>

                  <div className="w-44 h-44 rounded-full bg-white shadow-inner flex items-center justify-center text-8xl">
                    {apenasSaudaveis ? '🥗' : '🍔'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-black text-slate-800">
              Produtos Disponíveis
            </h2>

            <p className="text-slate-500 font-medium mt-2">
              Explore o catálogo completo da Delivra.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-brand-orange/5">

            <span className="text-3xl">
              {apenasSaudaveis ? '🥗' : '🍔'}
            </span>

            <div>
              <p className="text-[10px] uppercase font-black text-slate-400">
                Exibindo
              </p>

              <h3 className="text-sm font-black text-slate-800">
                {produtosExibidos.length} produtos
              </h3>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {produtosExibidos.map((produto, index) => (
            <div
              key={produto.id}
              className={`animate-card-entrance [animation-delay:${index * 100}ms]`}
            >
              <CardProduto
                id={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                categoria={produto.categoria}
                emoji={produto.saudavel ? '🥗' : '🍔'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiltrarSaudavel;