import React from 'react';

import '../App/App.css';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta">
      <p className="cta__text">Send that parcel today.</p>
      <a href="./signup.html" className="hero__btn cta__btn">
        Get started
      </a>
    </div>
  );
};

export default CallToAction;
