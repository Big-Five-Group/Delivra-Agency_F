import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'

function DeletarProduto() {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [produto, setProduto] = useState<Produto>({} as Produto)

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto)
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id)
    }
  }, [id])

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`)

      alert('Produto apagado com sucesso')
    } catch (error) {
      alert('Erro ao apagar produto')
    }

    navigate('/produtos')
  }

  return (
    <div>
      <h1>Deletar Produto</h1>

      <p>Você deseja deletar o produto:</p>
      <h2>{produto.nome}</h2>

      <div>
        <button onClick={deletarProduto}>
          Sim
        </button>
        <button onClick={() => navigate('/produtos')}>
          Não
        </button>
      </div>
    </div>
  )
}


export default DeletarProduto;