function connectDatabase(dbSettings) {
    var mysql = require('mysql');
    var db;
    db = mysql.createConnection(dbSettings);
    return db;
}

module.exports = connectDatabase;
