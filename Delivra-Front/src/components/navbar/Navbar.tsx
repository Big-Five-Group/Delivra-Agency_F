import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-[#f59a3a]/20 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
      {}
      <Link to="/home" className="text-2xl font-black tracking-tighter text-[#265c2e]">
        Delivra<span className="text-[#f59a3a]">.</span>
      </Link>
      
      {}
      <div className="flex items-center gap-8 font-semibold text-slate-600 text-sm tracking-wide">
        <Link to="/home" className="hover:text-[#265c2e] transition-colors duration-200">Início</Link>
        <Link to="/produtos" className="hover:text-[#265c2e] transition-colors duration-200">Produtos</Link>
        <Link to="/categorias" className="hover:text-[#265c2e] transition-colors duration-200">Categorias</Link>
        <Link to="/filtrarsaudavel" className="text-[#265c2e] font-bold hover:opacity-80 transition-opacity">Saudáveis</Link>
        <Link to="/perfil" className="hover:text-[#265c2e] transition-colors duration-200">Meu Perfil</Link>
      </div>

      {}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm font-bold text-slate-700 hover:text-[#265c2e] transition-colors">
          Entrar
        </Link>
        <Link 
          to="/cadastro" 
          className="bg-[#f59a3a] hover:bg-[#e0892b] text-white text-sm font-bold px-4 py-2 rounded-full transition-all shadow-sm"
        >
          Criar conta
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;