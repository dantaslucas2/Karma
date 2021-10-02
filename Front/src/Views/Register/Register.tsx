import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

import './Register.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Register extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className='Register'>
          <div className="Container">
            <div className='Register'>
              <RegisterForm />
            </div>
          </div>
        </div>
      </>
    );
  }
  
}

export default Register;