import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import DetailedCard from '../../Components/DetailedCard/DetailedCard';
import Services from '../../API/ServiceController'
import Contract from '../../API/ContractController'
import './Card.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

class Login extends Component<any,any>{
  
  constructor(props) {
    super(props);
    this.state = {
      contract: {
        points: 0,
        id_service: 0,
        id_request: 0
      },
      card: [],
      ready: false,
      id: 0
    }; 
  }

  
  componentDidMount(){
    this.state.id =  this.props.match.params;
    this.GetCardInfo(this.state.id)
  }

  GetCardInfo(id) {
    try{
    Services.getindexService(id.id).then(res => {
      console.log("olha",[res.data[0]][0])
      console.log(this.state)
      this.setState(prevState=> {
        prevState.card = [res.data[0]][0];
        prevState.ready = true;
        return prevState}
    )
    })} catch(ex){
      console.log(ex)
    }
  }

  teste(){
    console.log("cheguei",this.state.id)
    const NewContract = {points:0,id_service: parseInt(this.state.id.id), id_request: parseInt(localStorage.getItem('id_user'))}
    console.log("contrato",NewContract)
    try{
      Contract.postcreateContract(NewContract).then(res => {
        console.log("ok")
      })
    } catch(ex){
      console.log(ex);
    }
  }
  render(){
    const  id  = this.props.match.params;
    const card = this.state.card;
    return (
      <>
        <Navbar />
        <div className="ViewCard">
          <div className="Container">
          <div className="DetailedCard">
            <div className="Header">
              <p>{card.title}</p>
            </div>
            <div className="Body">
              <div className="Description">
                <p className="DescriptionTitle">
                  Descrição
                </p>
                <p className="DescriptionText">
                  {card.description}
                </p> 
                <div className="Actions">
                  <button className="LoginButton" type="submit" onClick={this.teste()}>
                    Me inscrever
                  </button>
                </div>
              </div>
              <div className="Metadata">
                <div className="CreationTime">
                  <p>Data de criação</p>
                </div>
                <div className="Tags">
                  <p>Tags</p>
                </div>
                <div className="Owner">
                  <p>Criado por: {card.id_owner}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;