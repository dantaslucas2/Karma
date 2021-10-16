import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Section from '../../Components/Section/Section';
import Navbar from '../../Components/Navbar/Navbar';
import Services from '../../API/ServiceController'
import UserSessionManagement from '../../API/Utils.js'

import './Feed.css';
import '../../Components/Container/Container.css'
import "@fontsource/lato"

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset:[]
    }; 
  }

  componentDidMount(){
    this.ListService()
  }

  ListService() {
    Services.getlistService().then(res => {
      this.setState(prevState => {
          prevState.asset = [res.data];
          return prevState}
      )
    })
  }
  
  render() {
    if(!UserSessionManagement.isLoggedIn()){
      return <Redirect to="/login" />
    }
    
    const Sections = () => <Section {...this.state.asset} />
    
    return (
      <>
        <Navbar />
        <div className='Feed'>  
          <div className="Container">
            <Sections />
          </div>
        </div>
      </>
    );
  }
}

export default Feed;