import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Carrinho() {
  const { 
    carrinho, 
    atualizarQuantidadeCarrinho, 
    removerCarrinho, 
    limparCarrinho 
  } = useContext(AuthContext);

  const valorTotal = carrinho.reduce((total, item) => {
    return total + item.produto.preco * item.quantidade;
  }, 0);

  function finalizarPedido() {
    alert('Pedido simulado com sucesso! Integrando com a cozinha do Delivra Agency.');
    limparCarrinho();
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 animate-reveal-up">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {}
        <div className="border-b border-brand-orange/10 pb-5">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Seu Pedido</h1>
          <p className="text-slate-500 font-medium text-sm">Confira os itens selecionados e ajuste as quantidades.</p>
        </div>

        {}
        {carrinho.length === 0 ? (
          <div className="bg-white p-12 rounded-[28px] text-center border border-brand-orange/5 shadow-sm space-y-4">
            <p className="text-slate-500 font-medium">Seu carrinho de compras está vazio no momento.</p>
            <Link 
              to="/produtos" 
              className="inline-block bg-brand-orange text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-[1.01] transition-all text-sm"
            >
              Voltar para o Cardápio
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {}
            <div className="lg:col-span-2 space-y-4">
              {carrinho.map((item) => (
                <div 
                  key={item.produto.id} 
                  className="bg-white p-5 rounded-[20px] shadow-xs border border-brand-orange/5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    {/* Imagem ou fallback */}
                    <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-2xl shrink-0 overflow-hidden">
                      {(item.produto as any).foto ? (
                        <img src={(item.produto as any).foto} alt={item.produto.nome} className="w-full h-full object-cover" />
                      ) : (
                        '🍔'
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 tracking-tight">{item.produto.nome}</h4>
                      <p className="text-brand-green font-bold text-sm">R$ {item.produto.preco.toFixed(2)}</p>
                    </div>
                  </div>

                  {}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                      <button 
                        onClick={() => atualizarQuantidadeCarrinho(item.produto.id, item.quantidade - 1)}
                        className="px-3 py-1.5 font-bold hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 font-bold text-slate-800 text-sm">{item.quantidade}</span>
                      <button 
                        onClick={() => atualizarQuantidadeCarrinho(item.produto.id, item.quantidade + 1)}
                        className="px-3 py-1.5 font-bold hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removerCarrinho(item.produto.id)}
                      className="text-red-500 hover:text-red-700 p-2 font-medium text-xs transition-colors"
                      title="Remover item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {}
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-brand-orange/5 space-y-6">
              <h3 className="text-lg font-black text-slate-800 tracking-tight border-b border-slate-100 pb-3">Subtotal</h3>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium text-sm">Total acumulado:</span>
                <span className="text-2xl font-black text-brand-green">R$ {valorTotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={finalizarPedido}
                className="w-full bg-brand-orange text-white py-3.5 rounded-xl font-black shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
              >
                Confirmar e Finalizar Pedido
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Carrinho;