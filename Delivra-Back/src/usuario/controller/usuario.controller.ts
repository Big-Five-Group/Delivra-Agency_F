import { Usuario } from '../entities/usuario.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from '../service/usuario.service';

@Controller("/usuarios")
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Usuario>{
        return this.usuarioService.findById(id);
    }
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    async findByName(@Param('nome') nome: string): Promise<Usuario[]> {
        return await this.usuarioService.findByName(nome);
    }

    @Get('/usuario/:usuario')
    @HttpCode(HttpStatus.OK)
    async findByUsuario(@Param('usuario') usuario: string): Promise<Usuario[]> {
        return await this.usuarioService.findByUsuario(usuario);
    }

    @Get('/email/:email')
    @HttpCode(HttpStatus.OK)
    async findByEmail(@Param('email') email: string): Promise<Usuario | null> {
        return await this.usuarioService.findByEmail(email);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.update(usuario);
    }

    @Put('/senha/:id')
    @HttpCode(HttpStatus.OK)
    async updateSenha(@Param('id') id: number, @Body('senha') senha: string): Promise<Usuario> {
        return await this.usuarioService.updateSenha(id, senha);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number): Promise<void> {
        await this.usuarioService.delete(id);
    }
}