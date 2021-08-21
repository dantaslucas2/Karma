'use strict';


var dbConn = require('../FilesConectionDB/conectionDB');

//user object
var Users = function(users){
  this.user          = users.user;
  this.password       = users.password;
  this.name           = users.name;
  this.email          = users.email;
  this.institution   = users.institution;
  this.points         = users.points;
};

/* (name, email, points, institution, password, user) VALUES (?,?,?,?,?,?)",newUser.name, newUser.email, newUser.points,newUser.institution, newUser.password, newUser.user */

Users.create = function (newUser, result) {
    dbConn.query("INSERT INTO Users set ?", newUser, function (err, res) {
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
            console.log('users : ', res);
            result(null, res);
        }
    });
};

Users.delete = function(id, result){
    dbConn.query("DELETE FROM Users WHERE id_user = ?", parseInt(id), function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Users;