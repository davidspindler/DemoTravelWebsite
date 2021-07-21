import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items"> 
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/services" />

                    <CardItem 
                    src="images/img-2.jpg"
                    text="Travel through the Islands of Bali in a Private Cruise"
                    label="Luxury"
                    path="/services" />

                    </ul>
                    <ul className="cards_items"> 
                    <CardItem 
                    src="images/img-5.jpg"
                    text="Visit this elite dinner destination"
                    label="Adventure"
                    path="/services" />

                    <CardItem 
                    src="images/img-4.jpg"
                    text="Play basketball with your family on this private Island"
                    label="Luxury"
                    path="/services" />
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Travel through th eIslands of Bali in a Private Cruise"
                    label="Luxury"
                    path="/services" />

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
