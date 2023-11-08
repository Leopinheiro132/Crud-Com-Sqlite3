# API de Gerenciamento de Alunos

Esta é uma API em Node.js para gerenciar informações de alunos. Ela foi desenvolvida utilizando o framework Express e ORM Sequelize com SQLite. A API permite criar, listar, atualizar e excluir alunos. Abaixo, você encontrará informações sobre os endpoints e suas funcionalidades.

## Configuração

Antes de utilizar a API, certifique-se de ter instalado o Node.js e todas as dependências necessárias. Você pode instalar as dependências com o comando:

```bash
npm install
```

Certifique-se de que um banco de dados compatível com Sequelize esteja configurado e acessível. As configurações de banco de dados estão definidas em `./database.js`, e o modelo de aluno está definido em `./models/Student.js`.

## Endpoints

### Listar Alunos

- **URL:** `/alunos`
- **Método:** GET
- **Descrição:** Retorna a lista de todos os alunos cadastrados.

### Cadastrar Aluno

- **URL:** `/cadastro`
- **Método:** POST
- **Descrição:** Cadastra um novo aluno.
- **Corpo da Requisição:** Deve incluir os campos:
```SQL
{
 "matricula": "08112023",
 "nome": "Jonh Doe",
 "email":"jonhdoe190@dgmail.com",
 "senha": "admin_admin"
}
```

### Excluir Aluno

- **URL:** `/deluser/:id`
- **Método:** DELETE
- **Descrição:** Exclui um aluno com base no ID fornecido (o ID é gerado na proprio banco tem que fazer a requisição GET primeiro).
- **Parâmetro de Rota:** `id` - O ID do aluno a ser excluído.


### Atualizar Aluno

- **URL:** `/atualizar/:id`
- **Método:** UPDATE
- **Descrição:** Atualiza os dados de um aluno com base no ID fornecido.
- **Parâmetro de Rota:** `id` - O ID do aluno a ser atualizado.
- **Corpo da Requisição:** Deve incluir os campos a serem atualizados, como :
```SQL
{
 "matricula": "08112022",
 "nome": "Jonh Doe",
 "email":"jonhdoe191@dgmail.com",
 "senha": "admin_admin"
}
```

## Iniciar o Servidor

Para iniciar o servidor, utilize o seguinte comando:

```bash
npm start
```

O servidor está rodando na porta 3000 e estará acessível em `http://localhost:3000`.

Certifique-se de ter o banco de dados configurado corretamente e de que os modelos e as migrações do Sequelize foram executados antes de utilizar a API. Caso contraio a propria api irá gerar um arquivo chamado `database.db` onde vai ficar os dados do banco.
