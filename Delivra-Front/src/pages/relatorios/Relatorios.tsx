import { useState } from 'react';

function Relatorios() {
  const [pedidos] = useState([
    { id: 101, cliente: 'Carlos', valor: 45.9, status: 'Entregue' },
    { id: 102, cliente: 'Ana', valor: 28.9, status: 'Preparando' },
    { id: 103, cliente: 'Bruno', valor: 34.9, status: 'Entregue' },
    { id: 104, cliente: 'Mariana', valor: 12.0, status: 'Saiu para entrega' },
    { id: 105, cliente: 'Roberto', valor: 52.9, status: 'Entregue' },
  ]);

  const total = pedidos.reduce((acc, p) => acc + p.valor, 0);
  const ticket = total / pedidos.length;

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 animate-reveal-up overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">

        {}
        <div className="relative bg-white rounded-[36px] border border-brand-orange/10 shadow-xl overflow-hidden">

          {}
          <div className="absolute top-[-80px] right-[-60px] w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-60px] w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-14 flex flex-col xl:flex-row items-center justify-between gap-10">

            {}
            <div className="max-w-3xl space-y-6">

              <span className="bg-brand-orange/10 text-brand-orange font-black text-xs px-5 py-2 rounded-full uppercase tracking-[0.2em] inline-block animate-pulse">
                Centro de Análise
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  Painel de
                  <span className="block text-brand-orange drop-shadow-[0_0_20px_rgba(245,154,58,0.25)]">
                    Relatórios
                  </span>
                </h1>

                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Visualize métricas operacionais, acompanhe desempenho financeiro
                  e monitore pedidos em uma experiência moderna e dinâmica.
                </p>
              </div>

              {}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Receita
                  </p>

                  <h3 className="text-2xl font-black text-brand-green mt-1">
                    R$ {total.toFixed(2)}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Pedidos
                  </p>

                  <h3 className="text-2xl font-black text-brand-orange mt-1">
                    {pedidos.length}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Ticket Médio
                  </p>

                  <h3 className="text-2xl font-black text-slate-800 mt-1">
                    R$ {ticket.toFixed(2)}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Conversão
                  </p>

                  <h3 className="text-2xl font-black text-brand-green mt-1">
                    92%
                  </h3>
                </div>
              </div>
            </div>

            {}
            <div className="relative shrink-0">

              <div className="w-72 h-72 rounded-[36px] bg-brand-bg border-4 border-white shadow-2xl flex items-center justify-center animate-float">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-56 h-56 border-8 border-brand-orange/10 rounded-full animate-ping"></div>

                  <div className="w-44 h-44 rounded-full bg-white shadow-inner flex items-center justify-center text-8xl">
                    📊
                  </div>
                </div>
              </div>

              {}
              <div className="absolute -top-4 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Crescimento
                </p>

                <h3 className="text-xl font-black text-brand-green">
                  +18%
                </h3>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float [animation-delay:1000ms]">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Performance
                </p>

                <h3 className="text-xl font-black text-brand-orange">
                  Excelente
                </h3>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {}
          <div className="lg:col-span-2 bg-white rounded-[32px] shadow-md border border-brand-orange/5 overflow-hidden">

            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-800">
                  Fluxo de Pedidos
                </h2>

                <p className="text-slate-500 font-medium">
                  Desempenho operacional da plataforma
                </p>
              </div>

              <div className="text-5xl">
                
              </div>
            </div>

            {}
            <div className="p-8">

              <div className="flex items-end gap-4 h-72">

                {[45, 70, 55, 90, 60, 120, 95].map((altura, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-full rounded-t-[24px] bg-gradient-to-t from-brand-orange to-brand-green shadow-lg hover:scale-105 transition-all duration-300"
                      style={{ height: `${altura * 2}px` }}
                    ></div>

                    <span className="text-xs font-black text-slate-400 uppercase">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {}
          <div className="space-y-6">

            <div className="bg-white rounded-[32px] p-8 shadow-md border border-brand-orange/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-slate-800">
                  Status
                </h2>

                <span className="text-4xl">
                  
                </span>
              </div>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-500">
                      Entregues
                    </span>

                    <span className="text-sm font-black text-brand-green">
                      85%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-brand-green rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-500">
                      Preparando
                    </span>

                    <span className="text-sm font-black text-brand-orange">
                      60%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-brand-orange rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-500">
                      Cancelados
                    </span>

                    <span className="text-sm font-black text-red-500">
                      8%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[8%] bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-orange-500 rounded-[32px] p-8 text-white shadow-xl">
              <p className="uppercase text-xs font-black tracking-[0.2em] opacity-70">
                Destaque da Semana
              </p>

              <h2 className="text-4xl font-black mt-3 leading-none">
                +42%
              </h2>

              <p className="mt-4 text-white/80 font-medium">
                Crescimento no volume de pedidos comparado à semana passada.
              </p>

              <div className="mt-6 text-6xl opacity-30">
                
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="bg-white rounded-[32px] shadow-md border border-brand-orange/5 overflow-hidden">

          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-800">
                Últimos Pedidos
              </h2>

              <p className="text-slate-500 font-medium">
                Atualizações recentes da operação
              </p>
            </div>

            <div className="text-5xl">
              📦
            </div>
          </div>

          <div className="divide-y divide-slate-100">

            {pedidos.map((pedido) => (
              <div
                key={pedido.id}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-all duration-300"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center text-2xl">
                    🛵
                  </div>

                  <div>
                    <h3 className="font-black text-slate-800 text-lg">
                      Pedido #{pedido.id}
                    </h3>

                    <p className="text-slate-500 font-medium">
                      Cliente: {pedido.cliente}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">

                  <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-xs font-black uppercase">
                    {pedido.status}
                  </span>

                  <div className="text-right">
                    <p className="text-brand-green text-2xl font-black">
                      R$ {pedido.valor.toFixed(2)}
                    </p>

                    <span className="text-xs text-slate-400 uppercase font-bold">
                      Confirmado
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Relatorios;