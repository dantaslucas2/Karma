import { Component }from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgFeed } from "react-icons/cg";
import { IconContext } from "react-icons";
import { IoAddCircleOutline, IoLogOut, IoPersonCircleSharp } from "react-icons/io5";
import UserSessionManagement from '../../API/Utils.js'


import logo from '../../Assets/images/logo.png';
import Logg from '../../API/Utils'
import './Navbar.css';

class Navbar extends Component<{}, INavBarState> {

  constructor(props: any) {
    super(props);
    this.state = {
      click: false,
      button: true,
      logged: false
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

    const MenuOptions = () => 
      <ul className={this.state.click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-btn'>
            <Link to='/feed' className='nav-link'>
              { this.state.click ? <CgFeed/> : null }
              <span>Feed</span>
            </Link>
          </li>
          <li className='nav-btn'>
            <Link to='/new-card' className='nav-link'>
              { this.state.click ? <IoAddCircleOutline/> : null }
              <span>Criar Card</span>
            </Link>
          </li>
          <li className='nav-btn'>
            <Link to='/my-cards' className='nav-link'>
              { this.state.click ? <IoPersonCircleSharp /> : null }
              <span>Minhas Inscrições</span>
            </Link>
          </li>
          <li className='nav-btn'>
            <Link to='/login'  onClick={Logg.logout} className='nav-link'>
              { this.state.click ? <IoLogOut /> : null }
              <span>Logout</span>
            </Link>
          </li>
        </ul>

    if(!this.state.logged && UserSessionManagement.isLoggedIn()){
      this.setState({logged: true})
    }

    return (
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
              <img src={logo} />
          </Link>
          <IconContext.Provider value={{ color: "white" }}>
            <div className='menu-icon' onClick={this.handleClick}>
              { this.state.click ? <FaTimes /> : <FaBars />}
            </div>
              {this.state.logged ? <MenuOptions /> : <div></div> }
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default Navbar;