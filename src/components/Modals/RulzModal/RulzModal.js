import React from 'react'
import ReactDOM from 'react-dom'
import "./RulzModal.css"
import rulez from "../../../Assets/rulezz.svg"

function RulzModal({open,onClose}) {
    
  return ReactDOM.createPortal(
    <>
        <div className='overlay-for-rulz-modal' onClick={onClose}></div>
        <div className='rulz-popup-wrapper'>
            <p className="close-modal-popup" onClick={onClose}>X</p>
            <img src={rulez} alt="Game rules" />
        </div>
    </>
    
    ,document.getElementById("portal")
  )
}

export default RulzModal