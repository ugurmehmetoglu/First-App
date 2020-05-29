import React from 'react'
import '../../styles/card.css'




function Card(props) {

    return (
        <div className="main-container">
            <div  >
                <div className='product-card'><img src={props.imgURL} /></div>
                <div>
                    <div className="text-type">{props.type}</div>
                    <div className="text-name">{props.name}</div>
                    <div className="text-price" > ${props.price}</div>
                </div>
            </div>

        </div>
    )
}


export default Card;