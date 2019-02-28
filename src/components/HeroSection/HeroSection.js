import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App/App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h2 className="hero__text">
          Send parcels easily, anywhere, anytime, fast.
        </h2>
        <a href="./signup.html" className="hero__btn">
          Get started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
