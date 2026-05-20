import { IsEmail, IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produtos/entities/produtos.entity';

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

  @IsEmail()
  @Column({ unique: true, length: 150 })
  email!: string;

  @IsNotEmpty()
  @Column({ nullable: true })
  foto!: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produtos!: Produto[];
}
