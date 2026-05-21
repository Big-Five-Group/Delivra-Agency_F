import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Perfil() {
  const {
    usuarioLogado,
    carrinho,
    atualizarQuantidadeCarrinho,
    removerCarrinho,
    limparCarrinho,
  } = useContext(AuthContext);

  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  if (!usuarioLogado) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
        <div className="bg-white rounded-[32px] shadow-xl border border-brand-orange/10 p-10 max-w-md text-center">
          <div className="text-7xl mb-6">🔒</div>

          <h2 className="text-3xl font-black text-slate-800 mb-3">
            Acesso Necessário
          </h2>

          <p className="text-slate-500 font-medium">
            Faça login para visualizar seu perfil e acessar o carrinho.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 overflow-hidden animate-reveal-up">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO */}
        <div className="relative bg-white rounded-[36px] shadow-xl border border-brand-orange/10 overflow-hidden">

          {/* EFEITOS */}
          <div className="absolute top-[-120px] right-[-80px] w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-80px] w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-14 flex flex-col xl:flex-row items-center justify-between gap-10">

            {/* USER INFO */}
            <div className="flex flex-col md:flex-row items-center gap-8">

              <div className="relative">
                <img
                  src={
                    usuarioLogado.foto ||
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300'
                  }
                  alt={usuarioLogado.nome}
                  className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl"
                />

                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-brand-green border-4 border-white"></div>
              </div>

              <div className="space-y-4 text-center md:text-left">

                <span className="bg-brand-orange/10 text-brand-orange font-black text-xs px-5 py-2 rounded-full uppercase tracking-[0.2em] inline-block">
                  Cliente Premium
                </span>

                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {usuarioLogado.nome}
                  </h1>

                  <p className="text-slate-500 text-lg font-medium mt-2">
                    {usuarioLogado.usuario}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">

                  <div className="bg-brand-bg px-5 py-3 rounded-2xl shadow-sm">
                    <p className="text-[10px] uppercase font-black text-slate-400">
                      Pedidos
                    </p>

                    <h3 className="text-2xl font-black text-brand-orange">
                      24
                    </h3>
                  </div>

                  <div className="bg-brand-bg px-5 py-3 rounded-2xl shadow-sm">
                    <p className="text-[10px] uppercase font-black text-slate-400">
                      Favoritos
                    </p>

                    <h3 className="text-2xl font-black text-brand-green">
                      12
                    </h3>
                  </div>

                  <div className="bg-brand-bg px-5 py-3 rounded-2xl shadow-sm">
                    <p className="text-[10px] uppercase font-black text-slate-400">
                      Nível
                    </p>

                    <h3 className="text-2xl font-black text-slate-800">
                      Gold
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative">

              <div className="w-72 h-72 rounded-[36px] bg-brand-bg border-4 border-white shadow-2xl flex items-center justify-center animate-float">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-56 h-56 border-8 border-brand-orange/10 rounded-full animate-ping"></div>

                  <div className="w-44 h-44 rounded-full bg-white shadow-inner flex items-center justify-center text-8xl">
                    🛒
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Cashback
                </p>

                <h3 className="text-xl font-black text-brand-green">
                  R$ 28
                </h3>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float [animation-delay:1000ms]">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Status
                </p>

                <h3 className="text-xl font-black text-brand-orange">
                  Ativo
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* CARRINHO */}
        <div className="bg-white rounded-[36px] shadow-xl border border-brand-orange/5 overflow-hidden">

          {/* HEADER */}
          <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">

            <div>
              <h2 className="text-4xl font-black text-slate-800">
                Seu Carrinho
              </h2>

              <p className="text-slate-500 font-medium mt-2">
                Gerencie os produtos adicionados antes de finalizar seu pedido.
              </p>
            </div>

            {carrinho.length > 0 && (
              <button
                onClick={limparCarrinho}
                className="bg-red-50 hover:bg-red-100 text-red-500 px-5 py-3 rounded-2xl font-black text-sm transition-all"
              >
                Limpar Carrinho
              </button>
            )}
          </div>

          {/* EMPTY */}
          {carrinho.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">

              <div className="text-8xl mb-6 opacity-70">
                🛍️
              </div>

              <h3 className="text-3xl font-black text-slate-800 mb-3">
                Seu carrinho está vazio
              </h3>

              <p className="text-slate-500 font-medium max-w-md">
                Explore restaurantes e adicione produtos para visualizar aqui.
              </p>
            </div>
          ) : (
            <div className="p-8">

              <div className="space-y-5">

                {carrinho.map((item) => (
                  <div
                    key={item.produto.id}
                    className="bg-slate-50 hover:bg-brand-bg rounded-[28px] p-6 transition-all duration-300 border border-transparent hover:border-brand-orange/10"
                  >

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                      {/* INFO */}
                      <div className="flex items-center gap-5">

                        <div className="w-20 h-20 rounded-[24px] bg-white shadow-inner flex items-center justify-center text-4xl">
                          🍔
                        </div>

                        <div>
                          <h3 className="text-2xl font-black text-slate-800">
                            {item.produto.nome}
                          </h3>

                          <p className="text-brand-green font-black mt-1">
                            R$ {Number(item.produto.preco).toFixed(2)}
                          </p>

                          <span className="text-xs uppercase font-bold text-slate-400 tracking-wide">
                            Produto no carrinho
                          </span>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center gap-5">

                        {/* QUANTIDADE */}
                        <div className="flex items-center bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

                          <button
                            onClick={() =>
                              atualizarQuantidadeCarrinho(
                                item.produto.id,
                                item.quantidade - 1
                              )
                            }
                            className="px-5 py-3 hover:bg-slate-100 font-black text-slate-700 transition-all"
                          >
                            -
                          </button>

                          <span className="px-6 py-3 font-black text-slate-800 text-lg">
                            {item.quantidade}
                          </span>

                          <button
                            onClick={() =>
                              atualizarQuantidadeCarrinho(
                                item.produto.id,
                                item.quantidade + 1
                              )
                            }
                            className="px-5 py-3 hover:bg-slate-100 font-black text-slate-700 transition-all"
                          >
                            +
                          </button>
                        </div>

                        {/* TOTAL ITEM */}
                        <div className="text-right min-w-[110px]">
                          <p className="text-xs uppercase font-black text-slate-400">
                            Subtotal
                          </p>

                          <h3 className="text-2xl font-black text-brand-orange">
                            R${' '}
                            {(
                              item.produto.preco * item.quantidade
                            ).toFixed(2)}
                          </h3>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removerCarrinho(item.produto.id)
                          }
                          className="text-red-500 hover:text-red-700 font-black transition-all"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-10 bg-brand-bg rounded-[32px] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">

                <div>
                  <p className="text-sm uppercase font-black text-slate-400 tracking-wide">
                    Valor Total
                  </p>

                  <h2 className="text-5xl font-black text-brand-green mt-2">
                    R$ {valorTotal.toFixed(2)}
                  </h2>
                </div>

                <button className="w-full lg:w-auto bg-brand-orange hover:brightness-110 text-white font-black text-lg px-12 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300">
                  Finalizar Pedido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;