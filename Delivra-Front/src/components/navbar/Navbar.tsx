import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </div>
  )
}
export default Navbar;