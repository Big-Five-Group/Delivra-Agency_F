import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../Produtos/entities/produtos.entity';

@Entity('tb_categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 150 })
  tipo!: string;

  @IsNotEmpty()
  @Column({ length: 250 })
  descricao!: string;

  // Alteração: onDelete: 'CASCADE' permite que a exclusão ocorra sem erro 500
  @OneToMany(() => Produto, (produto) => produto.categoria, { 
    onDelete: 'CASCADE' 
  })
  produtos!: Produto[];
}