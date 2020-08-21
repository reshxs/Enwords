import React from 'react'


function TranslatedCard (prop) {
    return (
        <div>
            <div className="translated-card">
                <h1 className="card-text">{ prop.card.translation }</h1>
            </div>
            <button className="button" style={{background: "#58f"}} onClick={prop.onNoClick}>
                <p className="button-text">OK</p>
            </button>
        </div>
    )
}

export default TranslatedCard