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
        <p className="RegisterFormTitle">Registre um serviço</p>
        <form className="Form" noValidate autoComplete="off">
          <TextField sx={formElementStyle} id="newcard-form-title" label="Título" variant="outlined" />
          <TextField
            sx={formElementStyle}
            multiline
            id="newcard-form-desc"
            label="Descrição"
            rows={4}
          />
          <TextField sx={formElementStyle} id="newcard-form-category" label="Categoria" variant="outlined" />
          <button className="RegisterButton" style={formElementStyle} type="submit">
            Registrar!
          </button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;