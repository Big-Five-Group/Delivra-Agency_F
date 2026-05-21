import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../Produtos/entities/produtos.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 100 })
  nome!: string;

  @IsNotEmpty()
  @Column({ unique: true, length: 100 })
  usuario!: string;

  @IsNotEmpty()
  @Column({ length: 100 })
  senha!: string;

  // Mudança: nullable permite que o banco aceite o cadastro sem esse campo por enquanto
  @IsOptional()
  @IsEmail()
  @Column({ unique: true, length: 150, nullable: true })
  email?: string;

  @Column({ nullable: true })
  foto!: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produtos!: Produto[];
}