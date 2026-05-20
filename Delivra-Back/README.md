<h1 align="center">🌴 Delivra Agency — API de Gestão de Delivery e E-commerce</h1>

<p align="center">
  A <strong>Delivra Agency</strong> é uma plataforma de back-end completa para sistemas de delivery, permitindo o gerenciamento dinâmico de produtos, categorias e usuários com alta performance.
</p>

<p align="center">
  Este projeto foi desenvolvido por: <br>
  <strong>Eduarda Aleixo, Gabriel Pereira, Jean Pedro, Júlia Santos, Julio Aguiar, Lais Sousa e Wadssa Wacemberg.</strong>
</p>

## 🎯 Objetivo

O objetivo deste projeto é fornecer uma infraestrutura escalável para agências de delivery, facilitando o controle de estoque, segmentação por categorias e uma gestão de usuários segura e eficiente.

## 🚀 Sobre o Projeto

A API Delivra Agency foi estruturada para suportar as complexidades de um marketplace. Com um sistema de relacionamentos robusto, ela interliga produtos a categorias e usuários, permitindo uma navegação fluida e filtragens precisas para o consumidor final.

- 🍔 **Gestão de Produtos:** Controle total de itens, preços e disponibilidade.
- 📂 **Categorização Inteligente:** Organização de produtos por tipo e descrição.
- 👤 **Área do Usuário:** Cadastro de perfis com segurança de dados.
- 🔗 **Relacionamentos Complexos:** Uso de `ManyToOne` e `OneToMany` para vincular dados de forma relacional.

## 🛠️ Tecnologias Utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=nestjs,ts,mysql,nodejs,git" height="40px" />
</p>

- **NestJS:** Base da aplicação para uma arquitetura limpa e modular.
- **TypeORM:** Gerenciamento das tabelas e relações entre entidades.
- **MySQL:** Banco de dados de alto desempenho para armazenamento de dados.
- **Class-Validator:** Assegura que apenas dados válidos entrem no sistema.
- **TypeScript:** Facilita a manutenção através da tipagem estática.

## ⚙️ Funcionalidades

- **Controle de Disponibilidade:** Filtros específicos para listar apenas produtos disponíveis e saudáveis.
- **Segurança de Usuário:** Sistema de atualização de senha e validação de e-mails únicos.
- **Busca Global:** Endpoints dedicados para busca por nome, tipo, e-mail ou categoria.
- **Sincronização em Tempo Real:** Banco de dados sincronizado automaticamente com as entidades do código.

## 💡 Diferenciais Técnicos

- **Validação Cruzada:** O sistema verifica se uma categoria ou usuário existe antes de permitir o cadastro de um novo produto.
- **Ordenação Automática:** Listagens de produtos e categorias retornam ordenadas alfabeticamente por padrão.
- **Relacionamentos Eager/Lazy:** Carregamento inteligente de dados relacionados para evitar sobrecarga no banco de dados.
- **Tratamento de Conflitos:** Lógica de negócio que impede a duplicação de tipos de categoria ou nomes de produtos.

## 📂 Estrutura de Pastas

```text
├── src/
│   ├── categoria/
│   │   ├── controller/
│   │   ├── entities/
│   │   └── service/
│   ├── produtos/
│   │   ├── controller/
│   │   ├── entities/
│   │   └── service/
│   ├── usuario/
│   │   ├── controller/
│   │   ├── entities/
│   │   └── service/
│   ├── app.module.ts
│   └── main.ts
