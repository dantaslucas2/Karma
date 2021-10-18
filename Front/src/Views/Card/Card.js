import { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Services from '../../API/ServiceController';
import Contract from '../../API/ContractController';
import User from '../../API/UserController';
import './Card.css';
import '../../Components/Container/Container.css';
import "@fontsource/lato";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

class Login extends Component {
  
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
      id: 0,
      owner_email: ""
    }; 
  }

  
  componentDidMount(){
    this.state.id =  this.props.match.params;
    this.GetCardInfo(this.state.id)
  }

  GetCardInfo(id) {
    try{
    Services.getindexService(id.id).then(res => {
      User.getindexUser(res.data[0].id_owner).then(res => {
        this.setState(prevState => {
          prevState.owner_email = res.data[0].email
          return prevState
        })
      })
      this.setState(prevState=> {
        prevState.card = [res.data[0]][0];
        prevState.ready = true;
        return prevState}
    )})
    } catch(ex){
      console.log(ex)
    }
  }

  Subscribe(){
    const NewContract = { points: 0, id_service: parseInt(this.state.id.id), id_request: parseInt(localStorage.getItem('id_user'))}
    Contract.postcreateContract(NewContract).then(res => {
      store.addNotification({
        title: "Inscrição feita com sucesso",
        message: "Agora aguarde o contato!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    })
  }

  getBackgroundImage(category) {
    if(category == 1){
      return "https://www.showmetech.com.br/wp-content/uploads/2018/11/python.jpeg"
    }else if(category == 2){
      return "https://image.shutterstock.com/image-vector/creative-vector-illustration-math-equation-260nw-1328295644.jpg"
    }
    return "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3084114:1620687063/ufrj.jpg"
  }

  render(){
    const id = this.props.match.params;
    const card = this.state.card;
    const cardImage = this.getBackgroundImage(card.category)
    return (
      <>
        <Navbar />
        <div className="ViewCard">
          <div className="Container">
          <div className="DetailedCard">
            <div className="Header" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `linear-gradient(transparent, rgba(0, 10, 0, 0.9)), url(` + cardImage + `)`}}>
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
                  <button className="LoginButton" type="submit" onClick={() => this.Subscribe()}>
                    Me inscrever
                  </button>
                </div>
              </div>
              <div className="Metadata">
                <div className="CreationTime">
                  <p>Data de criação: {new Date(card.createdAt).toLocaleDateString('pt-PT')} </p>
                </div>
                <div className="Tags">
                  <p>Tags</p>
                </div>
                <div className="Owner">
                  <p>Criado por: {this.state.owner_email}</p>
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