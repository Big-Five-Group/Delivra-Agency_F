import axios from 'axios'

export const api = axios.create({
   baseURL: 'http://localhost:3001',
})

export async function buscar(url: string, setDados: Function) {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

export async function cadastrar(url: string, dados: object) {
  return await api.post(url, dados)
}

export async function atualizar(url: string, dados: object) {
  return await api.put(url, dados)
}

export async function deletar(url: string) {
  return await api.delete(url)
}