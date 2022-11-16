import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from './Card';
import CardData from '../data/data';


export default function App(){

    const cards = CardData.map(card =>{
        return (<Card
            key={card.id} 
            image={card.coverImg}
            rating={card.stats.rating}
            ratingNumberPeople={`(${card.stats.reviewCount}) •`}
            location={card.location}
            title={card.title}
            value={card.price}
            openSpots={card.openSpots}
        />)
    })

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <section className="cards-list">
             {cards}
            </section>
        </div>
    );
}