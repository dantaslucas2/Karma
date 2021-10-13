import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import LoginController from "../../API/LoginController";
import TextField from '@material-ui/core/TextField';
import './Login.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";
// @ts-nocheck

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idToken:"",
      token:"",
      isAuthenticated: false,
      formLogin:{
        user:"", 
        password:""}
    }; 
  }


  verificaLoginUser(LogUser) {
    LoginController.postLoginUser(LogUser).then(res => {
      console.log(res)
      this.setState(prevState=> {
          console.log(res)
          prevState.isAuthenticated = res.data.logado;
          prevState.token = res.data.data.data;
          prevState.idToken = res.data.data.idUser;
          return prevState}
      )
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
    if(this.state.token!==null && this.state.token!==""){
      localStorage.setItem("token", this.state.token)
      localStorage.setItem("id_user", this.state.idToken)
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