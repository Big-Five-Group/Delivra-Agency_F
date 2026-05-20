import type Produto from "./Produto";

export default interface Categoria {
    id: number;
    tipo: string;
    descricao: string;
    produtos?: Produto[];
}