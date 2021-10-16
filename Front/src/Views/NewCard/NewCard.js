import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import ServiceController from "../../API/ServiceController";
import UserSessionManagement from '../../API/Utils.js'

import './NewCard.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formCard:{ 
        title: "",
        tag:2,
        points: 50,
        category:"",
        description:"",
        status:0,
        type_service:"generico",
        id_owner:0
      },
      isFinished: false
    }; 
  }

  componentDidMount(){
    const id_user = parseInt(localStorage.getItem('id_user'))
    this.setState(prevState => {
        prevState.formCard.id_owner = id_user;
        return prevState
    })
  }

  createNewCard(LogUser){
    ServiceController.postcreateService(LogUser).then((res) => {
      this.setState(prevState=> {
        prevState.isFinished = true;
        return prevState}
      )
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createNewCard(this.state.formCard)
  }

  writeForm(value, label){
    this.setState(prevState => {
        if (value !== "") {
          prevState.formCard[label] = value
        }     
        return prevState;
    })
  }

  render(){
    if(!UserSessionManagement.isLoggedIn()){
      return <Redirect to="/login" />
    }

    if(this.state.isFinished){
      return <Redirect to="/feed" />
    }

    return (
      <>
        <Navbar />
        <div className='NewCard'>
          <div className="Container">
            <div className='NewCard'>
            <div className="RegisterForm">
              <p className="RegisterFormTitle">Registre um serviço</p>
              <form className="Form" noValidate autoComplete="off" onSubmit={(e)=>this.handleSubmit(e)}>
                <TextField sx={formElementStyle} id="newcard-form-title" label="Título" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "title")}}/>
                <TextField
                  sx={formElementStyle}
                  multiline
                  id="newcard-form-desc"
                  label="Descrição"
                  rows={4}
                  onChange={(e) => {this.writeForm(e.target.value, "description")}}/>
                <TextField sx={formElementStyle} id="newcard-form-category" label="Categoria" variant="outlined" onChange={(e) => {this.writeForm(e.target.value, "category")}}/>
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