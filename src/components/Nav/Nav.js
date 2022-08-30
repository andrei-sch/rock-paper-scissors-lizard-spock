import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import RulzModal from "../Modals/RulzModal/RulzModal";
import "./Nav.css";

//Nav is the top header menu with logo and buttons

function Nav() {
  //holds the state of the Rules overlay
  const [isRulzModalOpen, setIsRulzModalOpen] = useState(false);

  //style for the active nav links
  //if a btn from nav is clicked, it stays red
  let activeStyle = {
    color: "#f00",
  };

  //useLocation returns the location object that contains information about the current URL 
  let location = useLocation();

  //it redirects to home page when you click 'new game'
  //it was needed to force reload the page when you are already on "/"
  const reloadPage = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  //isActive - is from React Router for <NavLink>; used for determining whether the link is active
  // <RulzModal> is a react portal that displays the overlay over the entire app with the game rules
  
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
          onClick={reloadPage}
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
          to="#"
          className="nav-links"
          // it opens the React Portal for the "rulz" overlay
          onClick={() => setIsRulzModalOpen(true)}
          end
        >
          rulz
        </NavLink>
      </section>
      {isRulzModalOpen ? (
        <RulzModal
          open={isRulzModalOpen}
          onClose={() => setIsRulzModalOpen(false)}
        />
      ) : null}
    </nav>
  );
}

export default Nav;
