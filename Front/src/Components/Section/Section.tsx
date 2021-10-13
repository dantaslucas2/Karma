import { Component } from 'react';
import Card from '../Card/Card';
import Car from '../../Components/Carousel/Carousel'
import './Section.css';

class Section extends Component<IPropSection> {

  render() {
    const categorye = this.props
    console.log(categorye)
    const category = {title:"Cards",cards:categorye['0']}
    const ready = category.cards != undefined
    console.log("ready",ready,category.cards)
    return (
      <div className="Section">
        <div className="SectionTitle">
          <p>{category.title}</p>
        </div>
        {ready ? <Car {...category} /> : <p>ainda n</p>}
      </div>
    );
  }
}

export default Section;