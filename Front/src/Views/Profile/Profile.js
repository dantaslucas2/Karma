import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import ProfileBox from '../../Components/ProfileBox/ProfileBox';
import UserSessionManagement from '../../API/Utils.js'
import './Profile.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";
import User from '../../API/UserController'
import Section from '../../Components/Section/Section';
import { MockUserCards } from '../../data/Mock';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      awaitingResServices:false,
      asset:{
        title: "Cards",
        cards: []
      }
    }; 
  }

  componentDidMount(){
    this.ListCards()
  }

  ListCards() {
    User.getCardsindexUser(localStorage.getItem('id_user')).then(res => {
      this.setState(prevState=> {
        prevState.asset.cards = [res.data];
        prevState.awaitingResServices = true;
        console.log("asset",this.state.asset)
        console.log("MockUserCards", MockUserCards)
        return prevState}
      )
    })
  }

  render(){
    if(!UserSessionManagement.isLoggedIn()){
      return <Redirect to="/login" />
    }
    return (
      <>
        <Navbar />
        <div className="Profile">
          <div className="Container">
            <ProfileBox />
            <div className="DetailedCard">
              <div className="Body">
                <div className="Description">
                {(this.state.asset.cards !== undefined) ?
                  <Section {...MockUserCards} />
                  :
                  <></>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;