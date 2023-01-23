import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { images } from './import';

function App() {

  const [cards, setCards] = useState([]); 
  //chequear las cartas sean iguales
  const[fCard, setFCard] = useState({});
  const[sCard, setSCard] = useState({});

  //arreglo que tiene los numeros de las cartas que necesitan retornar a la pos original
  const[unflippedCard, setUnflippedC] = useState([]);
  //arreglo que tiene los numeros de las cartas que necesitan ser deshabilitadas (match)
  const[disabledCard, setDisabledC] = useState([]);

  //ayuda a desordenar las cartas
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  //aplica el shuffle
  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    match();
  }, [sCard]);

  //método para el volteo de las cartas
  const flipCard = (name, number) => {
    if(fCard.name === name && fCard.number === number){
      return 0;
      //volteando la misma carta 
    }

    if(!fCard.name) {
      setFCard({name, number});
    }
    else if (!sCard.name) {
      setSCard({ name, number});
    }
    return 1;
  }

  const match = () => {
    //asegurarme de que existan
    if(fCard.name && sCard.name) {
      const mmatch = fCard.name === sCard.name;
      mmatch ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    //las cartas que necesito deshabilitar y se resetean
    setDisabledC([fCard.number, sCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    //las cartas que no hacen match
    setUnflippedC([fCard.number, sCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFCard({});
    setSCard({});
  }

  return (
    <div className="App">
      <h1>Memory Card Game</h1>  
      <div className='cards-container'>
        {
          cards.map((card, index) => (
            <Card name={card.planet} 
            number={index}
            frontf={card.src}
            flipCard={flipCard}
            unflippedCard={unflippedCard}
            disabledCard={disabledCard}
            />
          ))
        }
      </div>
    </div> 
  );
}

export default App;
