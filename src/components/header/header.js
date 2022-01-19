import React from "react";
import logo from '../img/logo.png';
import Select from 'react-select';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './header.css';

function Header () {
    let options = [
        {value: 'Киев', label: 'Киев'},
        {value: 'Харьков', label: 'Харьков'},
        {value: 'Одесса', label: 'Одесса'},
        {value: 'Днепр', label: 'Днепр'},
        {value: 'Запорожье', label: 'Запорожье'},
        {value: 'Львов', label: 'Львов'},
        {value: 'Кривой Рог', label: 'Кривой Рог'},
        {value: 'Житомир', label: 'Житомир'},
        {value: 'Тернополь', label: 'Тернополь'},
    ]

    return(<>
        <section className="header">
            <div className="wrapper">
                <div className="header-body">
                    <action className = 'header-logo'>
                        <img src = {logo} alt = 'logo'/>
                        <Select options = {options} placeholder = 'Вкажіть Ваше місто...' className = 'city-input'/>
                    </action>
                    <action>
                        <button type="button" className="header-btn login-btn">Увійти</button>
                        <button type="button" className="header-btn basked-btn">Кошик</button>
                    </action>
                </div>
            </div>
        </section>
        <section className = 'header-bottom'>
            <div className="wrapper">
                <h2 className="header-title">Макдональдз</h2>
            </div>
        </section>
    </>)
}

export default Header