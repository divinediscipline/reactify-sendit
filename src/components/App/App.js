import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShippingFast,
  faLock,
  faMap,
  faFighterJet
} from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';

library.add(faShippingFast, faLock, faMap, faFighterJet);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <CallToAction />
        <Footer/>
      </div>
    );
  }
}

export default App;
