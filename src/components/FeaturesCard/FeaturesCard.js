import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App/App.css';
import './FeaturesCard.css';

const FeaturesCard = props => {
  return (
    <div className="features__card">
      <FontAwesomeIcon icon={props.iconType} className="features__icon" />
      <p className="features__heading-secondary">{props.iconName}</p>
      <p className="features__card-text features__secure-text">
        {props.cardText}
      </p>
      {/* <button className="features__btn-inline">
        Learn more <span>&rarr;</span>
      </button> */}
    </div>
  );
};

export default FeaturesCard;
