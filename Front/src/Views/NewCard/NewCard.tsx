import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import NewCardForm from '../../Components/NewCardForm/NewCardForm';

import './NewCard.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Register extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className='NewCard'>
          <div className="Container">
            <div className='NewCard'>
              <NewCardForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;