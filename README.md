# 🎓 Tech Challenge Fase 2 - FIAP

> Gabriel Sanz Sztochryn - RM365400
> Bruno dos Santos Freitas - RM365563
> Gabriel da Silva Barros - RM366408

> Uma API para gestão escolar, no qual é possivel cadastrar docentes, alunos, turmar e os docentes publicarem posts, utilizando a base de dados MongoDB e NetsJS para a aplicação.

Esta é uma API RESTful completa para gerenciar um sistema escolar, construída com **NestJS** e **MongoDB Atlas**. O projeto implementa validação de dados com **Zod**, testes automatizados, CI/CD com **GitHub Actions** e deploy via **Docker**.

## 🚀 Stack Tecnológica

### Backend
- **Node.js 20** - Runtime JavaScript moderno
- **NestJS** - Framework robusto e escalável
- **TypeScript** - Tipagem estática para maior confiabilidade
- **MongoDB Atlas** - Banco de dados NoSQL na nuvem
- **Mongoose** - ODM para MongoDB

### Validação & Qualidade
- **Zod** - Validação de schemas type-safe
- **Jest** - Framework de testes com cobertura
- **ESLint** - Linting e padronização de código

### DevOps & Deploy
- **Docker** - Containerização da aplicação
- **GitHub Actions** - CI/CD automatizado
- **MongoDB Atlas** - Banco de dados em nuvem

## ✨ Funcionalidades

### 🎯 Gestão de Entidades
- **👨‍🎓 Alunos**: CRUD completo com validação de dados
- **👨‍🏫 Docentes**: Gerenciamento de professores e suas matérias
- **🏫 Turmas**: Criação e associação de alunos/docentes às turmas
- **📝 Posts**: Sistema de publicações dos docentes

### 🔧 Recursos Técnicos
- **✅ Validação Robusta**: Schemas Zod para validação type-safe
- **🧪 Testes Automatizados**: Cobertura mínima de 20% garantida
- **🚀 CI/CD**: Deploy automático via GitHub Actions
- **🐳 Docker**: Containerização para produção
- **☁️ Cloud Ready**: Conectado ao MongoDB Atlas
- **📊 Paginação**: Listagens otimizadas com paginação
- **🔄 PUT Endpoints**: Atualizações completas (não PATCH)

## ⚙️ Pré-requisitos

- **Node.js 20+**
- **Docker** e **Docker Compose**
- **Git** (para clonar o repositório)

## 🚀 Como Executar

### Opção 1: Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone https://github.com/TioLen/tech-challenge-fase-2.git
cd tech-challenge-fase-2

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# 4. Suba o MongoDB local (opcional)
docker-compose up -d

# 5. Execute em modo desenvolvimento
npm run start:dev
```

### Opção 2: Docker

```bash
# 1. Clone o repositório
git clone https://github.com/TioLen/tech-challenge-fase-2.git
cd tech-challenge-fase-2

# 2. Execute com Docker Compose
docker-compose up -d

# 3. Acesse a aplicação
curl http://localhost:3000
```

### Opção 3: Produção

```bash
# Build da imagem
docker build -t school-api:latest \
  --build-arg DATABASE_URL="sua-string-de-conexao" .

# Execute o container
docker run -p 3000:3000 school-api:latest
```

## 🧪 Testes e Qualidade

```bash
# Executar todos os testes
npm run test

# Testes com cobertura
npm run test:cov

# Linting
npm run lint

# Build de produção
npm run build
```

**Cobertura de Testes**: 73.68% (mínimo 20% exigido) ✅

## 📚 Documentação da API

### Base URL
```
http://localhost:3000
```

### 👨‍🎓 Alunos (`/alunos`)

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/alunos` | Criar novo aluno | `{ name, age?, turma }` |
| `GET` | `/alunos` | Listar alunos | `?limit=10&page=1` |
| `GET` | `/alunos/:id` | Buscar aluno por ID | - |
| `PUT` | `/alunos/:id` | Atualizar aluno | `{ name?, age?, turma? }` |
| `DELETE` | `/alunos/:id` | Remover aluno | - |

### 👨‍🏫 Docentes (`/docentes`)

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/docentes` | Criar novo docente | `{ name, age?, materia }` |
| `GET` | `/docentes` | Listar docentes | `?limit=10&page=1` |
| `GET` | `/docentes/:id` | Buscar docente por ID | - |
| `PUT` | `/docentes/:id` | Atualizar docente | `{ name?, age?, materia? }` |
| `DELETE` | `/docentes/:id` | Remover docente | - |

### 🏫 Turmas (`/turmas`)

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/turmas` | Criar nova turma | `{ name }` |
| `GET` | `/turmas` | Listar turmas | `?limit=10&page=1` |
| `GET` | `/turmas/:id` | Buscar turma por ID | - |
| `PUT` | `/turmas/:id` | Atualizar turma | `{ name? }` |
| `DELETE` | `/turmas/:id` | Remover turma | - |
| `POST` | `/turmas/:turmaId/docentes/:docenteId` | Adicionar docente à turma | - |
| `POST` | `/turmas/:turmaId/alunos/:alunoId` | Adicionar aluno à turma | - |

### 📝 Posts (`/posts`)

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/posts` | Criar novo post | `{ titulo, conteudo, autor, status? }` |
| `GET` | `/posts` | Listar posts | `?limit=10&page=1` |
| `GET` | `/posts/:id` | Buscar post por ID | - |
| `PUT` | `/posts/:id` | Atualizar post | `{ titulo?, conteudo?, autor?, status? }` |
| `DELETE` | `/posts/:id` | Remover post | - |

## 🔧 Exemplos de Uso

### Criar um Aluno
```bash
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "age": 16,
    "turma": "507f1f77bcf86cd799439011"
  }'
```

### Listar Turmas com Paginação
```bash
curl "http://localhost:3000/turmas?limit=5&page=1"
```

### Atualizar um Docente
```bash
curl -X PUT http://localhost:3000/docentes/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "materia": "Matemática Avançada"
  }'
```

## 🚀 CI/CD e Deploy

### GitHub Actions
O projeto possui CI/CD automatizado que:
- ✅ Executa testes e linting
- ✅ Gera relatório de cobertura
- ✅ Builda e publica imagem Docker
- ✅ Deploy automático no push para `main`

### Status do Build
[![CI/CD](https://github.com/TioLen/tech-challenge-fase-2/workflows/CI/CD/badge.svg)](https://github.com/TioLen/tech-challenge-fase-2/actions)

### Docker Hub
A imagem está disponível em: `SEU_USERNAME/school-api:latest`

## 🛠️ Estrutura do Projeto

```
src/
├── school/                 # Módulo principal
│   ├── controllers/        # Controladores REST
│   ├── services/          # Lógica de negócio
│   ├── repositories/      # Acesso a dados
│   └── schemas/           # Modelos Mongoose
├── shared/                # Código compartilhado
│   ├── schemas/           # Schemas Zod
│   └── pipe/              # Pipes customizados
└── main.ts               # Ponto de entrada
```

## 📊 Métricas de Qualidade

- **Cobertura de Testes**: 73.68% ✅
- **Linting**: ESLint configurado ✅
- **TypeScript**: 100% tipado ✅
- **Validação**: Zod schemas ✅
- **CI/CD**: GitHub Actions ✅

Este projeto foi desenvolvido como parte do Tech Challenge 2.