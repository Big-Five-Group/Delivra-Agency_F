import { useState, type ChangeEvent } from 'react'
import type Produto from '../../../models/Produto'

function FormProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <h1>Cadastro de Produtos</h1>

      <form>
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          value={produto.nome}
          onChange={atualizarEstado}
        />

        <input
          type="number"
          placeholder="Preço"
          name="preco"
          value={produto.preco}
          onChange={atualizarEstado}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default FormProduto;