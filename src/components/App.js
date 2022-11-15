import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from './Card';


export default function App(){
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Card 
                image='katie.png'
                rating='5.0'
                ratingNumberPeople='(6) •'
                country='USA'
                title='Life lessons with Katie Zaferes'
                value='From $136 / person'
            />
        </div>
    );
}