import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

import './MyCards.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class MyCards extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className="Container">
          <div className='MyCards'>
          </div>
        </div>
      </>
    );
  }
}

export default MyCards;