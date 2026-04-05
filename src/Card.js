import React from 'react';
import './styles.css';

function Card({ card, onClick, isFlipped }) {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? (
        <img src={card.img} alt="card front" className="card-front" />
      ) : (
        <div className="card-back" />
      )}
    </div>
  );
}

export default Card;
