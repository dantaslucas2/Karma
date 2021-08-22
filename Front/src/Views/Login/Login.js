import React, { Component } from 'react';
import Redirect from '../../Components/Redirect/Redirect';

class Login extends Component {
     
    render(){
      return (
            <div>               
              <div className="ButtonsHome">
                <Redirect label="Entrar" url="/Entrar"/>              
              </div>
            </div>
    );
  }
}


export default Login;