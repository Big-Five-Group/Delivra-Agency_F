// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Restaurantes from './pages/restaurantes/Restaurantes';
import Relatorios from './pages/relatorios/Relatorios';
import Cadastro from './pages/cadastro/Cadastro';
import Perfil from './pages/perfil/Perfil'; 
import FiltrarSaudavel from './components/especial/filtrarsaudavel/FiltrarSaudavel'; 
import ListarCategoria from './components/categoria/listarcategoria/ListarCategoria';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import ListarProduto from './components/produto/listarproduto/ListarProduto';
import FormProduto from './components/produto/formproduto/FormProduto';
import DeletarProduto from './components/produto/deletarproduto/DeletarProduto';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/restaurantes" element={<Restaurantes />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/filtrarsaudavel" element={<FiltrarSaudavel />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProduto />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;