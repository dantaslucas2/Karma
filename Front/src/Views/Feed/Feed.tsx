import * as React from 'react';
import { useState, useEffect } from 'react';
import './Feed.css';
import Section from '../../Components/Section';

const MockCategories: Array<IPropSection> = [
  {
    title: "A",
    cards: [
      {
        title: "CardA",
        description: "Dou aulas de Python"
      },
    ]
  }
]

const Feed = () => {

  const Sections: any = () => MockCategories.map((category: IPropSection) => <Section {...category} />)

  return (
    <div className="Feed">
      <Sections />
    </div>
  );
}

export default Feed;