import React from "react";
import './style.css';
import Star from '../../imgs/star.svg';


export default function Card({item}){
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../../imgs/${item.coverImg}`)} alt="Katie" className="card-informations--photo" />
            <div className="card-informations">
                <img src={Star} alt="rating" />
                <span className="card-information--rating">{item.stats.rating}</span>
                <span className="card-information--rating-info">{item.stats.reviewCount}</span>
                <span className="card-information--rating-info">{item.location}</span>
            </div>
            <p className="card-title">{item.title}</p>
            <p className="card-value">From ${item.price} / person</p>
        </div>
    )
}