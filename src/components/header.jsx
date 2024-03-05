import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../assets/dev-logo.svg'

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container-left">
        <div className="logo">
          <img src={logo} alt="logo" />

        </div>
        <h1>Anthony <div className="impact"> Yuen</div></h1>
      </div>
      <div className="header-container-right">
        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header