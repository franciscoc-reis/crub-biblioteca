# 📚 API de Gerenciamento de Biblioteca

Esta é uma API REST desenvolvida para o gerenciamento de um acervo de livros. O projeto permite realizar todas as operações fundamentais de um sistema (CRUD): Criar, Ler, Atualizar e Deletar registros de livros em um banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Express**: Framework web para criação de rotas e gerenciamento de requisições.
* **MySQL**: Banco de dados relacional para persistência dos dados.
* **Nodemon**: Ferramenta de auxílio ao desenvolvimento que reinicia o servidor automaticamente.
* **Dotenv**: Gerenciamento de variáveis de ambiente para segurança de credenciais.
* **Insomnia**: Ferramenta utilizada para testes e validação dos endpoints da API.

---

## 🛠️ Como Instalar e Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados:**
    * Crie um banco de dados chamado `biblioteca_db` no seu MySQL.
    * Execute o seguinte comando SQL para criar a tabela:
    ```sql
    CREATE TABLE livros (
        id INT NOT NULL AUTO_INCREMENT,
        titulo VARCHAR(255) NOT NULL,
        autor VARCHAR(255) NOT NULL,
        ano_publicacao INT,
        genero VARCHAR(100),
        PRIMARY KEY (id)
    );
    ```

4.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione suas credenciais seguindo o modelo:
    ```text
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=biblioteca_db
    PORT=3000
    ```

5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

---

## 📑 Endpoints da API

Abaixo estão as rotas disponíveis para teste no Insomnia:

| Método | Rota           | Descrição                          | Exemplo de Body (JSON)                                                                  |
| :----- | :------------- | :--------------------------------- | :-------------------------------------------------------------------------------------- |
| **GET** | `/livros`      | Lista todos os livros cadastrados  | N/A                                                                                     |
| **POST** | `/livros`      | Cadastra um novo livro             | `{"titulo": "1984", "autor": "George Orwell", "ano_publicacao": 1949, "genero": "Distopia"}` |
| **PUT** | `/livros/:id`  | Atualiza os dados de um livro      | `{"titulo": "1984 (Ed. Especial)", "autor": "Orwell", ...}`                             |
| **DELETE** | `/livros/:id`  | Remove um livro pelo ID            | N/A                                                                                     |

---

## 🔒 Segurança

O projeto utiliza o arquivo `.env` para garantir que informações sensíveis, como senhas de banco de dados, não sejam expostas publicamente. O arquivo `.gitignore` está configurado para impedir que as pastas de dependências e credenciais sejam enviadas ao repositório.

---

Desenvolvido por Francisco - https://www.linkedin.com/in/francisco-costareis/