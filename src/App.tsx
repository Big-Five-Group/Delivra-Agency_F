import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ListarCategoria from './components/categoria/listarcategoria/ListarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormProduto from './components/produto/formproduto/FormProduto'
import DeletarProduto from './components/produto/deletarproduto/DeletarProduto'
import ListarProduto from './components/produto/listarproduto/ListarProduto'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Perfil from './pages/perfil/Perfil'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import FiltrarSaudavel from './components/especial/filtrarsaudavel/FiltrarSaudavel'

function App() {
  return (
    <>
        <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProduto />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/filtrarsaudavel" element={<FiltrarSaudavel />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
