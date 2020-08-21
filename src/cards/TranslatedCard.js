import React from 'react'
import CardBase from './CardBase'


function TranslatedCard (prop) {
    return (
        <div onClick={prop.onClick}>
            <CardBase title={prop.card.translation} class="card nohover"/>

            <button className="button" style={{background: "#58f"}} onClick={prop.onNoClick}>
                <p className="button-text">OK</p>
            </button>
        </div>
    )
}

export default TranslatedCard