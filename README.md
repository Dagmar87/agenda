## Agenda de Contatos

Esse projeto NodeJS foi desenvolvido por José Dagmar Florentino da Silva Sobrinho para o Desafio CSP. O projeto consiste na criação de um sistema de cadastramento e de consulta de uma agenda de contatos, utilizando como serviços de APIs, as operações CRUD (Create, Read, Update e Delete) para funcionamento do sistema.

As tecnologias usadas nesse projeto foram:

- NodeJS
- Banco de Dados MySQL
- Cors
- Express
- Knex
- Nodemon
- Visual Studio Code
- Insomnia

### Estrutura do Projeto

O projeto da Agenda possui a seguinte estrutura:

- Agenda (Projeto)
  - SRC (Pacote)
    - Controllers  (Pacote)
      - TaskController.js (Classe)
    - Database  (Pacote) 
      - Connection.js (Classe)
    - Routers  (Pacote)
      - Routes.js (Classe)
  - Index.js (Classe)
  - Package.json (Classe)

Nesse projeto NodeJS contém classes Index.js e Package.json e além dos 3 pacotes dentro do pacote src: Controllers, Database e Routers.  

### Banco de Dados

Para esse projeto, foi criado uma única tabela no banco de dados MySQL chamada Contato. E essa tabela possui os seguintes atributos:

- Id - INT - PK (Chave Primaria da Tabela) - O numero da id do contato;
- Prinome - STRING - O primeiro nome (ou apenas nome) do contato;
- Ulnome - STRING - O ultimo nome (ou apenas sobrenome) do contato;
- Email - STRING - O endereço de e-mail do contato;
- Telefone - STRING - O numero de telefone do contato;

Esse banco de dados conecta com o projeto NodeJS através da classe Connection.js que contém os parâmetros de conexão do banco.  

### Operações CRUD do Projeto

Nesse projeto foi realizado uma única operação CRUD, sendo essa é referente a tabela de Contato. Essas operações CRUD foram testadas no programa de API Client chamada Insomnia.

#### Contato

As operações CRUD do Contato são divididas em 7 operações que são:

- novoContato => Essa operação irá criar um novo cadastro de um contato.

URL desta operação: http://localhost:4000/novoContato

- listarContatos => Essa operação irá consultar uma lista de todos contatos cadastrados.

URL desta operação: http://localhost:4000/contatos

- listarUmContato => Essa operação irá consultar um determinado contato cadastrado partir do id deste.

URL desta operação: http://localhost:4000/contato/:id

- listarContatoPorNome => Essa operação irá consultar uma lista de médicos cadastrados partir do primeiro nome destes.

URL deste método: http://localhost:4000/contato/:prinome

- listarContatoPorEmail => Essa operação irá consultar uma lista de médicos cadastrados partir do email destes.

URL deste método: http://localhost:4000/contato/:email

- atualizarContato => Essa operação irá atualizar os dados de um contato cadastrado.

URL deste método: http://localhost:4000/atualizar/contato/:id

- removerContato => Essa operação irá apagar os dados do contato cadastrado.

URL deste método: http://localhost:4000/delete/contato/:id



