## Tech Challenge - Fase 2: API de Gestão Escolar

Este projeto é uma API RESTful desenvolvida como parte do Tech Challenge da Pós-Graduação. A aplicação foi construída com NestJS e utiliza MongoDB para gerenciar entidades de um sistema escolar: Alunos, Docentes, Turmas e Posts.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor
- **NestJS**: Framework para aplicações eficientes e escaláveis
- **TypeScript**: Tipagem estática para JavaScript
- **MongoDB**: Banco de dados NoSQL orientado a documentos
- **Docker**: Contêiner para o banco de dados (MongoDB)

## ✨ Funcionalidades Principais

O projeto expõe uma API para gerenciar as seguintes entidades:

- **Alunos**: cadastro, listagem, atualização e remoção
- **Docentes**: cadastro, listagem, atualização e remoção
- **Turmas**: criação, listagem e gerenciamento, incluindo associação de alunos e docentes
- **Posts**: criação e gerenciamento de publicações feitas por docentes

## ⚙️ Pré-requisitos

- **Node.js** 18+
- **Docker** e **Docker Compose**

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente.

### 1) Clonar o repositório

```bash
git clone <url-do-seu-repositorio>
cd <nome-da-pasta-do-projeto>
```

### 2) Instalar as dependências

```bash
npm install
```

### 3) Subir o MongoDB com Docker Compose

O projeto inclui um `docker-compose.yml` para subir uma instância do MongoDB.

```bash
docker-compose up -d
```

Isso iniciará o contêiner do MongoDB em segundo plano.

### 4) Iniciar a aplicação

Modo de desenvolvimento (hot-reload):

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🧪 Testes

Testes unitários e de integração:

```bash
npm run test
```

Testes end-to-end (e2e):

```bash
npm run test:e2e
```

## 📚 Endpoints da API

A API oferece os seguintes endpoints para gerenciamento das entidades.

### Alunos (`/alunos`)

- **POST /**: cria um novo aluno
- **GET /**: lista todos os alunos com paginação (`?limit=10&page=1`)
- **GET /:id**: busca um aluno pelo ID
- **PATCH /:id**: atualiza um aluno
- **DELETE /:id**: remove um aluno

### Docentes (`/docentes`)

- **POST /**: cria um novo docente
- **GET /**: lista todos os docentes com paginação
- **GET /:id**: busca um docente pelo ID
- **PATCH /:id**: atualiza um docente
- **DELETE /:id**: remove um docente

### Turmas (`/turmas`)

- **POST /**: cria uma nova turma
- **GET /**: lista todas as turmas com paginação
- **GET /:id**: busca uma turma pelo ID
- **PATCH /:id**: atualiza uma turma
- **DELETE /:id**: remove uma turma
- **POST /:turmaId/docentes/:docenteId**: adiciona um docente à turma
- **POST /:turmaId/alunos/:alunoId**: adiciona um aluno à turma

### Posts (`/posts`)

- **POST /**: cria um novo post (associado a um docente)
- **GET /**: lista todos os posts com paginação
- **GET /:id**: busca um post pelo ID
- **PATCH /:id**: atualiza um post
- **DELETE /:id**: remove um post