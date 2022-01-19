import React from "react";
import nonelike from '../img/like-none.png'
import like from '../img/like.png'
import './modal-card.css'

function ModalCard({onClosedModal, modal, onLike, onAddModalcount, onDelModalcount, onModalBasked}) {
    return(<>
        <section className = 'modal-card' id = {`${modal.id}`}>
            <article className = 'top-info'>
                <div className = 'product-img'><img src = {`${modal.productImageUrl}`} alt = 'product'/></div>
                <div className = 'product-text'>
                    <p className = 'text-title'>{modal.productName}</p>
                    <p className = 'text-info'>{modal.ingredients}</p>
                </div>
                <div className = 'closed-modal'>
                    <button onClick = {onClosedModal}>X</button>
                </div>
            </article>
            <article className = 'botton-info'>
                <div className = 'modal-like'>
                    <img className = 'modal-like-img' src = {(modal.like == 0)? nonelike : like} alt = 'like' onClick = {onLike}/>
                    <p className = 'modal-texl-like'>{`${modal.like} користувачів додали в улюблене`}</p>
                </div>
                <div className = 'modal-count'>
                    <button className = 'modal-add-counter' onClick = {onAddModalcount}>+</button>
                    <span className = 'modal-counter-info'>{modal.counter}</span>
                    <button className = 'modal-del-counter' onClick = {onDelModalcount}>-</button>
                </div>
                <div className = 'modal-addbasked'>
                    <button onClick = {onModalBasked}>Додати  {`${modal.price * modal.counter} ₴`}</button>
                </div>
            </article>
        </section>
    </>)
}

export default ModalCard