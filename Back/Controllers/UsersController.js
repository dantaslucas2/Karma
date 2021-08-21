'use strict';

const Users = require('../Models/UserModel');

exports.findAll = function(req, res) {
    Users.findAll(function(err, user) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create = function(req, res) {
    const new_user = new Users(req.body);
    //handles null error
    if(req.body.constructor === Object && (Object.keys(req.body).length!= req.body.constructor.length) && Object.keys(req.body).length===0){
        res.status(400).send({ 
            campos:req,
            error:true, message: 'Please provide all required field' });
    }else{
        Users.create(new_user, function(err, user) {
            if (err)
                res.send(err);
            res.json({error:false,message:"User added successfully!",data:user});
        });
    }
};
exports.findById = function(req, res) {
    Users.findById(req.params.id, function(err, user) {
    if (err)
        res.send(err);
    res.json(user);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        
        Users.update(req.params.id, new Users(req.body), function(err, user) {
            if (err){
                res.send(err);}
            res.json({ error:false, message: 'Users successfully updated' });                
        });
    }
};

exports.delete = function(req, res) {
    console.log(req)
    Users.delete( req.params.id, function(err, user) {
        if (err){
            res.send(err);
        }
        res.json({ error:false, message: 'User successfully deleted'});
    });
};