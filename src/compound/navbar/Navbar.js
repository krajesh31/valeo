import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaAdn, FaBars, FaBox, FaCogs, FaPhoneAlt, FaRust, FaWhatsapp, FaWindowClose, FaWonSign,FaCaretDown } from 'react-icons/fa';
import logo from '../img/logo2.png';
import '../css/navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  const [isShrunk, setShrunk] = useState(false);
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 120 ||
            document.documentElement.scrollTop > 120)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 60 &&
          document.documentElement.scrollTop < 60
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className={`navbar ${isShrunk ? 'shrink-header' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" className="logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={splitLocation[1] === "" ? "nav-item menu-item-selected" : "nav-item"}>
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
            <li className={splitLocation[1] === "about" ? "nav-item menu-item-selected" : "nav-item"}>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links nav-about"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className={splitLocation[1] === "facility" ? "nav-item menu-item-selected" : "nav-item"}>
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

            <li className={(splitLocation[1] === "wire" || splitLocation[1] === "Pv" || splitLocation[1] === "Energy" || splitLocation[1] === "Quality") ? "nav-item menu-item-selected" : "nav-item"}>
              {/* <NavLink
                exact
                to="/partners"
                activeClassName="active"
                className="nav-links"
                // onClick={click ? handleClick : null}
              > */}
                <div className="dropdown">
                  <button className="dropbtn"  id="dropdown-basic">Products<FaCaretDown/> </button>
                  <div className="dropdown-content">
                  <span className="drop-link"><FaWonSign className=" mx-2 my-3"/><a href="wire" onClick={click ? handleClick : null}>Winding Wire</a></span>
                  <span className="drop-link"><FaRust className="mx-2 my-3"/><a  href="Pv" onClick={click ? handleClick : null}>Renewable Energy</a></span>
                  <span className="drop-link"><FaCogs className="mx-2 my-3"/><a  href="/" onClick={click ? handleClick : null}>Technical data</a></span>  
                  <span className="drop-link"><FaBox className="mx-2 my-3"/><a href="Energy" onClick={click ? handleClick : null}>Packaging Option</a></span>
                  <span className="drop-link"><FaAdn className="mx-2 my-3"/><a href="Quality"> Quality Assurance</a></span>
                  </div>
                </div>             
                 {/* </NavLink> */}
            </li>


            <li className={splitLocation[1] === "partners" ? "nav-item menu-item-selected" : "nav-item"}>
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
            <li className={splitLocation[1] === "contact" ? "nav-item menu-item-selected" : "nav-item"}>
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
          <a href='http://Wa.me/+918000013445' target='_blank' className="google-plus"><FaWhatsapp className="top-whatsapp" /></a>
        </div>
        <div className="top-div2">
          <a href="tel://+918000013445"><FaPhoneAlt className="top-phone" /></a>

        </div>
      </div>
    </ div>
  );
}

export default Navbar;