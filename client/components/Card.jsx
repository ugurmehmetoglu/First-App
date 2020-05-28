import React from 'react'
import '../../styles/card.css'




function Card(props) {

    return (
        <div class="main-container">
            <div  >
                <div className='product-card'><img src={props.imgURL} /></div>
                <div>
                    <div class="text-type">{props.type}</div>
                    <div class="text-name">{props.name}</div>
                    <div class="text-price" > ${props.price}</div>
                </div>
            </div>

        </div>
    )
}


export default Card;