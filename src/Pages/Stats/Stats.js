import React from "react";
import "./Stats.css";
import searchIcon from "../../Assets/search-icon.svg";
import closeIcon from "../../Assets/close-icon.svg";
import { Link } from "react-router-dom";

function Stats() {
  let data = [];

  if (localStorage.getItem("rpsls") != null) {
    data = JSON.parse(localStorage.getItem("rpsls"));
  }

  function clearStats() {
    localStorage.removeItem("rpsls");
  }

  return (
    <section className="stats-wrapper">
      <div className="search-bar-box">
        <img src={searchIcon} alt="searchIcon" />
        <input
          type="search"
          name="search"
          id="search"
          className="search-bar"
          placeholder="win, draw, august, 2022"
        />
        <img src={closeIcon} alt="closeIcon" onClick={()=>{console.log("closed!")}} />
      </div>
      <div className="results-section">
        {data.reverse().map((item) => (
          <p className="result" key={item.id}><span>{`${item.result} ${item.yourCurrentScore}-${item.computerCurrentScore}`}</span><span>{`${item.date}, ${item.time}`}</span></p>
        ))}
      </div>
      <div className="clear-stats-btn-wrapper">
        <Link to='#' onClick={clearStats} className="clear-stats-btn">clear stats</Link>
      </div>
    </section>
  );
}

export default Stats;
