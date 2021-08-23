import { Component } from 'react';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard'
import './Card.css'

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