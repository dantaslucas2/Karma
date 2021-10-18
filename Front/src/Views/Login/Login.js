import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import LoginController from "../../API/LoginController";
import UserSessionManagement from '../../API/Utils.js'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

import './Login.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idUser: "",
      token: "",
      isAuthenticated: false,
      formLogin:{
        user: "", 
        password: ""}
    }; 
  }

  verificaLoginUser(LogUser) {
    LoginController.postLoginUser(LogUser).then(res => {
      this.setState(prevState => {
        prevState.isAuthenticated = res.data.logado;
        prevState.token = res.data.data.data;
        prevState.idUser = res.data.data.idUser;
        UserSessionManagement.setSession(prevState.token, prevState.idUser)
        return prevState
      })
    }).catch((error) => {
      store.addNotification({
        title: error.response.data.data.error,
        message: "Verifique as informações fornecidas",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.verificaLoginUser(this.state.formLogin)
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
    if(UserSessionManagement.isLoggedIn()){
      return <Redirect to="/feed" />
    }

    return (
      <>
        <Navbar />
        <div className='Login'>  
          <div className="Container">
            <div className='Login'>
              <div className="LoginForm">
                <p className="LoginFormTitle">Login</p>
                <form className="Form" noValidate autoComplete="off" onSubmit={(e)=>this.handleSubmit(e)}>
                  <TextField sx={formElementStyle} id="outlined-basic" label="Usuário" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "user")}}/>
                  <TextField sx={formElementStyle} id="outlined-password-input" label="Senha" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "password")}}/>
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