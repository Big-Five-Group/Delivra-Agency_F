import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Delete } from "@nestjs/common";
import { ProdutoService } from "../service/produtos.service";
import { Produto } from "../entities/produtos.entity";


@Controller("/produtos")
export class ProdutoController {

    constructor(private readonly produtoService: ProdutoService) { }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get('/saudaveis')
    @HttpCode(HttpStatus.OK)
    findSaudaveis(): Promise<Produto[]> {
        return this.produtoService.findSaudaveis();
    }


    @Get('/disponiveis')
    @HttpCode(HttpStatus.OK)
    findDisponiveis(): Promise<Produto[]> {
        return this.produtoService.findDisponiveis();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }

    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.update(produto);
    }

    @Delete('/deletar/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.produtoService.delete(id);
    }
}