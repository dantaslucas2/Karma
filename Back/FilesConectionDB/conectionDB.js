var config = require('../Config/database.json');
var connection = require('./Functiondb');

const connectionDB = connection(config)

connectionDB.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connectionDB;
