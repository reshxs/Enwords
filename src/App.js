import React from 'react';
import MenuBar from './menu/MenuBar'
import Card from './cards/Card'
import TranslatedCard from './cards/TranslatedCard'
import './App.css';

function App() {
  const [card, setCard] = React.useState({
      title: "Car", 
      translation:"Машина", 
      translated: false
    })

  function click_card() {
    setCard({
        title: card.title, 
        translation: card.translation, 
        translated: !card.translated
      })
  }

  function switch_card() {
  }

  return (
    <div className="App">
        <MenuBar />
        {
          !card.translated 
          ? (<Card card={card} onClick={click_card}/>) 
          : <TranslatedCard 
              card={card} 
              onYesClick={switch_card}
              onNoClick={switch_card}
            />
        }
    </div>
  );
}

export default App
