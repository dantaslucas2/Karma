import { Component } from 'react';
import Car from '../Carousel/Carousel'
import './Section.css';

class Section extends Component {

  render() {
    console.log("ai",this.props)
    const categorye = this.props
    const category = { title: "Cards", cards:categorye['0']}
    const ready = category.cards != undefined
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