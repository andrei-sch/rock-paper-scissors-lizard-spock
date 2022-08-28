import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";
import SearchBar from "./SearchBar/SearchBar";
import Results from "./Results/Results";
import ClearResults from "./ClearResults/ClearResults";

function Stats() {
  const [data, setData] = useState()
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (localStorage.getItem("rpsls") != null) {
      setData(JSON.parse(localStorage.getItem("rpsls")));
    }
  }, []);

  useEffect(() => {
    console.log("undefined!!!!",data)
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
      console.log("newdata --- ",newData)
      setResults(newData);
    } else {
      // console.log("else triggered")
      setResults(data);
    }
    // console.log("data2144 ----> ", results);
  }, [searchTerm, data]);

  function clearStats() {
    localStorage.removeItem("rpsls");
    setResults([]);
    setData([]);
  }

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
      <Results data={results} />
      <ClearResults clearStats={clearStats} />
    </section>
  );
}

export default Stats;
