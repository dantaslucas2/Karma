const Users = require("../database/models/Users");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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


/*   const userAuth = await Users.findOne({
    where: {
      user: user,
    }
  }); */

  res.status(200)

  console.log("Aqui")
/*   if(userAuth){

    if (!userAuth || !bcrypt.compareSync(password, userAuth.password)) {

      res.status(401).json({message: "Senha incorreta"});
      return false;
    } else {
      res.status(200).json({message: "Usuário Logado"});
      return true;
    }  
    
  }else{
    res.status(401).json({ error: "Usuário não existe" });

  } */
}

async function login(req, res){

  const {user,password}=req.body;

  const response = await verifyUserLogin(user,password);

  console.log(response)

/*   if(response.status==='ok'){
    
    res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
    res.redirect('/feed');
  }else{
      res.json(response);
  } */
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
