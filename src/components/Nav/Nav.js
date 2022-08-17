import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  function alertHandler() {
    alert("rules");
  }

  let activeStyle = {
    color: "#f00",
  };

  return (
    <nav>
      <section className="nav-logo-section">
        <p id="logo-text">ROCK PAPER SCISSORS LIZARD SPOCK</p>
      </section>
      <section className="nav-buttons-section">
        <NavLink
          to="/"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          new game
        </NavLink>
        <NavLink
          to="stats"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          stats
        </NavLink>
        <NavLink
          to="#rulz"
          className="nav-links"
          // style={({ isActive }) => (isActive ? activeStyle : undefined)} TBD
          onClick={alertHandler}
          end
        >
          rulz
        </NavLink>
      </section>
    </nav>
  );
}

export default Nav;
