import React, { useEffect, useState } from 'react'
import './CardGrid.css'
import Card from '../card/Card'

export default function CardGrid({ cards, setTurns, setCards, restart, cover }) {
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [prevCard, setPrevCard] = useState(null)

  const handleChoice = (card) => {
    (choiceOne && prevCard !== card) ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if(choiceOne) {
      setPrevCard(choiceOne)
    }
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      compareSelection()
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    if(restart) {
      setChoiceOne(null)
      setChoiceTwo(null)
      setPrevCard(null)
    }

  }, [restart])

  const compareSelection = () => {
    if(choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if(card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(() => {
        resetTurn()
      }, 1000)
    }
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setPrevCard(null)
    //Increase turns
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="card-grid">
      {cards && cards.map(card => (
        <Card 
          key={card._id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          cover={cover}
          />
      ))}
    </div>
  );
}

