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

    if (userAuth || bcrypt.compareSync(userLog.password, userAuth.password)) {


      console.log("entrei")
      token = jwt.sign({id:userAuth.id_user,username:userAuth.user,type:'user'},config.secret,{ expiresIn: '2h'})
      console.log("token", token)
      return {status:'ok',data:token}
      
    } else {
      return {status:'error',error:'invalid password'}
    }  
    
  }else{
    res.status(401).json({ error: "Usuário não existe" });
    return false;
  }
}

async function login(req, res){

  const {user,password}=req.body;

  console.log(req.body)


  const response = await verifyUserLogin(user,password);
  const token = response.data

  console.log(response)

  if(response.status==='ok'){
    console.log(token)    
    res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
    res.redirect("/login");

  }else{

    res.json(response);

  }
}


async function verifyToken(token){

  try {
      const verify = jwt.verify(token,JWT_SECRET);
      if(verify.type==='user'){return true;}
      else{return false};
  } catch (error) {
      console.log(JSON.stringify(error),"error");
      return false;
  }
}



module.exports =  {authenticate, verifyUserLogin, login, verifyToken};
