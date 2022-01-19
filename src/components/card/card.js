import React from "react";
import nonelike from '../img/like-none.png'
import likeimg from '../img/like.png'
import './card.css';

function Card({name, info, price, productimg, id, onLike, onAdd, onModal, like}){
    return (<>
        <div className = 'card-body'>
        <article className = 'card' id = {id}>
            <div className = 'card-photo'><img src = {productimg} alt = 'product' width = '230' height = '230'/></div>
            <div className = 'card-text'>
                <p className = 'product-name' onClick = {onModal}>{name}</p>
                <p className = 'product-info'>{info}</p>
                <div className = 'card-row'>
                    <div className = 'product-price'>{`${price} грн`}</div>
                    <button className = 'product-btn' onClick = {onAdd}>В корзину</button>
                    <p className = 'product-like' onClick={onLike}><img src = {(like == 0)? nonelike : likeimg} alt = 'like'/></p>
                </div>
            </div>
        </article>
        </div>
    </>)
}



export default Card