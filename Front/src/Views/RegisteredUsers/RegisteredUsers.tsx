import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

import './RegisteredUsers.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class RegisteredUsers extends Component<any,any> {

  render(){
    const { id } = this.props.match.params;
    return (
      <>
        <Navbar />
        <div className="Container">
          <div className='RegisteredUsers'>
            <h1>{id}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default RegisteredUsers;