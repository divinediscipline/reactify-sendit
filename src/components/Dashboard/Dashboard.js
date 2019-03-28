import React from 'react';

import Header from '../Header/Header';
import PrimaryHeading from '../common/PrimaryHeading';
import CreateOrderButton from '../common/CreateOrderButton';
import Orders from '../Orders';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <PrimaryHeading />
      <CreateOrderButton/>
      <Orders/>
    </React.Fragment>
  );
};

export default Dashboard;
