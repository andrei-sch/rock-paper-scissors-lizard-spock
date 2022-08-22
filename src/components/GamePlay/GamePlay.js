import React, { useState } from 'react'
import './GamePlay.css'

import rockcircle from "../../Assets/rock-circle.svg"
import papercircle from "../../Assets/paper-circle.svg"
import scissorscircle from "../../Assets/scissors-circle.svg"
import lizardcircle from "../../Assets/lizard-circle.svg"
import spockcircle from "../../Assets/spock-circle.svg"

function GamePlay() {

    const [turnsLeft, setTurnsLeft] = useState(10)
    const [yourCurrentScore, setYourCurrentScore] = useState(0)
    const [computerCurrentScore, setComputerCurrentScore] = useState(0)
    const [turnMessage, setTurnMessage] = useState("paper covers rock")
    const [yourChoice, setYourChoice] = useState("rock")
    const [computerChoice, setComputerChoice] = useState("rock")
    const [gameOver, setGameOver] = useState(false)

  return (
    <section className='game-container'>
        <div className="turns-left"><p>turns left: {turnsLeft}</p></div>
        <div className="current-score">
            <span id="my-current-score">{yourCurrentScore}</span>
            <span id="colon-current-score">:</span>
            <span id="computer-current-score">{computerCurrentScore}</span>
        </div>
        <div className="in-game-turn-message"><p>{turnMessage}</p></div>
        <div className="chosen-options-wrapper">
            <div className="my-chosen-sign">
                <span className="my-chosen-sign-text">you</span>
                <img src={`../images/${yourChoice}.svg`} alt={yourChoice} className="my-chosen-sign-image" />
            </div>
            <div className="computer-chosen-sign">
                <img src={`../images/${computerChoice}.svg`} alt={computerChoice} className="computer-chosen-sign-image" />
                <span className="computer-chosen-sign-text">computer</span>
            </div>
        </div>
        <div className="pick-an-option-buttons">
            <img src={rockcircle} alt="rockcircle" className='img-circle-options' />
            <img src={papercircle} alt="papercircle" className='img-circle-options' />
            <img src={scissorscircle} alt="scissorscircle" className='img-circle-options' />
            <img src={lizardcircle} alt="lizardcircle" className='img-circle-options' />
            <img src={spockcircle} alt="spockcircle" className='img-circle-options' />
        </div>
    </section>
  )
}

export default GamePlay