import React from 'react';
import PrimaryHeading from '../common/PrimaryHeading';
import CreateOrderButton from '../common/CreateOrderButton';
import Orders from '../Orders';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header/>
      <PrimaryHeading />
      <CreateOrderButton/>
      <Orders/>
      <Footer/>
    </React.Fragment>
  );
};

export default Dashboard;
