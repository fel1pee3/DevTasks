# DevTasks

**DevTasks** é uma aplicação de gerenciamento de tarefas inspirada no Jira, focada em simplicidade e eficiência. Permite que equipes organizem projetos,
criem e acompanhem tarefas, gerenciem status e colaborem de forma ágil. Com um sistema de autenticação seguro, controle de permissões e uma interface intuitiva,
o DevTasks é ideal para desenvolvedores e times que precisam de um fluxo de trabalho produtivo.

## Status
🚧 Projeto em criação 🚧

## Pré-visualização
Confira uma prévia do DevTasks:

![Imagem da Aplicação](frontend/images/tela01.png)

---

## Funcionalidades

### 1. Autenticação e Segurança
- ✅ Registro e login com autenticação JWT
- ✅ Proteção de rotas para impedir acesso não autorizado

### 2. Gerenciamento de Projetos e Tarefas
- ✅ Criar, editar e excluir projetos
- ✅ Criar, editar e excluir tarefas dentro de projetos
- ✅ Definir status das tarefas (To Do, Em Progresso, Concluído)
- ✅ Atribuir prioridade (Baixa, Média, Alta, Crítica)
- ✅ Associar usuários responsáveis por uma tarefa

### 3. Fluxo de Trabalho e Organização
- ✅ Quadro Kanban para visualizar o progresso das tarefas
- ✅ Lista de tarefas filtrável por status, prioridade e projeto
- ✅ Ordenação de tarefas por data de criação, prazo ou prioridade

### 4. Colaboração e Comunicação
- ✅ Adicionar comentários nas tarefas
- ✅ Notificações quando uma tarefa é atualizada ou atribuída

### 5. Controle de Acesso e Permissões
- ✅ Usuários com diferentes roles (Admin, Membro, Convidado)
- ✅ Restrições para que apenas o criador ou admin possa excluir tarefas
- ✅ Apenas usuários atribuídos podem alterar status das tarefas

---

## Como Começar

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **PostgreSQL**
- **MongoDb**
- **Git**

### Criação do Banco de Dados **PostgreSQL**

#### BD `devtasks`
Cria o BD do PostgreSQL.
```bash
CREATE DATABASE devtasks;
```

#### Tabela `users`
Guarda informações sobre os usuários.
```bash
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(199) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/fel1pee3/DevTasks.git
    cd devtasks
    ```

2. Instale as dependências do backend:
    ```bash
    cd server
    npm install nome_das_dependencias
    ```

3. Configure o arquivo `.env` no backend:
    ```env
    CONNECT_STRING=postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO
    PORT=3000
    JWT_KEY="SUA-CHAVE-JWT"
    ```

4. Inicie o backend:
    ```bash
    npm start
    ```

5. Instale as dependências do frontend:
    ```bash
    cd frontend
    npm install nome_das_dependencias
    ```

6. Inicie o frontend:
    ```bash
    npm run dev
    ```

7. Acesse a aplicação em `http://localhost:3000`.

---

## Licença
Este projeto está licenciado sob a licença **MIT**.
