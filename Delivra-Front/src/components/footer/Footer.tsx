function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#f59a3a]/10 py-8 px-6 text-center text-slate-500 text-xs font-medium">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-black text-sm tracking-tighter text-[#265c2e]">
          Delivra<span className="text-[#f59a3a]">.</span> Agency
        </div>
        <div>
          &copy; {anoAtual} Todos os direitos reservados. Feito com cuidado para o seu negócio.
        </div>
      </div>
    </footer>
  );
}

export default Footer;