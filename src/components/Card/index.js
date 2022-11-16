import React from "react";
import './style.css';
import Star from '../../imgs/star.svg';


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../../imgs/${props.image}`)} alt="Katie" className="card-informations--photo" />
            <div className="card-informations">
                <img src={Star} alt="rating" />
                <span className="card-information--rating">{props.rating}</span>
                <span className="card-information--rating-info">{props.ratingNumberPeople}</span>
                <span className="card-information--rating-info">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-value">From ${props.value} / person</p>
        </div>
    )
}