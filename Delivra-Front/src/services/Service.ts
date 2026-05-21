// src/services/Service.ts
import axios from "axios";

export const api = axios.create({
  // Trocado temporariamente para testar o backend rodando localmente
  // baseURL: "https://delivra-api-production.up.railway.app" 
  baseURL: "http://localhost:3002"
});

// Autenticação e Criação de Conta (Rotas Públicas)
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// Métodos do CRUD Protegidos (Exigem o Token de Autenticação passado no Header)
export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};