import { createContext, useState, type ReactNode } from "react";
import type Usuario from "../models/Usuario";
import type Produto from "../models/Produto";

interface CartItem {
  produto: Produto;
  quantidade: number;
}

interface AuthContextType {
  usuarioLogado: Usuario | null;
  logar: (usuario: Usuario) => void;
  deslogar: () => void;
  carrinho: CartItem[];
  adicionarCarrinho: (produto: Produto) => void;
  removerCarrinho: (produtoId: number) => void;
  atualizarQuantidadeCarrinho: (produtoId: number, quantidade: number) => void;
  limparCarrinho: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  function logar(usuario: Usuario) {
    setUsuarioLogado(usuario);
  }

  function deslogar() {
    setUsuarioLogado(null);
    setCarrinho([]);
  }

  function adicionarCarrinho(produto: Produto) {
    setCarrinho((itemsAtuais) => {
      const itemExiste = itemsAtuais.find((item) => item.produto.id === produto.id);
      if (itemExiste) {
        return itemsAtuais.map((item) =>
          item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...itemsAtuais, { produto, quantidade: 1 }];
    });
  }

  function removerCarrinho(produtoId: number) {
    setCarrinho((itemsAtuais) => itemsAtuais.filter((item) => item.produto.id !== produtoId));
  }

  function atualizarQuantidadeCarrinho(produtoId: number, quantidade: number) {
    if (quantidade <= 0) {
      removerCarrinho(produtoId);
      return;
    }
    setCarrinho((itemsAtuais) =>
      itemsAtuais.map((item) =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <AuthContext.Provider
      value={{
        usuarioLogado,
        logar,
        deslogar,
        carrinho,
        adicionarCarrinho,
        removerCarrinho,
        atualizarQuantidadeCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}