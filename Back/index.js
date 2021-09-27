const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Users = require("./database/models/Users");
const Tags = require("./database/models/Tags");
const Services = require("./database/models/Services");
const Contracts = require("./database/models/Contracts");
const Tags_services = require("./database/models/Tags_services");
//const queryUser = require("./controllers/user");
const { Op } = require("sequelize");

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
app.get("/api/users", (req, res) => {
  Users.findAll({ raw: true }).then((usuarios) => {
    console.log(usuarios);

    res.json(usuarios);
  });
  res.statusCode = 200;
});

app.get("/api/user/:user", (req, res) => {
  var userReq = req.params.user;
  console.log("------------------------");
  if (userReq == undefined) {
    res.sendStatus(400);
  } else {
    Users.findAll({
      where: {
        user: { [Op.substring]: userReq }, //userReq + "%",
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        console.log("////////////");
        res.json(resposta);
        res.sendStatus(200);
      } else {
        console.log("++++++++++++++++");
        res.sendStatus(404);
      }
    });
  }
});

app.post("/api/user", (req, res) => {
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
        console.log("ja existe esse usuario");
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

app.delete("/api/user/:id", (req, res) => {});

//----------------------Crud Services-----------------------

app.get("/api/services", (req, res) => {
  Services.findAll({ raw: true }).then((services) => {
    console.log(services);

    res.json(services);
  });
  res.statusCode = 200;
});

app.get("/api/service_tag/:tag", (req, res) => {
  var tagReq = req.params.tag;
  console.log("------------tag---------");
  if (tagReq == undefined) {
    res.sendStatus(400);
  } else {
    Services.findAll({
      where: {
        tag: { [Op.substring]: tagReq },
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        console.log("////////////");
        res.json(resposta);
        res.sendStatus(200);
      } else {
        console.log("++++++++++++++++");
        res.sendStatus(404);
      }
    });
  }
});

app.get("/api/service_id/:id", (req, res) => {
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

app.post("/api/service", (req, res) => {
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

app.delete("/api/service/:id", (req, res) => {
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

//----------------------Crud tags-----------------------
app.get("/api/tags", (req, res) => {
  Tags.findAll({ raw: true }).then((tags) => {
    console.log(tags);
    res.json(tags);
  });
  res.statusCode = 200;
});

app.get("/api/user/:tag", (req, res) => {
  var userReq = req.params.user;
  console.log("------------------------");
  if (userReq == undefined) {
    res.sendStatus(400);
  } else {
    Tags.findAll({
      where: {
        user: { [Op.substring]: userReq }, //userReq + "%",
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        console.log("////////////");
        res.json(resposta);
        res.sendStatus(200);
      } else {
        console.log("++++++++++++++++");
        res.sendStatus(404);
      }
    });
  }
});

app.post("/api/tag", (req, res) => {
  var nametag = req.body;
  console.log("**************************************************");
  var data = new Date();
  console.log("data: ", data);
  console.log("nametag: ", nametag);
  if (nametag == undefined) {
    // console.log("name", nametag);
    console.log("json errado");
    res.sendStatus(400);
  } else {
    Tags.findOne({
      where: {
        name: nametag,
      },
    })
      .then((resposta) => {
        if (resposta != undefined) {
          //Ja existe essa tag
          res.sendStatus(400);
        } else {
          // nao existe a tag
          Tags.create({
            name: nametag,
            createdAt: data,
            updatedAt: data,
          })
            .then(() => {
              console.log("nametag ", nametag);
              console.log("createdAt", data);
              console.log("updatedAt", data);
              console.log("tag salvo");
              res.sendStatus(200);
            })
            .catch(() => {
              console.log("Erro ao salvar o tag");
              res.sendStatus(500);
            });
        }
      })
      .catch(() => {
        console.log("Erro no where");
        res.sendStatus(500);
      });
  }
});

app.delete("/api/user/:tags", (req, res) => {});

//----------------------Crud Contracts-----------------------

app.get("/api/contracts", (req, res) => {
  Contracts.findAll({ raw: true }).then((contracts) => {
    console.log(contracts);

    res.json(contracts);
  });
  res.statusCode = 200;
});

app.get("/api/contract/:id", (req, res) => {
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

app.post("/api/contract", (req, res) => {
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

app.delete("/api/contract/:id", (req, res) => {
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

app.listen(45678, () => {
  console.log("API RODANDO!");
});
