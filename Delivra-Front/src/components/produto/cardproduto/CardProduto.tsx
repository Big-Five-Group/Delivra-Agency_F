import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div>
      <header>
        <h2>Produto</h2>
      </header>

      <p>{produto.nome}</p>
      <p>R$ {produto.preco}</p>

      <div>
        <Link to={`/formproduto/${produto.id}`}>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto;