import React from "react";
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';
import telegram from '../img/telegram.svg';
import './footer.css';

function Footer() {
    return (<>
        <section className="footer">
            <div className="wrapper footer-container">
                <article className="footer__menu">
                    <p className="footer__menu-item">Про нас</p>
                    <p className="footer__menu-item">Контакти</p>
                    <p className="footer__menu-item">Партнери</p>
                </article>
                <article className="footer__icon">
                    <div className="instagram-box"><img src={instagram} alt="instagram"/></div>
                    <div className="telegram-box"><img src={telegram} alt="telegram"/></div>
                    <div className="facebook-box"><img src={facebook} alt="facebook"/></div>
                </article>
            </div>
        </section>
    </>)
}

export default Footer