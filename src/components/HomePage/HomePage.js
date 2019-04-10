import React from 'react';

import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';

const HomePage = ({ history }) => {
  return (
    <div>
      <Header history={history} />
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
