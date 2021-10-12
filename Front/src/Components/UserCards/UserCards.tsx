import { Component } from 'react';
import Section from '../../Components/Section/Section';
import { MockUserCards } from '../../data/Mock';

import './UserCards.css';
import "@fontsource/lato";

class UserCards extends Component {

  render() {
    return (
      <div className="DetailedCard">
        <div className="Body">
          <div className="Description">
            <Section {...MockUserCards} />
          </div>
        </div>
      </div>
      );
  }
}

export default UserCards;