import React from "react";
import "./Results.css";
import playSomeGames from "../../../Assets/play-some-games-vulcan.svg";

function Results({ results, data }) {
  return (
    <>
      {console.log("results de aiciiiiii", results)}
      {(data === undefined || data.length === 0) && (
        <div className="empty-stats">
          <div className="play-some-games">
            <img src={playSomeGames} alt="play-some-games" />
          </div>
        </div>
      )}
      {results !== undefined && (
        <div className="overflowtest">
          <div className="results-section">
            {console.log("results from results component", results)}
            {results &&
              results
                .slice()
                .reverse()
                .map((item) => (
                  <p className="result" key={item.id}>
                    <span>{`${item.result} ${item.yourCurrentScore}-${item.computerCurrentScore}`}</span>
                    <span>{`${item.date}, ${item.time}`}</span>
                  </p>
                ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Results;
