import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import './styles.css';


const cardImages = [
  '/images/i1.jpeg',
  '/images/i2.jpeg',
  '/images/i3.jpeg',
  '/images/i4.jpeg',
  '/images/i5.jpeg',
  '/images/i6.jpeg',
  '/images/i7.jpeg',
  '/images/i8.jpeg',
  '/images/i9.jpeg'
];


const shuffleCards = () => {
  const doubled = [...cardImages, ...cardImages];
  const shuffled = doubled
    .map((img) => ({ img, id: Math.random() }))
    .sort(() => 0.5 - Math.random());
  return shuffled;
};

function App() {
  const [cards, setCards] = useState(shuffleCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [player, setPlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].img)) return;
    setFlipped([...flipped, index]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIdx, secondIdx] = flipped;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.img === secondCard.img) {
        setMatched([...matched, firstCard.img]);
        setScores((prev) => ({
          ...prev,
          [player]: prev[player] + 1
        
        }));
      } else {
        setTimeout(() => setPlayer(player === 1 ? 2 : 1), 1000);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const isFlipped = (index) =>
    flipped.includes(index) || matched.includes(cards[index].img);

  const handleNewGame = () => {
    setCards(shuffleCards());
    setFlipped([]);
    setMatched([]);
    setScores({ 1: 0, 2: 0 });
    setPlayer(1);
  };


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleClick(index)}
            isFlipped={isFlipped(index)}
          />
        ))}
      </div>
      <div className="scoreboard">
        <p class="p">Player 1: {scores[1]}</p>
        <p class="p">Player 2: {scores[2]}</p>
        <p class="p">Current Turn: Player {player}</p>
        
      </div>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}

export default App;
