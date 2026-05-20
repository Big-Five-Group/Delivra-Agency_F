import { useEffect, useState } from 'react'
import type Categoria from '../../../models/Categoria'
import { buscar } from '../../../services/Service'
import CardCategoria from '../cardcategoria/CardCategoria'

function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias)
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <div>
      <h1>Categorias</h1>

      <div>
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  )
}

export default ListarCategoria;