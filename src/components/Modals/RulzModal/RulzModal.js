import React from 'react'
import ReactDOM from 'react-dom'
import "./RulzModal.css"
import rulez from "../../../Assets/rulezz.svg"
import rulez1 from "../../../Assets/rulezz-1.svg"

function RulzModal({open,onClose}) {
    
  return ReactDOM.createPortal(
    <>
        <div className='overlay-for-rulz-modal' onClick={onClose}></div>
        <div className='rulz-popup-wrapper'>
            <p className="close-modal-popup" onClick={onClose}>X</p>
            <img src={rulez1} alt="Game rules" onClick={onClose} id="rulz-img"/>
        </div>
    </>
    
    ,document.getElementById("portal")
  )
}

export default RulzModal