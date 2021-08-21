import * as React from 'react';
import { useState, useEffect } from 'react';
import './Section.css';
import Card from './Card';

const Section = (props: IPropSection) => {

    const category = props

    const cardInfo = category.cards[0]

    return (
        <div className="Section">
            <div className="SectionTitle">
                <h1>{category.title}</h1>
            </div>
            <div className="CardList">
                <ul>
                    <li>
                        <Card {...cardInfo} />
                    </li>
                </ul>
            </div>
        </div>
  );
}

export default Section;