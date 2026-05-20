import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  saudavel: boolean;
  imagemUrl?: string;
  disponivel: boolean;

  // relacionamentos
  usuario: Usuario;
  categoria: Categoria;
  usuarioId: number;
  categoriaId: number;
}