import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchParcelOrdersAction from '../actions/fetchParcelOrdersAction';
import OrderCard from './orderCard';

class Orders extends Component {
  // state = {  }
  componentDidMount() {
    this.props.fetchParcelOrdersAction();
  }
  render() {
    const { allUserOrders, isLoading } = this.props.allUserParcelOrders;
    if (isLoading) {
      return <h1>Loading</h1>;
    }
    if (!allUserOrders.data) {
      return (
        <p className="default-text">
          You have no delivery orders. Create one by clicking on the 'New order' button.
        </p>
      );
    }
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const userOrders = allUserOrders.data.map(order => {
      const dateObject = new Date(order.senton);
      const month = months[dateObject.getMonth()];
      const date = dateObject.getDate();
      const year = dateObject.getFullYear();
      const displayedDate = `${month} ${date}, ${year}.`;
      return (
        <OrderCard
          key={order.parcel_id}
          displayedDate={displayedDate}
          parcelId={order.parcel_id}
          status={order.status}
          parcelDesc={order.parceldescription}
        />
      );
    });
    return <div className="order-cards">{userOrders}</div>;
  }
}

const mapStateToProps = state => ({
  allUserParcelOrders: state.fetchParcelOrders,
});

export default connect(
  mapStateToProps,
  { fetchParcelOrdersAction },
)(Orders);
