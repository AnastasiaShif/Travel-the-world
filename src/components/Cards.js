import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Adventures"
              path="/amazon-jungle"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali on the Private Crouse "
              lable="Laxury"
              path="/bali-crouse"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              lable="Mistery"
              path="/waters"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains "
              lable="Adventure"
              path="/himalayan-mountains"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour "
              lable="Adrenalin"
              path="/sahara-desert"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
