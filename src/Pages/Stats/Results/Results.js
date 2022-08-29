import React from "react";
import "./Results.css";
import playSomeGames from "../../../Assets/play-some-games-vulcan.svg";

function Results({ data }) {
  return (
    <>
      {console.log("data de aiciiiiii", data)}
      {(data === undefined || data.length === 0) && (
        <div className="empty-stats">
          <div className="play-some-games">
            <img src={playSomeGames} alt="play-some-games" />
          </div>
        </div>
      )}
      {data !== undefined && (
        <div className="overflowtest">
          <div className="results-section">
            {console.log("data from results component", data)}
            {data &&
              data
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
