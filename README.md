<!-- COMENTÁRIOS SOBRE PROJETO -->
<!-- 

- Poderia estruturar o backend de modo que cada form preenchido gerasse um arquivo json contendo 
os atributos definidos na página de configuração. A resposta esperada pela api após o post seria a seguinte:

[
  "document.json"
]

o nome do arquivo seria único e serviria como identificador para posteriormente acessar e manipular os dados


Acabei entendendo a proposta de outra forma no início e não consegui reestruturar a aplicação a tempo

 -->

<div align='center'>
    <img src="https://img.shields.io/badge/TypeScript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=black" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Nest.js-404D59?style=for-the-badge&logo=nestjs&logoColor=red" />
    <img src="https://img.shields.io/badge/Postgres-07405E?style=for-the-badge&logo=postgresql&logoColor=white" />
</div>

# PUCA API

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.JS](https://nodejs.org/en/)
- [NestJs](https://nestjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Postman](https://www.postman.com/)

## Dependências:

São as dependências necessárias para o funcionamento do projeto:

```
  "dependencies": {
    "@nestjs/common": "^9.0.0",
    "@nestjs/config": "^2.2.0",
    "@nestjs/core": "^9.0.0",
    "@nestjs/platform-express": "^9.0.0",
    "@nestjs/typeorm": "^9.0.1",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.0",
    "cors": "^2.8.5",
    "pg": "^8.8.0",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.3.11"
  }

```

## Dependências de desenvolvimento:

São as dependências utilizadas no desenvolvimento do projeto

```
  "devDependencies": {
    "@nestjs/cli": "^9.0.0",
    "@nestjs/schematics": "^9.0.0",
    "@nestjs/testing": "^9.0.0",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.13",
    "@types/jest": "28.1.8",
    "@types/node": "^16.0.0",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "28.1.3",
    "prettier": "^2.3.2",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "28.0.8",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "4.1.0",
    "typescript": "^4.7.4",
    "webpack": "^5.75.0",
    "webpack-dev-server": "^4.11.1"
}
```

## Como instalar:

Clone o projeto

```bash
  git clone https://github.com/letxns/puca-app-api

```

Entre no diretório do projeto

```bash
  cd puca-app-api
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm start
```

## Rotas:

## Retornando dados (GET)

## GET: https://puca-app-api.onrender.com/api/form

### Resposta: 

Serão exibidos todos os dados armazenados pela API

```
[
	{
        "id":2,
        "codproduto":21659,
        "descricao":"halls",
        "incluidoEm":"2022-12-28T04:51:06.708Z"
	},
    {
        "id":3,
        "codproduto":236598,
        "descricao":"mentos",
        "incluidoEm":"2022-12-28T04:51:23.702Z"
    }
]

```

## GET: https://puca-app-api.onrender.com/api/form/:id

### Resposta:

Será exibido o objeto que possui o id especificado

```
[
	{
        "id":90,
        "codproduto":264842,
        "descricao":"jujuba",
        "incluidoEm":"2022-12-28T22:21:33.545Z"
	}
]

```

## Exemplos de POST

* codproduto --> Number
* descricao --> String

## POST: https://puca-app-api.onrender.com/api/form

Os dados deverão ser incluídos da seguinte maneira:

```
{
    "codproduto":154154,
    "descricao":"caderno"
}
```


## 🕹️ Exemplos de atualização de dados (PUT)

## PUT: https://puca-app-api.onrender.com/api/form/:id

### Requisição (JSON)

```
{
	"codproduto": 200,
	"descricao": "ExemploAtualizado",
}
```

## 🕹️ Exemplos de deleção de dados (DELETE)

## DELETE: https://puca-app-api.onrender.com/api/form/:id

### Resposta:
```
{
    "raw": [],
    "affected": 1
}
```

## Desenvolvimento

- [Leticia Martins](https://github.com/letxns)
