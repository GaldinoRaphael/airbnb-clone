import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from './Card';
import CardData from '../data/data';


export default function App(){

    const cards = CardData.map(item =>{
        return (<Card
            key={item.id} 
            item={item}
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