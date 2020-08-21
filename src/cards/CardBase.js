import React from 'react'

function CardBase(props){
    return(
        <div className={props.class}>
            <h1 className="card-text">{ props.title }</h1>
        </div>
    )
}

export default CardBase