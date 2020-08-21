import React from 'react'
import CardBase from './CardBase'

function Card(prop){
    return (
        <div onClick={prop.onClick}>
            <CardBase title={prop.card.title} class="card"/>
        </div>      
    )
}

export default Card