import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/dev-logo.svg'
import './header.css'

function Header() {
  // Burger Menu Things
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    
    // Close the hamburger menu when clicking outside of it
    const handleDocumentClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        document.querySelector('.burger-menu').classList.remove('open');
        document.querySelector('.nav-menu').classList.remove('open');
        toggleMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuRef, isMenuOpen]);


  return (
    <header>
      <div className="header-container-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Link to="/">
          <h1>Anthony <div className="impact"> Yuen</div></h1>
        </Link>
      </div>
      <div className="header-container-right">
        <div ref={menuRef} className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {/* Burger Menu Bars */}
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar-middle ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
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