import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

function Nav() {

  function alertHandler(){
    alert("rules")
  }

  return (
    <nav>
      <div className="logo">
        <p id="logo-text">ROCK PAPER SCISSORS LIZARD SPOCK</p>
        <section className="nav-buttons-section">
          <NavLink to="/">New Game</NavLink>
          <NavLink to="stats">Stats</NavLink>
          <NavLink to="#" onClick={alertHandler}>Rulz</NavLink>
        </section>
      </div>
    </nav>
  )
}

export default Nav