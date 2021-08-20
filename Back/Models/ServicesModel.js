'use strict';


var dbConn = require('../FilesConectionDB/conectionDB');


//users object
var Users = function(users){
  this.user           = users.user;
  this.password       = users.password;
  this.name           = users.name;
  this.email          = users.email;
  this.instituicion   = users.instituicion;
  this.points         = users.points;
  this.instituicion   = users.instituicion;
};

Users.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Users.findById = function (id, result) {
    dbConn.query("Select * from Users where id_user = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Users.findAll = function (result) {
    dbConn.query("Select * from Users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Users.delete = function(id, result){
    dbConn.query("DELETE FROM Users WHERE id_user = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= users;