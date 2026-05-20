import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
import { DeleteResult } from "typeorm";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ){}

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario>{
        const usuario = await this.usuarioRepository.findOne({
            where:{
                id
            }
        })
        if(!usuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }

    async findByName(nome: string): Promise<Usuario[]>{
        return await this.usuarioRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        })   
    }
    async findByUsuario(usuario: string): Promise<Usuario[]>{
    return await this.usuarioRepository.find({
        where:{
            usuario: ILike(`%${usuario}%`)
        }
    })
}
    async findByEmail(email: string): Promise<Usuario | null>{
    return await this.usuarioRepository.findOne({
        where:{
            email: email
        }
    })
}
    async create(usuario: Usuario): Promise<Usuario>{
    return await this.usuarioRepository.save(usuario);
}

    async update(usuario: Usuario): Promise<Usuario>{
    return await this.usuarioRepository.save(usuario);
}

    async updateSenha(id: number, senha: string): Promise<Usuario>{
    const usuario = await this.usuarioRepository.findOne({
        where: { id: id }
    });

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    usuario.senha = senha;
    return await this.usuarioRepository.save(usuario);
}

    async delete(id: number): Promise<DeleteResult>{
    return await this.usuarioRepository.delete(id);
}
}