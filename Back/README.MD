# API de acesso ao banco

## Endpoints

### GET /api/users

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

### GET /api/user/{user}

Retorna o usuario com o user passado

#### Parametros

user

#### Respostas

##### OK! 200

Ocorreu tudo como esperado
Exemplo de resposta:

### POST /api/users

Cria um usuário

#### Parametros

Nenhum

#### Exemplo de body

#### Respostas

```
{
    "name": "Goldman",
    "email": "Gold@hotmail.com",
    "points": 20,
    "institution": "UFRJ",
    "password": "123456",
    "user": "Goldboy"
}
```

##### OK! 200

Usuario cadastrado com sucesso

##### Falha! 400

Ocorreu um erro no body passado

##### Falha! 500

Ocorreu um erro na API com o banco de dados

## Bibliotecas utilizadas:

### nodemon

### sequelize

### express

### body-parser

### msql2

Alterar senha do mysql:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'aA@123456';
