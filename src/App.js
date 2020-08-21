import React from 'react'
import MenuBar from './menu/MenuBar'
import Card from './cards/Card'
import TranslatedCard from './cards/TranslatedCard'
import './App.css'

function App() {
  const [index, setIndex] = React.useState(0)

  const words = [
    {title: "car", translation: "машина"},
    {title: "fish", translation: "рыба"},
    {title: "stone", translation: "камень"},
    {title: "phone", translation: "телефон"},
    {title: "laptop", translation: "ноутбук"},
  ]

  const [card, setCard] = React.useState({
      title: words[index].title, 
      translation:words[index].translation, 
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
    setIndex(index + 1)

    if(index >= words.length - 1){
      setIndex(0)
    }

    setCard({
      title: words[index].title, 
      translation:words[index].translation, 
      translated: false
    })
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
