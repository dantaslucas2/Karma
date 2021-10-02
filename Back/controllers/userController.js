const Users = require("../database/models/Users");
const bcrypt = require('bcryptjs');


async function createUsers(req, res){
  
  var {name, email, points, institution, password, user} = req.body;
  var data = new Date();
  
  if ((name == undefined && email == undefined && points == undefined && institution == undefined && password == undefined && user == undefined) || user == undefined) {

    console.log("json errado");
    res.status(400).send("Dados Preenchidos Incorretamente");

  } else {
    Users.findOne({
      where: {
        user: user,
      },
    }).then((resposta) => {

      if (resposta != undefined) {
        //Ja existe esse user
        console.log("ja existe esse usuario");
        res.status(400).send("ja existe esse usuario");
      
      } else {

        Users.beforeCreate((user, options) => {

          return bcrypt.hash(user.password, 10)
              .then(hash => {
                  user.password = hash;
              })
              .catch(err => { 
                  throw new Error(); 
              });
      });

        new_user = {
          name: name,
          email: email,
          points: points,
          institution: institution,
          password: password,
          user: user,
          createdAt: data,
          updatedAt: data,
        }

        // nao existe o user
        Users.create(new_user)
          .then(() => {
            res.status(200).send({message: "usuario criado com sucesso", user: new_user});
          })
          .catch(() => {
            res.send("Erro ao salvar o usuario", new_user)
            res.sendStatus(500);
          });
      }
    });
  }
}

async function listUsers(req, res){
  Users.findAll({ raw: true }).then((usuarios) => {
    res.json(usuarios);
  });
  res.statusCode = 200;
}

async function indexUser(req, res){

  var userId = req.params.id;

  if (userId == undefined) {
    res.sendStatus(400);
  
  }else {
    
    Users.findAll({
      where: {
        id_user: userId
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        res.json(resposta);
        res.sendStatus(200);
      }else {
        res.sendStatus(404);
      }
    });
  }
}

async function updateUser(req, res) {

  var userId = req.params.id;
  var dataUpdate = new Date();

  if (userId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Users.update(
      {
        name: req.body.name,
        email: req.body.email,
        updatedAt: dataUpdate,
      },
      {
        where: {
          id_user: req.params.id,
        },
      }
    );
    Users.findByPk(req.params.id).then((result) => res.status(200).send({user: result}));
  }
}

async function deleteUser(req, res) {
  var userId = req.params.id;

  if (userId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Users.destroy({
      where: {
        id_user: req.params.id,
      },
    });

    Users.findAll().then((result) => res.json(result), res.sendStatus(200));
  }
}

module.exports =  {createUsers, listUsers, indexUser, updateUser, deleteUser };
