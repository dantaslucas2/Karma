import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Redirect } from 'react-router-dom'
import './Register.css';
import '../../Components/Container/Container.css';
import TextField from '@material-ui/core/TextField';
import "@fontsource/lato";
import  UserController from "../../API/UserController";

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      formUser:{
        name:"",
        email:"",
        points:0,
        institution:"",
        password:"",
        user: ""
      },
      isFinished: false
    }; 
  }

  createNewUser(LogUser) {
    console.log("entrei")
    console.log(LogUser)
    UserController.postcreateUser(LogUser).then(res => {
      this.setState(prevState=> {
        prevState.isFinished = true;
        return prevState}
      )
    })
  }

  handleSubmit(event) {
    event.preventDefault();    
    this.createNewUser(this.state.formUser)
  }

  writeForm(value, label){
    this.setState(prevState => {
        if (value !== "") {
          prevState.formUser[label] = value
        }     
        return prevState;
    })
  }

  render(){
    if(this.state.isFinished){
      return <Redirect to="/login" />
    }
    return (
      <>
        <Navbar />
        <div className='Register'>
          <div className="Container">
            <div className='Register'>
              <div className="RegisterForm">
                <p className="RegisterFormTitle">Crie sua conta</p>
                <form className="Form" noValidate autoComplete="off" onSubmit={(e)=>this.handleSubmit(e)}>
                  <TextField sx={formElementStyle} id="form-register-name" label="Nome" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "name")}}/>
                  <TextField sx={formElementStyle} id="form-register-email" label="Email" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "email")}}/>
                  <TextField sx={formElementStyle} id="form-register-institution" label="Instituição" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "institution")}}/>
                  <TextField sx={formElementStyle} id="form-register-user" label="Usuário" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "user")}}/>
                  <TextField sx={formElementStyle} id="outlined-password-input" label="Senha" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "password")}}/>
                  <button className="RegisterButton" style={formElementStyle} type="submit">
                    Registrar!
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

export default Register;