import { Component } from 'react';
import './Card.css'
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard'

class Card extends Component<IPropCard> {

    render(){
      const cardInfo = this.props

      return (
        <div className="Card">
          <RecipeReviewCard {...cardInfo}/>
        </div>
      );
    }
  
}

export default Card;