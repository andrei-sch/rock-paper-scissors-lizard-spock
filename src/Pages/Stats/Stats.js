import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";
import SearchBar from "./SearchBar/SearchBar";
import Results from "./Results/Results";
import ClearResults from "./ClearResults/ClearResults";

//this displays the stats page when the Stats btn from the Nav component is clicked

function Stats() {
  const [data, setData] = useState();   // the data fetched from Local Storage
  const [results, setResults] = useState([]);   // the data that is actually displayed 
  const [searchTerm, setSearchTerm] = useState("");   //what you type in the searchbar

  //fetches the data from local storage
  useEffect(() => {
    if (localStorage.getItem("rpsls") != null) {
      setData(JSON.parse(localStorage.getItem("rpsls")));
    }
  }, []);

  // while you are typing in the searchbar, it filters the data and displays the results
  useEffect(() => {
    if (searchTerm !== "") {
      const newData = data.filter((item) => {
        return (
          item.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.yourCurrentScore
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.computerCurrentScore
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.date.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      console.log("newdata --- ", newData);
      setResults(newData);
    } else {
      // console.log("else triggered")
      setResults(data);
    }
    // console.log("data2144 ----> ", results);
  }, [searchTerm, data]);

  //deletes the stats from the localStorage
  function clearStats() {
    localStorage.removeItem("rpsls");
    setResults([]);
    setData([]);
  }

  // clears the input field
  function clearSearch() {
    setSearchTerm("");
  }

  return (
    <section className="stats-wrapper">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        clearSearch={clearSearch}
      />
      <Results results={results} data={data}/>
      {console.log("results spitted: ----",results)}
      {(results === undefined || results.length === 0) ? null : (<ClearResults clearStats={clearStats} />)}
    </section>
  );
}

export default Stats;
