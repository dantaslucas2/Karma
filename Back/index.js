const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const routes = require("./routes/routes")
var cookieParser = require('cookie-parser');
var corsOptions = {origin: "http://localhost:4001"};
var cors = require('cors')
const PORT = process.env.PORT || 4000;

connection
  .authenticate()
  .then(() => {
    console.log("Concectado com o banco");
  })
  .catch((msgErro) => {
    console.log("Erro ao conectar");
  });


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routes);


app.listen(PORT, () => {
  console.log("API RODANDO!");
});
