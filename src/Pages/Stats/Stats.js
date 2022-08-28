import React, { useState, useEffect } from "react";
import "./Stats.css";
import SearchBar from "./SearchBar/SearchBar";
import Results from "./Results/Results";
import ClearResults from "./ClearResults/ClearResults";

function Stats() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (localStorage.getItem("rpsls") != null) {
      setData(JSON.parse(localStorage.getItem("rpsls")));
    }
  }, []);

  console.log("data aoutside useeffect", data);

  useEffect(() => {
    if (searchTerm !== "" && data !== null) {
      console.log("searchTerm2144 ----->", searchTerm);
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
      setData(newData);
    } else {
      console.log("else triggered")
      setData(JSON.parse(localStorage.getItem("rpsls")));
    }
    console.log("data2144 ----> ", data);
  }, [searchTerm]);

  function clearStats() {
    localStorage.removeItem("rpsls");
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
      <Results data={data} />
      <ClearResults clearStats={clearStats} />
    </section>
  );
}

export default Stats;
