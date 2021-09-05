import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Redirect.css'

class Redirect extends Component<IPropRedirect>{

  render(){
    const redirectInfo = this.props

    return (
      <Link to={redirectInfo.url}>
        <button className="Link-golden">
          {redirectInfo.label} 
        </button>
      </Link>
    );
  }
}

export default Redirect;