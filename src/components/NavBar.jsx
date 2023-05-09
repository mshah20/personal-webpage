import React, { useState, useEffect } from "react";
import './NavBar.css';
import logo from "../media/logo.png";

const NavBar = () => {

  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const controlNavbar = () => {

    const currentScrollY = window.scrollY;

    if(window.scrollY < 630) {
      setShowNav(true);
    }
    else if (currentScrollY > prevScrollY) {
      setShowNav(false);
    }
    else {
      setShowNav(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar)
  })

  return(
    <nav style={{display: showNav ? '' : 'none'}}>
      <a href="#welcome-body"><img src={logo} alt="Logo" className="logo"/></a>
      <ul>
        <li className="nav-link"><a href="#welcome-body"><b>Welcome</b></a></li>
        <li className="nav-link"><a href="#work-body"><b>Work</b></a></li>
        <li className="nav-link"><a href="#contact-body"><b>Contact</b></a></li>
      </ul>
    </nav>
  );
}

export default NavBar;