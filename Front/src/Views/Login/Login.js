import React, {Component, useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';
import LoginController from "../../API/LoginController";
import TextField from '@material-ui/core/TextField';
import { Email } from '@material-ui/icons';
import './Login.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";
import "@fontsource/lato";
// @ts-nocheck

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isAuthenticated: false,
      formLogin:{
        user:"", 
        password:""}
    }; 
  }

  verificaLoginUser(LogUser) {
    LoginController.postLoginUser({NewLogin: LogUser}).then(res => {
      this.setState(prevState=> {
          prevState.isAuthenticated = res.logado;
          return prevState}
      )
    }) 
  }

  handleSubmit(event) {
    console.log(this.state.formLogin)
    this.verificaLoginUser(this.state.formLogin)
    event.preventDefault();    
  }

  
  writeForm(value, label){
    this.setState(prevState => {
        if (value !== "") {
          prevState.formLogin[label] = value
        }     
        return prevState;
    })
  }

  render(){
    return (
      <>
        <Navbar />
        <div className='Login'>  
          <div className="Container">
            <div className='Login'>

              <div className="LoginForm">
              <p className="LoginFormTitle">Login</p>
                <form className="Form" noValidate autoComplete="off" onSubmit={(e)=>{this.handleSubmit(e)}}>
                  <TextField sx={formElementStyle} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "user")}}/>
                  <TextField sx={formElementStyle} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "password")}}/>
                  <div className="OtherOptions">
                    <a href="/register">
                      <p className="CreateNewAccount">Criar uma conta!</p>
                    </a>
                    <p className="ForgotPassword">Esqueci a senha</p>
                  </div>
                  <button className="LoginButton" style={formElementStyle} type="submit">
                   Entrar!
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
  
}

export default Login;