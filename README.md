# legislative-votes-api

Uma api para a aplicação dos votos do legislativo federal em 2018

## Tecnologias usadas

* A API é feita em [Fastify](https://www.fastify.io/) com [Graphql](https://graphql.org/)

## Considerações

* Os dados estão em JSONs, na pasta elections. Lá, você encontra um arquivo `elections.json` com as eleições (no momento, só há dados de 2018). Dentro da pasta 2018 (ano em análise), há a lista de cada estado

## API em Graphql

Este projeto utiliza o Graphiql como um playground para os tipos e resolvers. É só subir a api e digitar: `<endereço>:<porta>/graphiql`

## Como subir a API?

* Faça um clone do projeto, com `git clone https://github.com/emanuelgsouza/legislative-votes-api.git`
* Instale as dependencias, com `yarn`
* Execute o comando `docker-compose up` para subir o serviço Docker com a API em desenvolvimento

## Projetos relacionados

* Os arquivos JSONs dessa API foram gerados pelo [legislative-votes-parser](https://github.com/emanuelgsouza/legislative-votes-parser)
* Há uma versão front-end em desenvolvimento, [legislative-votes-web](https://github.com/Guilherme2020/legislative-votes-web), não deixe de conferir

## TODO

* [ ] Testes na rota `/graphql`

----

Este repositório está licenciado sob a licença MIT
