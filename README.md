# Criar backend para aplicação Navedex.
* Autenticação de usuários
* Criação de dados específicos por usuário utilizando JWT
* Conexão com banco de dados SQLITE
### A Aplicação
A proposta é entregar uma API de criação de Navers e projetos.
  No ambiente proposto você poderá criar um usuário utilizando email e senha e fazer login com esses dados.
  Uma vez Logado, você poderá criar seus Navers e Projetos e lista-los.

  !! cada usuário terá sua lista única de navers e projetos.
  
### ROTAS
* /signin : Cria usuário utilizando os dados email e senha pelo corpo da requisição
* /login : Solicita usuário e senha pelo body da requisição, verifica se existe esse usuário no sistema e gera um token de acesso para as rotas "/navers" e "/projects"
* /signout : apagar token / fazer logout da sessão
  
* /navers - GET : [NECESSÁRIO TOKEN] Lista os usuários criados pelo usuário autenticado. ( Ordenados por data de admissão )
* /navers - POST: [NECESSÁRIO TOKEN] Cria Navers
* /navers/id_no_naver - GET : [NECESSÁRIO TOKEN] lista o naver enviado por parâmetro da rota

* /projects - GET : [NECESSÁRIO TOKEN] Lista os projetos ( Ordenados por nome ) criados por você e os respectivos Navers envolvidos no projeto.
* /projects - POST: [NECESSÁRIO TOKEN] cria projeto usando os dados do requisição
* /projects/id_projects - GET: [NECESSÁRIO TOKEN] lista detalhes do projeto enviado por id como parâmtro na rota

### Tecnologias utilizadas
* NodeJS
* Typescript
* SQLITE
* yarn
  
### Principais biblitecas
* Express
* typeorm
* bcrypt
* jsonwebtoken

### ! Esse projeto foi testado no insominia !

### Para rodar o projeto

1. Rodar as migrations para construção das tabelas do banco de dados de
   <code> yarn typeorm migration:run </code>
2. <code> $ npm run dev</code> ou <code> $ yarn dev</code>
1. vá até o seu navegador, ou use pelo insominia / postman o endereço:
   <code> http://localhost:3333/ </code>


