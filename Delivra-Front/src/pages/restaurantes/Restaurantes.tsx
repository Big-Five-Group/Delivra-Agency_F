function Restaurantes() {
  const parceiros = [
    {
      id: 1,
      nome: 'Burger Fast - Centro',
      categoria: 'Fast Food',
      status: 'Ativo',
      pedidos: 145,
      avaliacao: 4.8,
      tempo: '25min',
    },
    {
      id: 2,
      nome: 'Pizzaria Bella Napoli',
      categoria: 'Italiana',
      status: 'Ativo',
      pedidos: 89,
      avaliacao: 4.9,
      tempo: '35min',
    },
    {
      id: 3,
      nome: 'Sushi House',
      categoria: 'Japonesa',
      status: 'Inativo',
      pedidos: 0,
      avaliacao: 4.6,
      tempo: '40min',
    },
    {
      id: 4,
      nome: 'Green Salad',
      categoria: 'Saudável',
      status: 'Ativo',
      pedidos: 212,
      avaliacao: 5.0,
      tempo: '18min',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg py-10 px-4 animate-reveal-up overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO */}
        <div className="relative bg-white rounded-[36px] shadow-xl border border-brand-orange/10 overflow-hidden">

          {/* EFEITOS */}
          <div className="absolute top-[-100px] right-[-80px] w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-60px] w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-14 flex flex-col xl:flex-row items-center justify-between gap-10">

            {/* TEXTO */}
            <div className="max-w-3xl space-y-6">

              <span className="bg-brand-green/10 text-brand-green font-black text-xs px-5 py-2 rounded-full uppercase tracking-[0.2em] inline-block animate-pulse">
                Parceiros Delivra 
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  Restaurantes
                  <span className="block text-brand-orange drop-shadow-[0_0_20px_rgba(245,154,58,0.25)]">
                    Parceiros
                  </span>
                </h1>

                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Gerencie restaurantes vinculados à plataforma, acompanhe métricas
                  operacionais e visualize parceiros ativos em tempo real.
                </p>
              </div>

              {/* STATUS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Parceiros
                  </p>

                  <h3 className="text-2xl font-black text-brand-orange mt-1">
                    {parceiros.length}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Ativos
                  </p>

                  <h3 className="text-2xl font-black text-brand-green mt-1">
                    {parceiros.filter((p) => p.status === 'Ativo').length}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Pedidos
                  </p>

                  <h3 className="text-2xl font-black text-slate-800 mt-1">
                    {parceiros.reduce((acc, p) => acc + p.pedidos, 0)}
                  </h3>
                </div>

                <div className="bg-brand-bg rounded-2xl p-4 border border-white shadow-sm hover:scale-105 transition-all">
                  <p className="text-[11px] uppercase font-black text-slate-400">
                    Performance
                  </p>

                  <h3 className="text-2xl font-black text-brand-green mt-1">
                    98%
                  </h3>
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative shrink-0">

              <div className="w-72 h-72 rounded-[36px] bg-brand-bg border-4 border-white shadow-2xl flex items-center justify-center animate-float">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-56 h-56 border-8 border-brand-orange/10 rounded-full animate-ping"></div>

                  <div className="w-44 h-44 rounded-full bg-white shadow-inner flex items-center justify-center text-8xl">
                    🏪
                  </div>
                </div>
              </div>

              {/* FLOATING CARDS */}
              <div className="absolute -top-4 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Crescimento
                </p>

                <h3 className="text-xl font-black text-brand-green">
                  +26%
                </h3>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float [animation-delay:1000ms]">
                <p className="text-[10px] uppercase font-black text-slate-400">
                  Operação
                </p>

                <h3 className="text-xl font-black text-brand-orange">
                  Estável
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* GRID RESTAURANTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {parceiros.map((res, index) => (
            <div
              key={res.id}
              className={`bg-white rounded-[32px] p-6 border border-brand-orange/5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-card-entrance [animation-delay:${index * 100}ms] overflow-hidden relative`}
            >

              {/* BACKGROUND */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl"></div>

              {/* HEADER */}
              <div className="relative z-10 flex items-start justify-between mb-6">

                <div className="flex items-center gap-4">

                  <div className="w-20 h-20 rounded-[24px] bg-brand-bg border border-white shadow-inner flex items-center justify-center text-4xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                    🍔
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-black text-slate-800 text-xl leading-tight">
                      {res.nome}
                    </h2>

                    <span className="text-brand-orange font-black text-xs uppercase tracking-[0.15em]">
                      {res.categoria}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-black uppercase px-4 py-2 rounded-full ${
                    res.status === 'Ativo'
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'bg-red-100 text-red-500'
                  }`}
                >
                  ● {res.status}
                </span>
              </div>

              {/* INFO */}
              <div className="relative z-10 grid grid-cols-3 gap-3">

                <div className="bg-slate-50 rounded-2xl p-4 text-center hover:bg-brand-bg transition-all">
                  <p className="text-[10px] uppercase font-black text-slate-400 mb-2">
                    Pedidos
                  </p>

                  <h3 className="text-2xl font-black text-slate-800">
                    {res.pedidos}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 text-center hover:bg-brand-bg transition-all">
                  <p className="text-[10px] uppercase font-black text-slate-400 mb-2">
                    Avaliação
                  </p>

                  <h3 className="text-2xl font-black text-brand-orange">
                    {res.avaliacao}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 text-center hover:bg-brand-bg transition-all">
                  <p className="text-[10px] uppercase font-black text-slate-400 mb-2">
                    Tempo
                  </p>

                  <h3 className="text-2xl font-black text-brand-green">
                    {res.tempo}
                  </h3>
                </div>
              </div>

              {/* FOOTER */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">

                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400">
                    Performance
                  </p>

                  <h3 className="text-lg font-black text-brand-green">
                    Excelente
                  </h3>
                </div>

                <div className="text-5xl opacity-10 group-hover:opacity-20 transition-all">
                  🏪
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurantes;