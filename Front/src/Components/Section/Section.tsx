import { Component } from 'react';
import Card from '../Card/Card';
import Car from '../../Components/Carousel/Carousel'
import './Section.css';

class Section extends Component<IPropSection> {

  render() {
    const category = this.props
    const cards = category.cards.map((card : IPropCard) => <li><Card {...card}/></li>)

    return (
      <div className="Section">
        <div className="SectionTitle">
          <p>{category.title}</p>
        </div>
        <Car {...category} />
      </div>
    );
  }
}

export default Section;