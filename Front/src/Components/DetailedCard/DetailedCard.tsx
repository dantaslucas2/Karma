import { Component } from 'react';

import './DetailedCard.css';
import "@fontsource/lato";

class DetailedCard extends Component<any,any> {

  render() {
    const card = this.props;
    console.log("owcard",card)
    return (
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
              <button className="LoginButton" type="submit">
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
      );
  }
}

export default DetailedCard;