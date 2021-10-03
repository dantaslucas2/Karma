import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import DetailedCard from '../../Components/DetailedCard/DetailedCard';

import './Card.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Login extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className="Container">
          <DetailedCard />
        </div>
      </>
    );
  }
  
}

export default Login;