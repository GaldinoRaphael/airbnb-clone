import React from "react";
import './style.css'
import AirbnbLogo from '../../imgs/airbnb-logo.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={AirbnbLogo} alt="Airbnb" />
        </nav>
    )
}