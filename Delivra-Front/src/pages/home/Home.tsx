import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 transition-colors duration-300">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8 animate-reveal-up">

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-md border border-brand-orange/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">

          {/* EFEITOS */}
          <div className="absolute top-[-120px] right-[-100px] w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-100px] w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>

          {/* TEXTO */}
          <div className="max-w-xl space-y-6 z-10 w-full">

            <span className="bg-brand-green/10 text-brand-green font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider animate-pulse inline-block">
              Delivra Agency
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Tudo para facilitar o seu{' '}
              <span className="text-brand-orange drop-shadow-[0_0_10px_rgba(245,154,58,0.2)]">
                Delivery
              </span>.
            </h1>

            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Gerencie produtos, categorias e restaurantes parceiros em uma
              plataforma moderna, intuitiva e preparada para acompanhar o ritmo
              do seu negócio.
            </p>

            {/* FRASE */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-green/10 border border-brand-orange/10 rounded-[24px] p-6 shadow-sm backdrop-blur-sm">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl shrink-0">
                  🚀
                </div>

                <div className="space-y-2">

                  <p className="text-slate-800 text-lg font-black leading-snug">
                    “Grandes operações começam com processos simples e bem organizados.”
                  </p>

                  <span className="text-sm text-slate-500 font-medium">
                    A Delivra conecta gestão, agilidade e experiência em um único ecossistema.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative z-10">

            <div className="bg-brand-bg w-64 h-64 md:w-80 md:h-80 rounded-[32px] flex items-center justify-center text-8xl shadow-2xl border-4 border-white animate-float transition-all duration-500 hover:scale-105 shrink-0">

              <div className="relative flex items-center justify-center">

                <div className="absolute w-52 h-52 border-8 border-brand-orange/10 rounded-full animate-ping"></div>

                <div className="w-40 h-40 rounded-full bg-white shadow-inner flex items-center justify-center">
                  🍔
                </div>
              </div>
            </div>

            {/* FLOATING CARDS */}
            <div className="absolute -top-4 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg border border-brand-orange/10 animate-float">
              <p className="text-[10px] uppercase font-black text-slate-400">
                Pedidos Hoje
              </p>

              <h3 className="text-xl font-black text-brand-green">
                +128
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

      {/* ECOSSISTEMAS */}
      <div className="max-w-6xl mx-auto px-4 pb-16">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-orange rounded-full"></span>
            Navegue por Ecossistemas
          </h2>

          <span className="text-sm text-slate-400 font-bold uppercase tracking-wide">
            Delivra Dashboard
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {/* PRODUTOS */}
          <Link
            to="/produtos"
            className="bg-white p-6 rounded-[24px] text-center shadow-sm border border-brand-orange/5 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group animate-card-entrance [animation-delay:100ms]"
          >

            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-bg flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
              📦
            </div>

            <span className="font-black text-slate-800 text-sm block group-hover:text-brand-orange transition-colors">
              Produtos
            </span>
          </Link>

          {/* CATEGORIAS */}
          <Link
            to="/categorias"
            className="bg-white p-6 rounded-[24px] text-center shadow-sm border border-brand-orange/5 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group animate-card-entrance [animation-delay:200ms]"
          >

            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-bg flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
              🗂️
            </div>

            <span className="font-black text-slate-800 text-sm block group-hover:text-brand-orange transition-colors">
              Categorias
            </span>
          </Link>

          {/* RESTAURANTES */}
          <Link
            to="/restaurantes"
            className="bg-white p-6 rounded-[24px] text-center shadow-sm border border-brand-orange/5 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group animate-card-entrance [animation-delay:300ms]"
          >

            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-bg flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
              🏪
            </div>

            <span className="font-black text-slate-800 text-sm block group-hover:text-brand-orange transition-colors">
              Restaurantes
            </span>
          </Link>

          {/* RELATÓRIOS */}
          <Link
            to="/relatorios"
            className="bg-white p-6 rounded-[24px] text-center shadow-sm border border-brand-orange/5 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group animate-card-entrance [animation-delay:400ms]"
          >

            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-bg flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
              📊
            </div>

            <span className="font-black text-slate-800 text-sm block group-hover:text-brand-orange transition-colors">
              Relatórios
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;