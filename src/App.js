import React from 'react'
import MenuBar from './Menu/MenuBar'
import Card from './Cards/Card'
import TranslatedCard from './Cards/TranslatedCard'
import FlipCard from './Cards/FlipCard'
import './App.css'

function App() {
 return(
   <div className="App">
     <MenuBar/>
     <FlipCard/>
   </div>
 )
}

export default App
