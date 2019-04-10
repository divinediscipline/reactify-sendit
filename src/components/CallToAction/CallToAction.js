import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App/App.css';
import './CallToAction.css';


const CallToAction = () => {
  return (
    <div className="cta">
      <p className="cta__text">Send that parcel today.</p>
      <NavLink to="/signup" className="hero__btn cta__btn">
        Get started
      </NavLink>
    </div>
  );
};

export default CallToAction;
