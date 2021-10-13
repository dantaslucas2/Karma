const jwt = require('jsonwebtoken');
const config = require('../config.json');

async function verifyToken(token){

        try {
                const verify = jwt.verify(token,config.secret);
                console.log(token)
                if(verify.type==='user'){return true;}
                else{return false};
        } catch (error) {
                console.log(token)
                console.log(JSON.stringify(error),"error");
                return false;
        }
}

module.exports =  {verifyToken};
