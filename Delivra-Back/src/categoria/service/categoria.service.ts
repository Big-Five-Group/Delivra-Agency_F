// src/category/services/categoria.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) {}

    async findByTipo(tipo: string): Promise<Categoria | null> {
        return await this.categoriaRepository.findOne({
            where: { tipo }
        });
    }

    async findByDescricao(descricao: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            order: {
                descricao: 'ASC' 
            }
        });
    }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: { produtos: true } // Carrega os produtos relacionados
        });
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
            relations: { produtos: true }
        });

        if (!categoria) {
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
        }

        return categoria;
    }

    async create(categoria: Categoria): Promise<Categoria> {
        const buscaCategoria = await this.findByTipo(categoria.tipo);

        if (buscaCategoria) {
            throw new HttpException('Já existe uma categoria com este tipo!', HttpStatus.BAD_REQUEST);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        await this.findById(categoria.id);

        const buscaCategoria = await this.findByTipo(categoria.tipo);

        if (buscaCategoria && buscaCategoria.id !== categoria.id) {
            throw new HttpException('Já existe uma categoria com este tipo!', HttpStatus.BAD_REQUEST);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<void> {
        const categoria = await this.findById(id);

        try {
            // Tenta remover a categoria
            await this.categoriaRepository.remove(categoria);
        } catch (error) {
            // Se falhar (ex: produtos vinculados), lança erro amigável ao invés de 500
            throw new HttpException(
                'Não foi possível excluir a categoria. Verifique se existem produtos vinculados a ela.',
                HttpStatus.BAD_REQUEST
            );
        }
    }
}