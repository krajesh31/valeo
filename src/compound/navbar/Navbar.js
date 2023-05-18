import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { FaAdn, FaBars, FaBox, FaCogs, FaPhoneAlt, FaRust, FaWhatsapp, FaWindowClose, FaWonSign,FaCaretDown } from 'react-icons/fa';
import logo from '../img/logo2.png';
import '../css/navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {

  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" className="logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/facility"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Facility
              </NavLink>
            </li>
            {/* <li className="nav-item system-nav">
              <NavLink
                exact
                to=""
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >

<Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Product
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item ><Link to="/wire" className="drop-link"><FaWonSign className="m-2"/>Winding Wire</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/pv" className="drop-link"><FaRust className="m-2"/>Renewable Energy</Link></Dropdown.Item>
        <Dropdown.Item><Link  className="drop-link"><FaCogs className="m-2"/> Technical data</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/energy" className="drop-link"><FaCogs className="m-2"/> Packaging Option</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/quality" className="drop-link"><FaCogs className="m-2"/> Quality Assurance</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                exact
                to="/partners"
                activeClassName="active"
                className="nav-links"
                // onClick={click ? handleClick : null}
              >
                <div class="dropdown">
                  <button class="dropbtn"  id="dropdown-basic">Products<FaCaretDown/> </button>
                  <div class="dropdown-content">
                  <Link to="/wire" className="drop-link"  onClick={click ? handleClick : null}><FaWonSign className="m-2"/>Winding Wire</Link>
                  <Link to="/pv" className="drop-link"     onClick={click ? handleClick : null}><FaRust className="m-2"/>Renewable Energy</Link>
                  <Link to=""  className="drop-link"      onClick={click ? handleClick : null}><FaCogs className="m-2"/> Technical data</Link>  
                  <Link to="/energy" className="drop-link"    onClick={click ? handleClick : null}><FaBox className="m-2"/> Packaging Option</Link>
                  <Link to="/quality" className="drop-link" onClick={click ? handleClick : null}><FaAdn className="m-2"/> Quality Assurance</Link>
                  </div>
                </div>             
                 </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/partners"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Partners
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            <div>
              {click ? <FaWindowClose /> : <FaBars className="bar" />}
            </div>
          </div>
        </div>
      </nav>
      <div className="top-icons">
        <div className="top-div">
          <a href='http://Wa.me/+918000013445' target='_blank' class="google-plus"><FaWhatsapp className="top-whatsapp" /></a>
        </div>
        <div className="top-div2">
          <a href="tel://+918000013445" onclick="window.open('thispage.htm','_self';"><FaPhoneAlt className="top-phone" /></a>

        </div>
      </div>
    </ div>
  );
}

export default Navbar;