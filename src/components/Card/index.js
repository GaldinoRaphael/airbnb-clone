import React from "react";
import './style.css';
import Image from '../../imgs/katie.png';
import Star from '../../imgs/star.svg';


export default function Style(){
    return (
        <div className="card">
            <img src={Image} alt="Katie" className="card-informations--photo" />
            <div className="card-informations">
                <img src={Star} alt="rating" />
                <span className="card-information--rating">5.0</span>
                <span className="card-information--rating-info">(6) •</span>
                <span className="card-information--rating-info">USA</span>
            </div>
            <p className="card-title">Life lessons with Katie Zaferes</p>
            <p className="card-value">From $136 / person</p>
        </div>
    )
}