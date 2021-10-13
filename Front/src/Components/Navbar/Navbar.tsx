import { Component }from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoAddCircle, IoAddCircleOutline, IoLogOut, IoPersonCircleSharp } from "react-icons/io5";
import logo from '../../Assets/images/logo.png';
import './Navbar.css';
import Logg from '../../API/Utils'

class Navbar extends Component<{}, { click: boolean, button: boolean}> {

    constructor(props: any) {
      super(props);
      this.state = {
        click: false,
        button: true
      };
    }

    handleClick = () => {
      this.setState({click: !this.state.click})
    }

    closeMobileMenu = () => {
      this.setState({click: false})
    }

    showButton = () => {
      this.setState({button: window.innerWidth <= 960 ? false : true})
    }


    render(){
      return (
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo'>
                <img src={logo} />
            </Link>
            <IconContext.Provider value={{ color: "white" }}>
                <div className='menu-icon' onClick={this.handleClick}>
                  {this.state.click ? <FaTimes /> : <FaBars />}
                </div>
              
              <ul className={this.state.click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-btn'>
                <Link to='/new-card' className='nav-link'>
                    <IoAddCircleOutline/>
                  </Link>
                  <Link to='/profile' className='nav-link'>
                    <IoPersonCircleSharp />
                  </Link>
                  <Link to='/login'  onClick={Logg.logout} className='nav-link'>
                    <IoLogOut />
                  </Link>
                </li>
              </ul>
            </IconContext.Provider>
          </div>
        </div>
      );
    }
}

export default Navbar;