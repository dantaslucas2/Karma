import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/FormLogin';

import './Login.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Login extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className='Login'>  
          <div className="Container">
            <div className='Login'>
              <LoginForm />
            </div>
          </div>
        </div>
      </>
    );
  }
  
}

export default Login;