import { useNavigate, useParams } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { atualizar, buscar, cadastrar } from '../../../services/Service'
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'

function FormCategoria() {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>(
    {} as Categoria
  )

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria)
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      if (id !== undefined) {
        await atualizar('/categorias', categoria)
        alert('Categoria atualizada com sucesso')

      } else {
        await cadastrar('/categorias', categoria)
        alert('Categoria cadastrada com sucesso')
      }

      navigate('/categorias')
    } catch (error) {
      alert('Erro ao salvar categoria')
    }
  }

  return (
    <div>
      <h1>{id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}</h1>

      <form onSubmit={gerarNovaCategoria}>
        <input
          type="text"
          placeholder="Descrição"
          name="descricao"
          value={categoria.descricao}
          onChange={atualizarEstado}
        />

        <button type="submit">
          {id === undefined ? 'Cadastrar' : 'Atualizar'}
        </button>
      </form>
    </div>
  )
}

export default FormCategoria;