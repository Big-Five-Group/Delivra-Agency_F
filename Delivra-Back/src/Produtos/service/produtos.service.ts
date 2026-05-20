import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Produto } from '../entities/produtos.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,

    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findByNome(nome: string): Promise<Produto | null> {
    return await this.produtoRepository.findOne({
      where: { nome },
      relations: ['categoria', 'usuario'],
    });
  }

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: ['categoria', 'usuario'],
      order: { nome: 'ASC' },
    });
  }

  async findByCategoria(categoriaId: number): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: { categoria: { id: categoriaId } },
      relations: ['categoria', 'usuario'],
      order: { nome: 'ASC' },
    });
  }

  async findByUsuario(usuarioId: number): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: { usuario: { id: usuarioId } },
      relations: ['categoria', 'usuario'],
      order: { nome: 'ASC' },
    });
  }

  async findSaudaveis(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: { saudavel: true, disponivel: true },
      relations: ['categoria', 'usuario'],
      order: { nome: 'ASC' },
    });
  }

  async findDisponiveis(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: { disponivel: true },
      order: { nome: 'ASC' },
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: ['categoria', 'usuario'], // Carrega os relacionamentos
    });

    if (!produto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    return produto;
  }

  async create(produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: produto.categoriaId },
    });

    if (!categoria) {
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const usuario = await this.usuarioRepository.findOne({
      where: { id: produto.usuarioId },
    });

    if (!usuario) {
      throw new HttpException(
        'Usuário não encontrado!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const buscaProduto = await this.findByNome(produto.nome);

    if (buscaProduto) {
      throw new HttpException('Produto já cadastrado!', HttpStatus.BAD_REQUEST);
    }

    produto.categoria = categoria;
    produto.usuario = usuario;

    produto.saudavel = produto.saudavel ?? false;
    produto.disponivel = produto.disponivel ?? true;

    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.findById(produto.id);

    if (produto.categoriaId) {
      const categoria = await this.categoriaRepository.findOne({
        where: { id: produto.categoriaId },
      });

      if (!categoria) {
        throw new HttpException(
          'Categoria não encontrada!',
          HttpStatus.BAD_REQUEST,
        );
      }
      produto.categoria = categoria;
    }

    if (produto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { id: produto.usuarioId },
      });

      if (!usuario) {
        throw new HttpException(
          'Usuário não encontrado!',
          HttpStatus.BAD_REQUEST,
        );
      }
      produto.usuario = usuario;
    }

    const buscaProduto = await this.produtoRepository.findOne({
      where: { nome: produto.nome },
    });

    if (buscaProduto && buscaProduto.id !== produto.id) {
      throw new HttpException('Produto já cadastrado!', HttpStatus.BAD_REQUEST);
    }

    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<void> {
    const produto = await this.findById(id);

    await this.produtoRepository.remove(produto);
  }

    
}
