import { IsNotEmpty, IsNumber, IsOptional, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity('tb_produtos')
export class Produto{
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 100 })
    nome!: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco!: number;

    @IsOptional()
    @Column({ default: false })
    saudavel!: boolean;

    @IsOptional()
    @Column({ nullable: true, length: 255 })
    imagemUrl?: string;

    @IsOptional()
    @Column({ default: true })
    disponivel?: boolean;

    // relacionamentos
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    @JoinColumn({ name: 'categoria_id' }) 
    categoria!: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produtos)
    @JoinColumn({ name: 'usuario_id' })  
    usuario!: Usuario;

    @Column({ name: 'categoria_id' })
    categoriaId!: number;

    @Column({ name: 'usuario_id' })
    usuarioId!: number;
}