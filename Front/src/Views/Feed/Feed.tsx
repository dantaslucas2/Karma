import { Component } from 'react';
import Section from '../../Components/Section/Section';
import Navbar from '../../Components/Navbar/Navbar';
import MockCategories from '../../data/Mock';

import './Feed.css';
import '../../Components/Container/Container.css'
import "@fontsource/lato"

class Feed extends Component {

  render() {

    const Sections: any = () => MockCategories.map((category: IPropSection) => <Section {...category} />)

    return (
      <>
        <Navbar />
        <div className='Feed'>  
          <div className="Container">
            <Sections />
          </div>
        </div>
      </>
    );
  }
}

export default Feed;