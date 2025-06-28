<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença MIT" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir" alt="Siga no Twitter"></a>
</p>

---

# TodoList API

API RESTful construída com **NestJS**, **Prisma ORM** e documentação automática via **Swagger**, para gerenciamento de tarefas e usuários.

---

## 📝 Descrição

Repositório inicial para um projeto backend usando NestJS, com foco em escalabilidade, boas práticas e documentação clara.

---

## 📦 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js progressivo e eficiente para backend
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Prisma ORM](https://www.prisma.io/) — ORM moderno para banco de dados SQL
- [Swagger](https://swagger.io/) — Documentação automática da API
- [NeonDB](https://neon.com/) — Banco de dados (PostgresSQL) 

---

## ⚙️ Configuração do Projeto

### Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seu-usuario/todolist.git
cd todolist
npm install

```

## Configuração do Banco de Dados

### Configure o arquivo .env com sua string de conexão do banco de dados:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/todolist"

```
### Execute migrações e gere o cliente Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate

```

## 🚀 Como executar

| Comando             | Descrição                                   |
|---------------------|---------------------------------------------|
| `npm run start`     | Inicia a aplicação                          |
| `npm run start:dev` | Inicia em modo desenvolvimento (com watch) |
| `npm run start:prod`| Inicia em modo produção                     |


### A aplicação ficará disponível em:
```bash
http://localhost:3000

```
---

### 📚 Documentação da API

Acesse a documentação interativa Swagger em:

```bash
http://localhost:3000/docs

```

A documentação inclui detalhes de endpoints, parâmetros, modelos de dados e exemplos de requisições/respostas.

---

## Organização

![Logo do projeto](public/projetotodonest.png)

## 🔮 Próximos passos / melhorias
Implementar autenticação JWT e proteção de rotas

- Criar módulos para login e registro

- Adicionar filtros avançados (por status, datas etc)

- Configurar deploy para ambiente de produção

## 🤝 Suporte e contato

- Projeto mantido por Celio Almeida – github.com/Eacam13

- Para dúvidas ou contribuições, abra uma issue ou pull request.

## 📜 Licença
- Projeto licenciado como UNLICENSED — uso pessoal e interno somente.
