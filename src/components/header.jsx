import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../assets/dev-logo.svg'

function Header() {
  return (
    <header>
      <div className="header-container-left">
        <div className="logo">
          <img src={logo} alt="logo" />

        </div>
        <h1>Anthony <div className="impact"> Yuen</div></h1>
      </div>
      <div className="header-container-right">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header