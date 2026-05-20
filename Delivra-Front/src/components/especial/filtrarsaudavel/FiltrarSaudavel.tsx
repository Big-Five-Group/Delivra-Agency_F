import { useEffect, useState } from 'react'
import type Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service'
import CardProduto from '../../produto/cardproduto/CardProduto'

export default function FiltrarSaudavel() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  async function buscarProdutos() {
    await buscar('/produtos/saudaveis', setProdutos)
  }

  useEffect(() => {
    buscarProdutos()
  }, [])

  const produtosSaudaveis = produtos.filter(
    (produto) => produto.saudavel === true
  )

  return (
    <div>
      <h1>Produtos Saudáveis</h1>

      <div>
        {produtosSaudaveis.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </div>
  )
}