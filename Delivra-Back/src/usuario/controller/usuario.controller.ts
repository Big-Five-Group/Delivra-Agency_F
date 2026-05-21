import { Usuario } from '../entities/usuario.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, HttpException } from "@nestjs/common";
import { UsuarioService } from '../service/usuario.service';

@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService){}

    @Get("/all")
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
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

    @Post("/cadastrar")
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }

    @Post("/logar")
    @HttpCode(HttpStatus.OK)
    async login(@Body() usuarioLogin: any): Promise<any> {
        const usuariosEncontrados = await this.usuarioService.findByUsuario(usuarioLogin.usuario);
        const usuarioValido = usuariosEncontrados.find(u => u.usuario === usuarioLogin.usuario);

        if (!usuarioValido || usuarioValido.senha !== usuarioLogin.senha) {
            throw new HttpException('Usuário ou senha inválidos!', HttpStatus.UNAUTHORIZED);
        }

        // Retorna o objeto do usuário acoplado com um token fictício para o Front aceitar
        return {
            id: usuarioValido.id,
            nome: usuarioValido.nome,
            usuario: usuarioValido.usuario,
            foto: usuarioValido.foto,
            token: "Bearer " + Buffer.from(usuarioValido.usuario + ":" + usuarioValido.senha).toString('base64')
        };
    }

    @Put("/atualizar")
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.update(usuario);
    }

    @Put('/senha/:id')
    @HttpCode(HttpStatus.OK)
    async updateSenha(@Param('id') id: number, @Body('senha') senha: string): Promise<Usuario> {
        return await this.usuarioService.updateSenha(id, senha);
    }

    @Delete('deletar/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number): Promise<void> {
        await this.usuarioService.delete(id);
    }
}