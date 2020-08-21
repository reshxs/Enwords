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

  /* Function colled when user click on card */
  function click_card() {
    setCard({
        title: card.title, 
        translation: card.translation, 
        translated: !card.translated
      })
  }

  /* Functions switches card to another word */
  function switch_card() {
    setIndex(index + 1)

    if(index >= words.length - 1){
      setIndex(0)
    }

    console.log(index)

    setCard({
      title: words[index].title, 
      translation:words[index].translation, 
      translated: false
    })
  }

  /* Called when user click yes button */
  function click_yes() {
    switch_card()
  }

  /* Called when user clicks no button */
  function click_no() {
    switch_card()
  }

  return (
    <div className="App">
        <MenuBar />
        {
          !card.translated 
          ? <Card card={card} onClick={click_card}/>
          : <TranslatedCard 
              card={card} 
              onYesClick={click_yes}
              onNoClick={click_no}
              onClick={switch_card}
            />
        }
    </div>
  );
}

export default App
