import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RulzModal from "../Modals/RulzModal/RulzModal";
import "./Nav.css";


function Nav() {

  const [isRulzModalOpen, setIsRulzModalOpen] = useState(false)

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
          onClick={()=>setIsRulzModalOpen(true)}
          end
        >
          rulz
        </NavLink>
      </section>
      {isRulzModalOpen ? <RulzModal open={isRulzModalOpen} onClose={()=>setIsRulzModalOpen(false)}/> : null}
    </nav>
  );
}

export default Nav;
