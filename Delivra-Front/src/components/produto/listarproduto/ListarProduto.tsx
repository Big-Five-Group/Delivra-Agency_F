import { useEffect, useState } from 'react'
import type Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service'
import CardProduto from '../cardproduto/CardProduto'

function ListarProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  async function buscarProdutos() {
    await buscar('/produtos', setProdutos)
  }

  useEffect(() => {
    buscarProdutos()
  }, [produtos.length])

  return (
    <div>
      <h1>Produtos</h1>

      <div>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  )
}

export default ListarProduto;