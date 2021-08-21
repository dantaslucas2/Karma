import * as React from 'react';
import { useState, useEffect } from 'react';
import './Button.css'

const Button = (props: IPropButton) => {

    return (
        <button className='button'>{props.label}</button>
  );
}

export default Button;