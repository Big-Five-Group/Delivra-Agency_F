import { Module } from '@nestjs/common';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Categoria } from '../categoria/entities/categoria.entity';
import { Produto } from './entities/produtos.entity';
import { ProdutoController } from './controller/produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './service/produtos.service';



@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria, Usuario])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService],
})
export class ProdutoModule {}
