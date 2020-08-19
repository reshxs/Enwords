import React from 'react'


function TranslatedCard (prop) {
    return (
        <div>
            <div className="card">
                <h1>{ prop.card.translation }</h1>
            </div>
            <span>
                {/* NO */}
                <button className="button" style={{background: '#f55'}} onClick={prop.onNoClick}>
                    &#65794;
                </button>
                
                {/* YES */}
                <button className="button" style={{background: '#5f5'}} onClick={prop.onNoClick}>
                    &#10003;
                </button>
            </span>
        </div>
    )
}

export default TranslatedCard