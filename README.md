# legislative-votes-api

Uma api para a aplicação dos votos do legislativo federal em 2018

## Tecnologias usadas

* A API é feita em [Fastify](https://www.fastify.io/) com [Graphql](https://graphql.org/)

## Considerações

* Os dados estão em JSONs, na pasta elections. Lá, você encontra um arquivo `elections.json` com as eleições (no momento, só há dados de 2018). Dentro da pasta 2018 (ano em análise), há a lista de cada estado

## API em Graphql

Em desenvolvimento

Este repositório está licenciado sob a licença MIT

## Como subir a API?

* Faça um clone do projeto, com `git clone`
* Instale as dependencias, com `yarn`
* Execute o comando `yarn dev` para subir a API em modo de desenvolvimento
