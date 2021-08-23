# API de acesso ao banco

## Endpoints

### GET /users

Retorna A listagem de todos os usuarios cadastrados

#### Parametros

Nenhum

#### Respostas

##### OK! 200

Ocorreu tudo como esperado

Exemplo de resposta:

```
[
    {
        "id_user": 1,
        "name": "Amanda",
        "email": "Aula@hotmail.com",
        "points": 10,
        "institution": "UFRJ",
        "password": "Aulas de oratoria",
        "user": "***********",
        "createdAt": "2021-08-23T13:02:40.000Z",
        "updatedAt": "2021-08-23T13:02:40.000Z"
    },
    {
        "id_user": 2,
        "name": "Goldman",
        "email": "Gold@hotmail.com",
        "points": 20,
        "institution": "UFRJ",
        "password": "123456",
        "user": "Goldboy",
        "createdAt": "2021-08-23T13:15:48.000Z",
        "updatedAt": "2021-08-23T13:15:48.000Z"
    }
]
```

### POST /users

Cria um usuário

#### Parametros

Nenhum

#### Respostas

##### OK! 200

Ocorreu tudo como esperado

## Bibliotecas utilizadas:

### nodemon

### sequelize

### express

### body-parser

### msql2

Alterar senha do mysql:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'aA@123456';

