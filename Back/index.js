const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const routes = require("./routes/routes")
var cookieParser = require('cookie-parser');

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
app.use(cookieParser());
app.use(routes);


app.listen(4000, () => {
  console.log("API RODANDO!");
});
