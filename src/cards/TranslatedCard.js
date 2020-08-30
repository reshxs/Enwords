import React from 'react'
import CardBase from './CardBase'


function TranslatedCard (prop) {
    return (
        <div onClick={prop.onClick}>
            <CardBase title={prop.card.translation} class="card nohover"/>

            <span>
                {/* No button */}
                <button onClick={prop.onNoClick} className="red-button">
                    <p className="button-text">NO</p>
                </button>

                {/* Yes button */}
                <button onClick={prop.onYesclick} className="green-button">
                    <p className="button-text">OK</p>
                </button>
            </span>
        </div>
    )
}

export default TranslatedCard