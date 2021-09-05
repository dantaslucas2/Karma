import { Component } from 'react';
import Section from '../../Components/Section/Section';
import Navbar from '../../Components/Navbar/Navbar';
import MockCategories from '../../data/Mock';

import './Feed.css';
import "@fontsource/lato"

class Feed extends Component {

  render() {

    const Sections: any = () => MockCategories.map((category: IPropSection) => <Section {...category} />)

    return (
      <div className="Feed">
        <Navbar />
        <div className="FeedSections">
          <Sections />
        </div>
      </div>
    );
  }
}

export default Feed;