import React from "react";
import { Link } from 'react-router-dom'
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
        <Link to="/signup" className="hero__btn">
          Get started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
