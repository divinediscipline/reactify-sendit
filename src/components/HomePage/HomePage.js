import React from 'react';

import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import CallToAction from '../callToAction/CallToAction';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
