import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'

function DeletarCategoria() {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>(
    {} as Categoria
  )

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria)
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`)
      alert('Categoria apagada com sucesso')

    } catch (error) {
      alert('Erro ao apagar categoria')
    }
    navigate('/categorias')
  }

  return (
    <div>
      <h1>Deletar Categoria</h1>

      <p>Você deseja deletar a categoria:</p>
      <h2>{categoria.descricao}</h2>

      <div>
        <button onClick={deletarCategoria}>Sim</button>

        <button onClick={() => navigate('/categorias')}>
          Não
        </button>
      </div>
    </div>
  )
}

export default DeletarCategoria;