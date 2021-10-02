import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './NewCardForm.css';
import "@fontsource/lato";

const formElementStyle: object = {
  margin: '15px 0px 0px 0px'
}

class NewCardForm extends Component {

  render() {
    return (
      <div className="RegisterForm">
        <p className="RegisterFormTitle">Crie sua conta</p>
        <form className="Form" noValidate autoComplete="off">
          <TextField sx={formElementStyle} id="newcard-form-title" label="Título" variant="outlined" />
          <TextField sx={formElementStyle} id="newcard-form-description" label="Description" variant="outlined" />
          <button className="RegisterButton" style={formElementStyle} type="submit">
            Registrar!
          </button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;