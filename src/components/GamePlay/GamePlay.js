import React, { useState } from 'react'
import ImageGetter from '../ImageGetter/ImageGetter'
import './GamePlay.css'

function GamePlay() {

    const [turnsLeft, setTurnsLeft] = useState(10)
    const [yourCurrentScore, setYourCurrentScore] = useState(0)
    const [computerCurrentScore, setComputerCurrentScore] = useState(0)
    const [turnMessage, setTurnMessage] = useState("paper covers rock")
    const [yourChoice, setYourChoice] = useState("rock")
    const [computerChoice, setComputerChoice] = useState("rock")
    const [gameOver, setGameOver] = useState(false)

    const choices = ['rock','paper','scissors','lizard','spock']



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
                <ImageGetter name={`${yourChoice}`} classStyle={'my-chosen-sign-image'} />
            </div>
            <div className="computer-chosen-sign">
                <ImageGetter name={`${computerChoice}`} classStyle={'computer-chosen-sign-image'} />
                <span className="computer-chosen-sign-text">computer</span>
            </div>
        </div>
        <div className="pick-an-option-buttons">

            {choices.map(choice => {
                return <ImageGetter name={`${choice}-circle`} classStyle={'img-circle-options'} />
            })}

            {/* <img src={rockcircle} alt="rockcircle" className='img-circle-options' />
            <img src={papercircle} alt="papercircle" className='img-circle-options' />
            <img src={scissorscircle} alt="scissorscircle" className='img-circle-options' />
            <img src={lizardcircle} alt="lizardcircle" className='img-circle-options' />
            <img src={spockcircle} alt="spockcircle" className='img-circle-options' /> */}
        </div>
    </section>
  )
}

export default GamePlay