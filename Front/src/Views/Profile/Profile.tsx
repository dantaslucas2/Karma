import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileBox from '../../Components/ProfileBox/ProfileBox';

import './Profile.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Profile extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className="Profile">
          <div className="Container">
            <ProfileBox />
          </div>
        </div>
      </>
    );
  }
}

export default Profile;