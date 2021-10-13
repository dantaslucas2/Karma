import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Contracts from '../../API/ContractController';
import Section from '../../Components/Section/Section';
import './MyCards.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class MyCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards:[]
    }; 
  }
  componentDidMount(){
    const teste = {id_user: localStorage.getItem('id_user')}
    Contracts.getMyContract(teste.id_user).then(res => {
      console.log("teste",res)
      this.setState(prevState=> {
        prevState.cards = [res.data]
      console.log("est",this.state.cards)
      return prevState});
    });
  }
    
  render(){
    console.log("or",this.state.cards)
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