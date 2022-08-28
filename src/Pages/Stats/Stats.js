import React, { useState, useEffect } from "react";
import "./Stats.css";
import searchIcon from "../../Assets/search-icon.svg";
import closeIcon from "../../Assets/close-icon.svg";
import { Link } from "react-router-dom";

function Stats() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const keys = ["date", "result", "yourCurrentScore", "computerCurrentScore"]

  function search(dataSearch) {
    let updatedData = dataSearch.filter(item => 
      keys.some(key => String(item[key]).toLowerCase().includes(query))
    )
    // setData(updatedData)
    return updatedData
  }

  useEffect(() => {
    if (localStorage.getItem("rpsls") != null) {
      setData(JSON.parse(localStorage.getItem("rpsls")));
    }
    console.log("triggered useeffect 1001");
  }, []);

  function clearStats() {
    localStorage.removeItem("rpsls");
    setData([]);
  }

  function clearQuery() {
    setQuery("");
  }

  useEffect(()=>{
    setData(search(data))
  },[query])

  console.log(data)

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
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <img src={closeIcon} alt="closeIcon" onClick={clearQuery} />
      </div>
      <div className="results-section">
        {[...data].reverse().map((item) => (
          <p className="result" key={item.id}>
            <span>{`${item.result} ${item.yourCurrentScore}-${item.computerCurrentScore}`}</span>
            <span>{`${item.date}, ${item.time}`}</span>
          </p>
        ))}
      </div>
      <div className="clear-stats-btn-wrapper">
        <Link to="#" onClick={clearStats} className="clear-stats-btn">
          clear stats
        </Link>
      </div>
    </section>
  );
}

export default Stats;
