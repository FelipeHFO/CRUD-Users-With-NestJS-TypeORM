# CRUD (Create, Read, Update, Delete) de Usuários

## Description

- Projeto de cadastro, visualização, alteração e exclusão de usuários.

## Tecnologias

- [Docker](https://www.docker.com/) para componentizar o projeto com todas as suas dependências.
- [Nest](https://github.com/nestjs/nest) framework de NodeJS utilizando TypeScript.
- [TypeORM](https://typeorm.io/#/) é um mapeador de objeto-relacional que facilita todas as funções referente ao Banco de Dados.
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) Banco de Dados relacional MySQL.
- [Postman](https://www.postman.com/) para fazer requisições a sua API sem a necessidade de uma aplicação FrontEnd.

## Executando o projeto

- Para executar o projeto é necessário ter o [Visual%Studio%Code].
- Baixar também a extensão do [Docker] no Visual Studio Code.
- Caso seja windows é necessário ter instalado o Docker-Desktop.

- 1º Passo -> Abra o VSCode e no canto inferior esquerdo irá ter uma opção chamada "Open a remote window"
- 2º Passo -> Irá abrir uma lista, clique na opção "Open Folder in Container..."
- 3º Passo -> Agora já no ambiente executando, execute o comando abaixo:

```bash
# Instalando as dependências
$ yarn install
```

- 4º Passo -> Em seguida, execute o comando a seguir:

```bash
# Servidor escutando na porta 5000
$ yarn start:dev
```
