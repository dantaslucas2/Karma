import { Component } from 'react';
import './Section.css';
import Card from '../Card/Card';

class Section extends Component<IPropSection> {

  render() {
    const category = this.props
    const cards = category.cards.map((card : IPropCard) => <li><Card {...card}/></li>)

    return (
      <div className="Section">
        <div className="SectionTitle">
          <p>{category.title}</p>
        </div>
        <div className="CardList">
          <ul>
            {cards}
          </ul>
         </div>
      </div>
    );
  }
}

export default Section;