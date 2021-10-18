import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Contracts from '../../API/ContractController';
import Section from '../../Components/Section/Section.js';
import './MyCards.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class MyCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }; 
  }
  componentDidMount(){
    const user = { id_user: localStorage.getItem('id_user') }
    Contracts.getMyContract(user.id_user).then(res => {
      this.setState(prevState=> {
        prevState.cards = [res.data]
      return prevState});
    });
  }
    
  render(){
    const Sections = () => <Section {...this.state.cards} />
  
    return (
      <>
        <Navbar />
        <div className="Container">
          <div className='MyCards'>
          </div>
          <Sections />
        </div>
      </>
    );
  }
}

export default MyCards;