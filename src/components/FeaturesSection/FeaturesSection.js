import React from 'react';

import FeaturesHeading from '../FeaturesHeading/FeaturesHeading';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import './FeaturesSection.css';
import '../App/App.css';

const FeaturesSection = () => {
  return (
    <React.Fragment>
        <FeaturesHeading />
    <div className="features__cards">
      <FeaturesCard
        iconType="lock"
        iconName="Secure"
        cardText="Package safety is our highest priority. If there is any
              damage, we take full financial responsibility."
      />
      <FeaturesCard
        iconType="map"
        iconName="Real time parcel tracking"
        cardText="View and monitor the progress of your package in real time so you know its
              exact location anytime."
      />
      <FeaturesCard
        iconType="fighter-jet"
        iconName="Fast"
        cardText="Extra fast parcel delivery with option to choose how fast you want your
              package delivered."
      />
    </div>
    </React.Fragment>
    
  );
};

export default FeaturesSection;
