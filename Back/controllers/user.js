const Users = require("./database/models/Users");
const app = express();

//----------------------Crud Usuarios-----------------------
app.get("/users", (req, res) => {
  Users.findAll({ raw: true }).then((usuarios) => {
    console.log(usuarios);

    res.json(usuarios);
  });
  res.statusCode = 200;
});

app.get("/user/:user", (req, res) => {
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
