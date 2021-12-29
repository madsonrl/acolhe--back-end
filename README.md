# acolhebackend
Software web com o objetivo de organizar e facilitar o atendimento assistencial e acolhimento psicológico, no intuito de dar apoio, levar conhecimento e compartilhar ajuda profissional.

Dependências
Docker
Docker Compose
NodeJS + NPM

Start Server
Clone o repositório

No diretório raiz executar os comandos de terminal:

    npm install ou yarn
    dockercompose up

Em segundo terminal execute os camandos:

    yarn typeorm migration:run ou npm run typeorm migration:run
    yarn seed:admin ou npm run seed:admin

baseURL: "http://localhost:5000" ou "http://yourexternalip:5000"

Utilização da API

*******ADMIN****

  Login
  Route: "/sessions"
  Method: POST
  ContentType: application/json
  Body: {"username":"username", "password": "password"}

********Platforms*****

  Create Platform
  Route: "/platforms"
  Method: POST
  ContentType: multipart/formdata
  Authentication: "bearer_token"
  file: image
  Query Params: name, link, abstract, details

  List Platform
  Route: "/platforms"
  Method: GET

  Update Platform
  Route: "/platforms/update"
  Method: UPDATE
  ContentType: application/json
  Authentication: "bearer_token"
  Body: {JSON com campos que deseja atualizar}

  Update Image Platform
  Route: "/platforms"
  Method: PATCH
  ContentType: multipart/formdata
  Authentication: "bearer_token"
  file: image
  Query Params: platform_id

  Delete Platform
  Route: "/platforms/update"
  Method: DELETE
  ContentType: application/json
  Authentication: "bearer_token"
  Body: {"id":"ID Plataforma"}


  