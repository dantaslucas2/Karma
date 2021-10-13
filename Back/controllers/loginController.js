const Users = require("../database/models/Users");
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const config = require('../config.json');


async function authenticate(req, res) {

  const userLog = req.body;

  if (!(userLog.user && userLog.password)) {   
    return res.status(400).send({ error: "Dados não estão no formato permitido" });
  }

  const userAuth = await Users.findOne({
    where: {
      user: userLog.user,
    }
  });

  if(userAuth){

    if (!userAuth || !bcrypt.compareSync(userLog.password, userAuth.password)) {

      res.status(401).json({message: "Senha incorreta"});
      return false;
    } else {
      res.status(200).json({message: "Usuário Logado"});
      return true;
    }  
    
  }else{
    res.status(401).json({ error: "Usuário não existe" });

  }
}


async function verifyUserLogin(user,password){


  const userLog = {user:user, password: password};

  if (!(userLog.user && userLog.password)) {   
    return res.status(400).send({ error: "Dados não estão no formato permitido" });
  }

  const userAuth = await Users.findOne({
    where: {
      user: userLog.user,
    }
  });

  if(userAuth){

    if (userAuth && bcrypt.compareSync(userLog.password, userAuth.password)) {

      token = jwt.sign({id:userAuth.id_user,username:userAuth.user,type:'user'},config.secret,{ expiresIn: '2h'})
      return {status:'ok',data:token, idUser:userAuth.id_user}
      
    } else {
      return {status:'401',error:'invalid password'}
    }  
    
  }else{
    return {status:'499',error:'Usuário não existe'}
  }
}

async function login(req, res){

  const {user,password}=req.body;

  const response = await verifyUserLogin(user,password);
  const token = response.data


  if(response.status==='ok'){
    res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
    res.status(200).send({message: "Autenticado", data: response, logado: true});

  }else{
    res.status(401).send({message: "Não Autenticado", data: response, logado: false})
    res.json(response);

  }
}

module.exports =  {authenticate, verifyUserLogin, login};
