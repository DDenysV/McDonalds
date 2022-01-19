import React from "react";
import './basked.css'

function Basked({basked, onAddcount, onDellcount}) {
        return (<>
        {(basked.length) > 0? basked.map((element, index)=>{
            return (
                <div className = 'basked' key = {index*2+'w'} id = {element.id}>
                    <p className = 'name-position'>{element.productName}</p>
                    <button className = 'btn-position add-position' onClick = {onAddcount}>+</button>
                    <span className = 'count-position'>{element.count}</span>
                    <button className = 'btn-position del-position' onClick = {onDellcount}>-</button>
                    <p className = 'price-position'>{element.count * element.price} ₴</p>
                </div>
            )
        }):null}
            
        </>)
}

export default Basked