import React from 'react'
import './GamePlay.css'
import rock from "../../Assets/rock.svg"
import rockcircle from "../../Assets/rock-circle.svg"
// import paper from "../../Assets/paper.svg"
import papercircle from "../../Assets/paper-circle.svg"
// import scissors from "../../Assets/scissors.svg"
import scissorscircle from "../../Assets/scissors-circle.svg"
// import lizard from "../../Assets/lizard.svg"
import lizardcircle from "../../Assets/lizard-circle.svg"
// import spock from "../../Assets/spock.svg"
import spockcircle from "../../Assets/spock-circle.svg"

function GamePlay() {
  return (
    <section className='game-container'>
        <div className="turns-left"><p>turns left: 7</p></div>
        <div className="current-score">
            <span id="my-current-score">3</span>
            <span id="colon-current-score">:</span>
            <span id="computer-current-score">1</span>
        </div>
        <div className="in-game-turn-message"><p>paper covers rock</p></div>
        <div className="chosen-options-wrapper">
            <div className="my-chosen-sign">
                <span className="my-chosen-sign-text">you</span>
                <img src={rock} alt="rock" className="my-chosen-sign-image" />
            </div>
            <div className="computer-chosen-sign">
                <img src={rock} alt="rock" className="computer-chosen-sign-image" />
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