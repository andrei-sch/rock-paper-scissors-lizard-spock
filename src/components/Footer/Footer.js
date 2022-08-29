import React from 'react'
import './Footer.css'
import linkedin from "../../Assets/LinkedIn_black.png"
import github from "../../Assets/Github_black.png"
import gmail from "../../Assets/Gmail_black.png"

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-year-name">
          <span>Andrei Schrenck, 2022</span>
        </div>
        <div className="footer-social-media">
          <a href="http://linkedin.com"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="http://github.com"><img src={github} alt="GitHub" /></a>
          <a href="mailto:andrei.schrenck@gmail.com"><img src={gmail} alt="Mail" /></a>
        </div>
      </div>
      <div className="disclaimer">
        <p>**Spock images are taken from <i><a href='https://icons8.com'>icons8</a></i></p>
      </div>
    </footer>
  )
}

export default Footer