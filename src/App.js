import React from 'react'
import MenuBar from './Menu/MenuBar'
import Card from './Cards/Card'
import TranslatedCard from './Cards/TranslatedCard'
import './App.css'

function App() {
  const words = require('./Dictionary/Dictionary.json')
  const [card, setCard] = React.useState({
      title: words[0].en, 
      translation:words[0].ru, 
      translated: false
    })
  const [index, setIndex] = React.useState(1)

  /* Function called when user click on card */
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
      title: words[index].en, 
      translation:words[index].ru, 
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
              onClick={switch_card  }
            />
        }
    </div>
  );
}

export default App
