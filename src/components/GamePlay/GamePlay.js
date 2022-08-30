import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import Moment from "react-moment";
import uuid from "react-uuid";
import ImageGetter from "../ImageGetter/ImageGetter";
import ImageGetterBtn from "../ImageGetter/ImageGetterBtn";
import EndGame from "../Modals/EndGame/EndGame";
import ChooseWeaponSpock from "../../Assets/choose-your-weapon-vulcan.svg"
import "./GamePlay.css";

// this component is actually the canvas where the game is played

function GamePlay() {
  const [turnsLeft, setTurnsLeft] = useState(10);   //keeping track of the turns left to 10
  const [yourCurrentScore, setYourCurrentScore] = useState(0);
  const [computerCurrentScore, setComputerCurrentScore] = useState(0);
  const [turnMessage, setTurnMessage] = useState(   //message shown in green after each turn
    "best score of 10 turns wins!"
  );
  const [yourChoice, setYourChoice] = useState("");  //your choice; helps fetching the image w/ your choice
  const [computerChoice, setComputerChoice] = useState(""); //computer choice; helps fetching the image w/ computer choice
  const [gameOver, setGameOver] = useState(false); //fires when it reaches 0 turns and the game is over; 
  const [showDelayedComponent, setShowDelayedComponent] = useState(false)   //fires the <EndGame> overlay and hides the other components that are used for playing the game

  // game choices
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  // fires when you click an option
  const handleClickOption = (choice) => {
    setYourChoice(() => choice);
    generateComputerChoice();
  };

  // generates computer choice
  const generateComputerChoice = () => {
    const item = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(() => item);
    setTurnsLeft((prev) => prev - 1);
  };

  // if the game is over fires the react portal with the endgame results overlay
  gameOver && (setTimeout(()=>{
    console.log("FIRED!!!")
    setShowDelayedComponent(true)
  },1500))

  // gameplay rules; who beats who
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

  //store turn data and results in local storage
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
      {showDelayedComponent && (gameOver ? (  //displays <EndGame> when the game ends
        <EndGame
          yourScore={yourCurrentScore}
          compScore={computerCurrentScore}
        />
      ) : null )}
      <section className="game-container">
        {/* turns left to play */}
        <div className="turns-left">
          <p>turns left: {turnsLeft}</p>
        </div>
        {/* current score section */}
        <div className="current-score">   
          <span id="my-current-score">{yourCurrentScore}</span>
          <span id="colon-current-score">:</span>
          <span id="computer-current-score">{computerCurrentScore}</span>
        </div>
        {/* in-game message */}
        <div className="in-game-turn-message">
          <p>{turnMessage}</p>
        </div>
        {turnsLeft === 10 ? (   //at the beginning of the game shows Vulcan telling u to pick an option
          <div className="choose-your-weapon">
            <img src={ChooseWeaponSpock} alt="choose-weapon-spock" />
          </div>
        ) : (             //  when you clicked an option, display the game components like current choice images
          <div className="chosen-options-wrapper">
            {/* my chosen sign image 
            <ImageGetter> fetches the image from /Assets folder 
            */}
            <div className="my-chosen-sign">
              <ImageGetter
                name={`${yourChoice}`}
                classStyle={"my-chosen-sign-image"}
              />
              <span className="my-chosen-sign-text">you</span>
            </div>
            {/* computer chosen sign image */}
            <div className="computer-chosen-sign">
              <ImageGetter
                name={`${computerChoice}`}
                classStyle={"computer-chosen-sign-image"}
              />
              <span className="computer-chosen-sign-text">computer</span>
            </div>
          </div>
        )}
        {/* if the game is not over, display the option-buttons images */}
        {!gameOver && (<div className="pick-an-option-buttons">
          {choices.map((choice, index) => {
            //             <ImageGetterBtn> fetches the image from /Assets folder and transforms it into a button
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
