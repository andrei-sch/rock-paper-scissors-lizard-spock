import React from 'react'
import "./ClearResults.css"
import { Link } from "react-router-dom";


function ClearResults(props) {
  return (
    <div className="clear-stats-btn-wrapper">
        <Link to="#" onClick={props.clearStats} className="clear-stats-btn">
          clear stats
        </Link>
      </div>
  )
}

export default ClearResults