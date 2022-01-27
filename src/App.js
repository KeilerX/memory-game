import { useEffect, useState } from 'react'
import './App.css'
import CardGrid from './components/card-grid/CardGrid'

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

//ZIP WITH PASS
/* const cardImages = [
  { "src": "/img2/01.jpg", matched: false },
  { "src": "/img2/02.jpg", matched: false },
  { "src": "/img2/03.jpg", matched: false },
  { "src": "/img2/04.jpg", matched: false },
  { "src": "/img2/05.jpg", matched: false },
  { "src": "/img2/06.jpg", matched: false },
  { "src": "/img2/rodrigo.jpg", matched: false },
  { "src": "/img2/08.png", matched: false },
] */

const cover = "/img/cover.png"
const coverSONR = "/img2/cover.png" //Param for CardGrid

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [restart, setRestart] = useState(false)

  //Shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, _id: Math.random() }))

    setCards(shuffleCards)
    setRestart(true)
    setTimeout(() => {
      setRestart(false)
    }, 0)
    setTurns(0)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardGrid 
        cards={cards}
        setTurns={setTurns}
        setCards={setCards}
        restart={restart}
        cover={cover}
      />
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
