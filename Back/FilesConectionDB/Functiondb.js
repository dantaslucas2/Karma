function connectDatabase(dbSettings) {
    var mysql = require('mysql2');
    var db;
    db = mysql.createConnection(dbSettings);
    return db;
}

module.exports = connectDatabase;
