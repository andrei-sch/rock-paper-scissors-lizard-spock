import React from 'react'
import "./Results.css"

function Results({data}) {

  return (
    <div className="results-section">
        {console.log("data from results component",data)}
        {data && data.slice().reverse().map((item) => (
          <p className="result" key={item.id}>
            <span>{`${item.result} ${item.yourCurrentScore}-${item.computerCurrentScore}`}</span>
            <span>{`${item.date}, ${item.time}`}</span>
          </p>
        ))}
      </div>
  )
}

export default Results