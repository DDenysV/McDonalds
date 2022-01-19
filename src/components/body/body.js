import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Card from '../card/card';
import Basked from '../basked/basked';
import ModalCard from '../modal-card/modal-card';
import './body.css';

function Body({menu, onLike, onAdd, onAddcount, onDellcount, basked, total, onModal, onClosedModal, modal, onAddModalcount, onDelModalcount, onModalBasked}) {
    return (<>
        <ModalCard onClosedModal = {onClosedModal}
                   onLike = {onLike}
                   modal = {modal}
                   menu = {menu}
                   onAddModalcount = {onAddModalcount}
                   onDelModalcount = {onDelModalcount}
                   onModalBasked = {onModalBasked}
                   onAdd = {onAdd}/>
        <Header/>
        <section className = 'main'>
            <div className="wrapper main-body">
                <ul className="nav">
                    <li className="nav-item nav-item-active">Акції</li>
                    <li className="nav-item">Бургери</li>
                    <li className="nav-item">Курка</li>
                    <li className="nav-item">Десерти</li>
                    <li className="nav-item">Напої</li>
                    <li className="nav-item">Соуси</li>
                </ul>
                <h1 className = 'title'>Акції</h1>
                <section className = 'main-menu'>{Array.isArray(menu)? menu.map((element, index) => {
                    return(<Card 
                        key = {index*2 + 'q'}
                        onModal = {onModal}
                        name = {element.productName} 
                        info = {element.ingredients} 
                        price = {element.price} 
                        productimg = {element.productImageUrl}
                        like = {element.like}
                        id = {element.id}
                        onLike = {onLike}
                        onAdd = {onAdd}/>)
                }):null}</section>
                <section className = 'second-menu'>
                    <p className = 'second-menu-title'>Ваше замовлення:</p>
                    <Basked basked = {basked} onAddcount = {onAddcount} onDellcount = {onDellcount}/>
                    <div className = 'delivering'>
                        <p className = 'delivering-text'>Доставка</p>
                        <p className = 'delivering-price'>50 ₴</p>
                    </div>
                    <button className = 'delivering-btn'>
                        <span>Замовити</span>
                        <span className = 'btn-price'>{`${(total > 0)? total + 50 :50} ₴`}</span>
                    </button>
                </section>
            </div>
        </section>
        <Footer/>
    </>)
}

export default Body