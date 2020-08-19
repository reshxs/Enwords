import React from 'react'

function Card(prop){
    return (
        <div className="card" onClick={prop.onClick}>
            <h1>{ prop.card.title }</h1>
        </div>      
    )
}

export default Card