const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Users = require("./database/models/Users");
const Services = require("./database/models/Services");
const Contracts = require("./database/models/Contracts");

connection
  .authenticate()
  .then(() => {
    console.log("Concectado com o banco");
  })
  .catch((msgErro) => {
    console.log("Erro ao conectar");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//----------------------Crud Usuarios-----------------------
app.get("/users", (req, res) => {
  Users.findAll({ raw: true }).then((usuarios) => {
    console.log(usuarios);

    res.json(usuarios);
  });
  res.statusCode = 200;
});

app.get("/user/:user", (req, res) => {
  if (user == undefined) {
    res.sendStatus(400);
  } else {
    Users.findOne({
      where: {
        user: user,
      },
    }).then((resposta) => {});

    if (user != undefined) {
      res.send(user);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/user", (req, res) => {
  var { name, email, points, institution, password, user } = req.body;
  console.log("**************************************************");
  var data = new Date();
  console.log("data: ", data);
  if (
    name == undefined &&
    email == undefined &&
    points == undefined &&
    institution == undefined &&
    password == undefined &&
    user == undefined
  ) {
    // console.log("name", name);
    // console.log("email", email);
    // console.log("points", points);
    // console.log("institution", institution);
    // console.log("password", password);
    // console.log("user", user);

    console.log("json errado");
    res.sendStatus(400);
  } else {
    Users.findOne({
      where: {
        user: user,
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        //Ja existe esse user
        res.sendStatus(400);
      } else {
        // nao existe o user
        Users.create({
          name: name,
          email: email,
          points: points,
          institution: institution,
          password: password,
          user: user,
          createdAt: data,
          updatedAt: data,
        })
          .then(() => {
            console.log("name", name);
            console.log("email", email);
            console.log("points", points);
            console.log("institution", institution);
            console.log("password", password);
            console.log("user", user);
            console.log("createdAt", data);
            console.log("updatedAt", data);
            console.log("Usuario salvo");
            res.sendStatus(200);
          })
          .catch(() => {
            console.log("Erro ao salvar o usuario");
            res.sendStatus(500);
          });
      }
    });
  }
});

app.delete("/user/:id", (req, res) => {});

//----------------------Crud Services-----------------------

app.get("/services", (req, res) => {
  Services.findAll({ raw: true }).then((services) => {
    console.log(services);

    res.json(services);
  });
  res.statusCode = 200;
});

app.get("/service/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = db.games.find((g) => g.id == id);

    if (game != undefined) {
      res.send(game);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/service", (req, res) => {
  var {
    title,
    tag,
    points,
    category,
    description,
    status,
    type_service,
    id_owner,
  } = req.body;
  console.log("##############################################");
  var data = new Date();
  console.log("data: ", data);
  if (
    title == undefined &&
    tag == undefined &&
    points == undefined &&
    category == undefined &&
    description == undefined &&
    status == undefined &&
    type_service == undefined &&
    id_owner == undefined
  ) {
    // console.log("title", title);
    // console.log("tag", tag);
    // console.log("points", points);
    // console.log("category", category);
    // console.log("description", description);
    // console.log("status", status);
    // console.log("type_service", type_service);
    // console.log("id_owner", id_owner);

    console.log("json errado");
    res.sendStatus(400);
  } else {
    Services.create({
      title: title,
      tag: tag,
      points: points,
      category: category,
      description: description,
      status: status,
      type_service: type_service,
      id_owner: id_owner,
      createdAt: data,
      updatedAt: data,
    })
      .then(() => {
        console.log("title", title);
        console.log("tag", tag);
        console.log("points", points);
        console.log("category", category);
        console.log("description", description);
        console.log("status", status);
        console.log("type_service", type_service);
        console.log("id_owner", id_owner);
        console.log("Servico salvo");
        res.sendStatus(200);
      })
      .catch(() => {
        console.log("Erro ao salvar o Servico");
        res.sendStatus(500);
      });
  }
});

app.delete("/service/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = db.games.find((g) => g.id == id);

    if (game != undefined || game != -1) {
      db.games.splice(game, 1);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

//----------------------Crud Contracts-----------------------

app.get("/contracts", (req, res) => {
  Contracts.findAll({ raw: true }).then((contracts) => {
    console.log(contracts);

    res.json(contracts);
  });
  res.statusCode = 200;
});

app.get("/contract/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = db.games.find((g) => g.id == id);

    if (game != undefined) {
      res.send(game);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/contract", (req, res) => {
  var { id_contract, date_begin, date_end, points, id_service, id_request } =
    req.body;
  console.log("##############################################");
  var data = new Date();
  console.log("data: ", data);
  if (
    id_contract == undefined &&
    date_begin == undefined &&
    date_end == undefined &&
    points == undefined &&
    id_service == undefined &&
    id_request == undefined
  ) {
    // console.log("id_contract", id_contract);
    // console.log("date_begin", date_begin);
    // console.log("data_end", data_end);
    // console.log("points", points);
    // console.log("id_service", id_service);
    // console.log("id_request", id_request);

    console.log("json errado");
    res.sendStatus(400);
  } else {
    Contracts.create({
      date_begin: date_begin,
      date_end: date_end,
      points: points,
      id_service: id_service,
      id_request: id_request,
      createdAt: data,
      updatedAt: data,
    })
      .then(() => {
        console.log("Contrato salvo");
        res.sendStatus(200);
      })
      .catch(() => {
        console.log("date_begin", date_begin);
        console.log("date_end", data_end);
        console.log("points", points);
        console.log("id_service", id_service);
        console.log("id_request", id_request);
        console.log("createdAt", data);
        console.log("updatedAt", data);
        console.log("Erro ao salvar o contrato");
        res.sendStatus(500);
      });
  }
});

app.delete("/contract/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = db.games.find((g) => g.id == id);

    if (game != undefined || game != -1) {
      db.games.splice(game, 1);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.listen(8000, () => {
  console.log("API RODANDO!");
});
