import * as React from 'react';
import { useState, useEffect } from 'react';
import './Card.css'

const Card = (props: IPropCard) => {

    const category = props

  
    return (
        <div className="Card">
            <div className="CardHead">
                <h1>{props.title}</h1>
            </div>
            <div className="CardBody">
                <h2>{props.description}</h2>
            </div>
        </div>
  );
}

export default Card;