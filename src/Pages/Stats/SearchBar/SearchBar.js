import React from 'react'
import "./SearchBar.css"
import searchIcon from "../../../Assets/search-icon.svg";
import closeIcon from "../../../Assets/close-icon.svg";

function SearchBar({searchTerm,setSearchTerm,clearSearch}) {
  return (
    <div className="search-bar-box">
        <img src={searchIcon} alt="searchIcon" />
        <input
          type="search"
          name="search"
          id="search"
          className="search-bar"
          placeholder="win, draw, august, 2022"
          value={searchTerm}
          onChange={e=>setSearchTerm(e.target.value)}
        />
        <img src={closeIcon} alt="closeIcon" onClick={clearSearch}/>
      </div>
  )
}

export default SearchBar