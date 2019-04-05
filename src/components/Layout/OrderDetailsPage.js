import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import viewSingleOrderAction from '../../actions/viewSingleOrderAction';
import Header from '../Header/Header';

class OrderDetailsPage extends Component {
  componentDidMount() {
    this.props.viewSingleOrderAction();
  }

  render() {
    const { singleOrder, isLoading } = this.props.singleOrder;
    if (isLoading || !singleOrder.data) {
      return <h1>Loading</h1>;
    }
    const {
      parcel_id,
      parceldescription,
      weightmetric,
      status,
      pickuplocation,
      destination,
      receiversphonenumber,
      receiversemail,
      pickuptime
    } = singleOrder.data;
    console.log('wwwwww', singleOrder.data);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObject = new Date(pickuptime);
    let hours = dateObject.getHours();
    let period = 'AM';
    if (hours > 12) {
      hours -= 12;
      period = 'PM';
    }
    const time = `${hours}  ${period}`;
    const displayedDate = `${
      months[dateObject.getMonth()]
    } ${dateObject.getDate()}, ${dateObject.getFullYear()}  \u00A0\u00A0${time}.`;
    if (singleOrder.data) {
      return (
        <React.Fragment>
          <Header/>
          <main className="order-details-page">
            <div className="form-page">
              <h3 className="form-page__heading">Parcel details</h3>
              <div className="parcel form-page__box">
                <h4 className="parcel__heading">Parcel</h4>
                <p className="parcel__field-group">
                  <span className="parcel__label">ID</span>
                  <span className="parcel__field">{parcel_id}</span>
                </p>
                <p className="parcel__field-group">
                  <span className="parcel__label">Parcel description</span>
                  <span className="parcel__field">{parceldescription}</span>
                </p>
                <p className="parcel__field-group">
                  <span className="parcel__label">Weight</span>
                  <span className="parcel__field">{weightmetric}</span>
                </p>
                <p className="parcel__field-group">
                  <span className="parcel__label">Pick-up time</span>
                  <span className="parcel__field">{displayedDate}</span>
                </p>
                <p className="parcel__field-group">
                  <span className="parcel__label">Status</span>
                  <span id="status" className="">
                    {status}
                  </span>
                </p>
              </div>

              <div className="pickup-location form-page__box">
                <h4 className="pickup-location__heading">Pickup location</h4>
                <p className="pickup-location__field-group">
                  <span className="pickup-location__label">Pick up at:</span>
                  <span className="pickup-location__field">{pickuplocation}</span>
                </p>
              </div>

              <div className="delivery-address form-page__box">
                <h4 className="delivery-address__heading">Delivery address</h4>
                <p className="delivery-address__field-group">
                  <span className="delivery-address__label">Send to:</span>
                  <span id="old-destination" className="delivery-address__field">
                    {destination}
                  </span>
                </p>
                <p className="delivery-address__field-group">
                  <span className="delivery-address__label">Receivers phone</span>
                  <span className="delivery-address__field">{receiversphonenumber}</span>
                </p>
                <p className="delivery-address__field-group">
                  <span className="delivery-address__label">Receivers email</span>
                  <span className="delivery-address__field">{receiversemail}</span>
                </p>
                changeDestination
              </div>
              <div className="form-page__btns">
                <Link to="/dashboard" className="form-page__view-btn">
                  View all orders
                </Link>
                cancelButton
              </div>
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}

// export default OrderDetailsPage;

const mapStateToProps = state => ({
  singleOrder: state.viewSingleOrder,
});

export default connect(
  mapStateToProps,
  { viewSingleOrderAction },
)(OrderDetailsPage);
