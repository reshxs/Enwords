import React from 'react'
import Card from './Card'
import TranslatedCard from './TranslatedCard'
import ReactCardFlip from 'react-card-flip'

function FlipCard() {
    const words = require('../Dictionary/Dictionary.json')
    const [isFlipped, setState] = React.useState(false)
    
    /* Function return random index from range of words list */
    function getRandomIndex() {
        return Math.round(Math.random() * words.length)
    }

    const [index, setIndex] = React.useState(getRandomIndex())
    const [card, setCard] = React.useState({
        title: words[index].en, 
        translation:words[index].ru, 
    })

    /* Functions switches card to another word */
    function switch_card() {
        setIndex(getRandomIndex())

        setCard({
            title: words[index].en, 
            translation:words[index].ru, 
            translated: false
        })
    
        /* Remove this after debug!!!!! */
        console.log(index)
    }

    function handleYesClick() {
        setState(!isFlipped)
        switch_card()
    }

    function handleNoClick() {
        setState(!isFlipped)
        switch_card()
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card card={card} onClick={() => setState(!isFlipped)}/>
            <TranslatedCard card={card} onYesClick={handleYesClick} onNoClick={handleNoClick}/>
        </ReactCardFlip>
    )
}

export default FlipCard
