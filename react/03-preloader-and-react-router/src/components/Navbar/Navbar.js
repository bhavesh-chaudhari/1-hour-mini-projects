import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = ()=>{

    const LinkStyle = {
        color : "white",
        textDecoration : "none"
    }

    return (
      <div className="navbar-container">
        <div className="navbar">
          <h2>Project 3</h2>
          <ul>
            <Link style={LinkStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={LinkStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={LinkStyle} to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;