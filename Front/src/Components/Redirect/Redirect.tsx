import * as React from 'react';
import { Component } from 'react'
;
import './Redirect.css'
import {Link} from 'react-router-dom';

class Redirect extends Component<IPropRedirect>{

  render(){
    const redirectInfo = this.props

    return (
      <Link className="Link-golden" to={redirectInfo.url}>
        {redirectInfo.label}
      </Link>      
    );
  }

}

export default Redirect;