import React from "react";
import PhotoGrid from '../../imgs/photo-grid.svg'
import './style.css'

export default function Hero(){
    return (
        <section className="hero">
            <img src={PhotoGrid} alt="Photo grid" className="hero-photo-grid"/>
            <div className="hero-informations">
                <h1 className="hero-informations--title">Online Experiences</h1>
                <h2 className="hero-informations--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
            </div>
        </section>
    )
}