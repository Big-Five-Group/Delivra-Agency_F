import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import FormCategoria from './FormCategoria';

import '@testing-library/jest-dom';

vi.mock('../../../services/Service', () => ({
  buscar: vi.fn(),
  cadastrar: vi.fn(),
  atualizar: vi.fn(),
}));

const mockAuthValue = {
  usuarioLogado: { 
    id: 1, 
    nome: 'Jean Pedro', 
    usuario: 'jean@delivra.com', 
    foto: '', 
    senha: '', 
    token: 'Bearer mock-token' as any 
  },
  logar: vi.fn(),
  deslogar: vi.fn(),
  carrinho: [],
  adicionarCarrinho: vi.fn(),
  removerCarrinho: vi.fn(),
  atualizarQuantidadeCarrinho: vi.fn(),
  limparCarrinho: vi.fn(),
};

describe('Componente FormCategoria', () => {
  it('deve renderizar os campos do formulário corretamente quando logado', () => {
    render(
      <AuthContext.Provider value={mockAuthValue}>
        <BrowserRouter>
          <FormCategoria />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    
    expect(screen.getByLabelText(/Nome da Categoria/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Breve Descrição/i)).toBeInTheDocument();
  });

  it('deve permitir preencher as informações no formulário', () => {
    render(
      <AuthContext.Provider value={mockAuthValue}>
        <BrowserRouter>
          <FormCategoria />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    
    const inputTipo = screen.getByPlaceholderText(/Ex: Pizzas Artesanais/i);
    fireEvent.change(inputTipo, { target: { value: 'Sobremesas Gourmet' } });
    
    expect(inputTipo).toHaveValue('Sobremesas Gourmet');
  });
});