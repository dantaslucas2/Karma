import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './RegisterForm.css';
import "@fontsource/lato";

const formElementStyle: object = {
  margin: '15px 0px 0px 0px'
}

class RegisterForm extends Component {

  render() {
    return (
      <div className="RegisterForm">
        <p className="RegisterFormTitle">Crie sua conta</p>
        <form className="Form" noValidate autoComplete="off">
          <TextField sx={formElementStyle} id="form-register-name" label="Nome" variant="outlined" />
          <TextField sx={formElementStyle} id="form-register-email" label="Email" variant="outlined" />
          <TextField sx={formElementStyle} id="form-register-institution" label="Instituição" variant="outlined" />
          <TextField sx={formElementStyle} id="form-register-user" label="Usuário" variant="outlined" />
          <TextField sx={formElementStyle} id="outlined-password-input" label="Senha" type="password" autoComplete="current-password" variant="outlined" />
          <button className="RegisterButton" style={formElementStyle} type="submit">
            Registrar!
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;