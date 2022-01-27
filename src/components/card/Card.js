import React from 'react'
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled, cover }) {
  const handleClick = () => {
    if(!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped": ""}>
        <img src={card.src} className="front" alt="card front"/>
        <img src={cover} className="back" alt="cover" onClick={handleClick} />
      </div>
    </div>
  );
};
