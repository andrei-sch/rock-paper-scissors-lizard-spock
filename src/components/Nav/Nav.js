import React from 'react'
import { BrowserRouter as Router, Link,NavLink,Routes,Route } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="logo">
        <p id="logo-text">ROCK PAPER SCISSORS LIZARD SPOCK</p>
        <section className="nav-buttons-section">
          
        </section>
      </div>
    </nav>
  )
}

export default Nav