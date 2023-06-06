import React from "react";
import { Button } from "./Button.js";
import "./HeroSection.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURES AWAIT</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FontAwesomeIcon icon="fa-solid fa-circle-play" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
