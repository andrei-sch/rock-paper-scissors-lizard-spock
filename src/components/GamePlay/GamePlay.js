import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import Moment from "react-moment";
import uuid from "react-uuid";
import ImageGetter from "../ImageGetter/ImageGetter";
import ImageGetterBtn from "../ImageGetter/ImageGetterBtn";
import EndGame from "../Modals/EndGame/EndGame";
import "./GamePlay.css";

function GamePlay() {
  const [turnsLeft, setTurnsLeft] = useState(10);
  const [yourCurrentScore, setYourCurrentScore] = useState(0);
  const [computerCurrentScore, setComputerCurrentScore] = useState(0);
  const [turnMessage, setTurnMessage] = useState(
    "best score of 10 turns wins!"
  );
  const [yourChoice, setYourChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showDelayedComponent, setShowDelayedComponent] = useState(false)

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const handleClickOption = (choice) => {
    setYourChoice(() => choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const item = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(() => item);
    setTurnsLeft((prev) => prev - 1);
  };


  gameOver && (setTimeout(()=>{
    console.log("FIRED!!!")
    setShowDelayedComponent(true)
  },1500))


  useEffect(() => {
    const comboPick = yourChoice + computerChoice;

    switch (comboPick) {
      case "rockrock":
        setTurnMessage("rock vs rock. Tie!");
        setYourCurrentScore((prev) => prev + 1);
        setComputerCurrentScore((prev) => prev + 1);
        console.log("rockrock");
        break;
      case "paperpaper":
        setTurnMessage("paper vs paper. Tie!");
        setYourCurrentScore((prev) => prev + 1);
        setComputerCurrentScore((prev) => prev + 1);
        console.log("paperpaper");
        break;
      case "scissorsscissors":
        setTurnMessage("scissors vs scissors. Tie!");
        setYourCurrentScore((prev) => prev + 1);
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "spockspock":
        setTurnMessage("spock vs spock. Tie!");
        setYourCurrentScore((prev) => prev + 1);
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "lizardlizard":
        setTurnMessage("lizard vs lizard. Tie!");
        setYourCurrentScore((prev) => prev + 1);
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "rockscissors":
        setTurnMessage("rock crushes scissors");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "rocklizard":
        setTurnMessage("rock crushes lizard");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "rockpaper":
        setTurnMessage("paper covers rock");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "rockspock":
        setTurnMessage("spock vaporizes rock");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "paperlizard":
        setTurnMessage("lizard eats paper");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "paperscissors":
        setTurnMessage("scissors cuts paper");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "paperrock":
        setTurnMessage("paper covers rock");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "paperspock":
        setTurnMessage("paper disproves spock");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "spockpaper":
        setTurnMessage("paper disproves spock");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "spocklizard":
        setTurnMessage("lizard poisons spock");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "spockrock":
        setTurnMessage("spock vaporizes rock");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "spockscissors":
        setTurnMessage("spock smashes scissors");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "scissorslizard":
        setTurnMessage("scissors decapitates lizard");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "scissorspaper":
        setTurnMessage("scissors cuts paper");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "scissorsrock":
        setTurnMessage("rock crushes scissors");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "scissorsspock":
        setTurnMessage("spock smashes scissors");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "lizardpaper":
        setTurnMessage("lizard eats paper");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "lizardspock":
        setTurnMessage("lizard poisons spock");
        setYourCurrentScore((prev) => prev + 1);
        break;
      case "lizardrock":
        setTurnMessage("rock crushes lizard");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      case "lizardscissors":
        setTurnMessage("scissors decapitates lizard");
        setComputerCurrentScore((prev) => prev + 1);
        break;
      default:
        break;
    }

    if (turnsLeft === 0) {
      setGameOver(true);
    }

    return () => {
      console.log("cleanup");
    };
  }, [yourChoice, computerChoice, turnsLeft]);

  useEffect(() => {
    
  // ---- local storage ----
  let time = moment();
  let resultScore = yourCurrentScore - computerCurrentScore;
  if (gameOver) {
    //prepare data for local storage
    const data = {
      id: uuid(),
      date: time.format("DD/MMMM/YYYY"),
      time: time.format("HH:mm"),
      yourCurrentScore,
      computerCurrentScore,
      result: resultScore === 0 ? "draw" : resultScore > 0 ? "win" : "loss",
    };
    //check to see if local storage exists for our data. if not, create it
    if (localStorage.getItem("rpsls") == null) {
      localStorage.setItem("rpsls", "[]");
    }
    //get old data and push it to our array
    let oldData = JSON.parse(localStorage.getItem("rpsls"));
    oldData.push(data);
    //and save it to localstorage
    localStorage.setItem("rpsls", JSON.stringify(oldData));
  }
  // ---- end localstorage -------
    
  }, [gameOver])
  

  return (
    <>
      {showDelayedComponent && (gameOver ? (
        <EndGame
          yourScore={yourCurrentScore}
          compScore={computerCurrentScore}
        />
      ) : null )}
      <section className="game-container">
        <div className="turns-left">
          <p>turns left: {turnsLeft}</p>
        </div>
        <div className="current-score">
          <span id="my-current-score">{yourCurrentScore}</span>
          <span id="colon-current-score">:</span>
          <span id="computer-current-score">{computerCurrentScore}</span>
        </div>
        <div className="in-game-turn-message">
          <p>{turnMessage}</p>
        </div>
        {turnsLeft === 10 ? (
          <div className="choose-your-weapon">
            <p>choose your weapon:</p>
          </div>
        ) : (
          <div className="chosen-options-wrapper">
            <div className="my-chosen-sign">
              <ImageGetter
                name={`${yourChoice}`}
                classStyle={"my-chosen-sign-image"}
              />
              <span className="my-chosen-sign-text">you</span>
            </div>
            <div className="computer-chosen-sign">
              <ImageGetter
                name={`${computerChoice}`}
                classStyle={"computer-chosen-sign-image"}
              />
              <span className="computer-chosen-sign-text">computer</span>
            </div>
          </div>
        )}
        {!gameOver && (<div className="pick-an-option-buttons">
          {choices.map((choice, index) => {
            return (
              <ImageGetterBtn
                name={`${choice}-circle`}
                classStyle={"img-circle-options"}
                classStyleBtn={"img-circle-options-btn"}
                key={index}
                handleClick={() => handleClickOption(choice)}
              />
            );
          })}

        </div>)}
        
      </section>
    </>
  );
}

export default GamePlay;
