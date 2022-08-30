import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import "./EndGame.css"

// displays the React Portal overlay with the end game score and message

function EndGame({yourScore, compScore}) {

    let score = yourScore - compScore

    // colors for the endgame message 
    const lossStyle = {
        color: "#f00"
    }
    const winStyle = {
        color: "#1EA353" 
    }
    const drawStyle = {
        color: "#000"
    }

    // uses to restart the  game when you hit New Game
    const reloadPage = () => {
        window.location.reload();
    }

  return ReactDOM.createPortal (
    <>
        <div className='overlay-for-endgame-modal' ></div>
        <div className='endgame-popup-wrapper'>
            <p style={score === 0 ? drawStyle : (score > 0 ? winStyle : lossStyle)}>
                {/* endgame message */}
                It's a {score === 0 ? "draw" : (score > 0 ? "win" : "loss")}
            </p>
            <p>{yourScore} - {compScore}</p>
            <div className="endgame-screen-buttons">
                <Link to="/" className='endgame-btn-links' onClick={reloadPage}>new game</Link>
                <Link to="stats" className='endgame-btn-links'>stats</Link>
            </div>
        </div>

        {console.log("portal fired")}
    </>

    ,document.getElementById("gameoverportal")
  )
}

export default EndGame