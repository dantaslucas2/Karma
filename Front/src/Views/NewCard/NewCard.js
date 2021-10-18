import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import ServiceController from "../../API/ServiceController";
import UserSessionManagement from '../../API/Utils.js'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

import './NewCard.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

const formElementStyle = {
  margin: '15px 0px 0px 0px'
}

const currencies = [
  {
    value: '1',
    label: 'Programação',
  },
  {
    value: '2',
    label: 'Disciplinas da Faculdade',
  },
  {
    value: '3',
    label: 'Língua Estrangeira',
  },
  {
    value: '4',
    label: 'Outros',
  },
];

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formCard:{ 
        title: "",
        tag:2,
        points: 50,
        category: 0,
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

  createNewCard(NewCard){
    ServiceController.postcreateService(NewCard).then((res) => {
      this.setState(prevState=> {
        prevState.isFinished = true;
        store.addNotification({
          title: "Card criado com sucesso",
          message: "Agora divulgue para seus amigos!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
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
                 <TextField
                  sx={formElementStyle}
                  id="newcard-form-category"
                  select
                  label="Categoria"
                  value={this.state.category}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  onChange={(e) => {this.writeForm(e.target.value, "category")}}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
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