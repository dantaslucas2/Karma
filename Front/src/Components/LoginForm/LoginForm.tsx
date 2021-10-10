import { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import './LoginForm.css';
import "@fontsource/lato";

const formElementStyle: object = {
  margin: '15px 0px 0px 0px'
}

class LoginForm extends Component {

  render() {
    return (
      <div className="LoginForm">
        <p className="LoginFormTitle">Login</p>
        <form className="Form" noValidate autoComplete="off">
          <TextField sx={formElementStyle} id="outlined-basic" label="Email" variant="outlined" />
          <TextField sx={formElementStyle} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
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
    );
  }
}

export default LoginForm;