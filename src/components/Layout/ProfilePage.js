import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import profilePic from '../../img/profile.png';
import fetchProfileDetailsAction from '../../actions/fetchProfileDetailsAction';
import CreateOrderButton from '../common/CreateOrderButton';

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchProfileDetailsAction();
  }
  render() {
    const { isLoading, profileDetails } = this.props.userDetails;
    if (isLoading || !profileDetails.data) {
      return <h1>Loading</h1>;
    }
    console.log('your profile', profileDetails);
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      noOfdeliveryOrdersPlaced,
      noOfdeliveryOrdersTransiting,
      noOfdeliveryOrdersDelivered,
      noOfdeliveryOrdersCancelled,
      allDeliveryOrders,
    } = profileDetails.data;
    return (
      <React.Fragment>
        <Header />
        <div className="ProfilePage">
          <div className="profile-section">
            <div className="profile-image-box">
              <img
                src={profilePic}
                className="profile-image-pic"
                alt="Smiley face"
                height="180"
                width="180"
              />
              <input type="file" className="profile-image-select" />
            </div>
          </div>
          <div className="details-section">
            <a href="" id="edit-profile-btn" className="hero__btn--profile">
              Edit profile
            </a>
            <div className="personal-details">
              <h3 className="personal-details__heading">
                <i className="fas fa-user-circle personal-details__icon" /> &nbsp; Personal details
              </h3>
              <div className="personal-details__content">
                <p className="personl-details__field-group">
                  <span className="personal-details__label">First name</span>
                  <span className="personal-details__field">{firstName}</span>
                </p>
                <p className="personl-details__field-group">
                  <span className="personal-details__label">Last name</span>
                  <span className="personal-details__field">{lastName}</span>
                </p>
                <p className="personl-details__field-group">
                  <span className="personal-details__label">Email</span>
                  <span className="personal-details__field">{email}</span>
                </p>
                <p className="personl-details__field-group">
                  <span className="personal-details__label">Phone number</span>
                  <span className="personal-details__field">{phoneNumber}</span>
                </p>
              </div>
            </div>
            <div className="statistics">
              <h3 className="statistics__heading">
                <i className="fas fa-chart-line personal-details__icon" /> &nbsp; Statistics
              </h3>
              <div className="statistics__content">
                <p className="statistics__field-group">
                  <span className="statistics__label">Number of delivery orders placed</span>
                  <span className="statistics__field">{noOfdeliveryOrdersPlaced}</span>
                </p>
                <p className="statistics__field-group">
                  <span className="statistics__label">Number of delivery orders transiting</span>
                  <span className="statistics__field">{noOfdeliveryOrdersTransiting}</span>
                </p>
                <p className="statistics__field-group">
                  <span className="statistics__label">Number of delivery orders delivered</span>
                  <span className="statistics__field">{noOfdeliveryOrdersDelivered}</span>
                </p>
                <p className="statistics__field-group">
                  <span className="statistics__label">Number of delivery orders cancelled</span>
                  <span className="statistics__field">{noOfdeliveryOrdersCancelled}</span>
                </p>
                <p className="statistics__field-group">
                  <span className="statistics__label">All parcel delivery orders</span>
                  <span className="statistics__field">{allDeliveryOrders}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <CreateOrderButton/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.fetchProfileDetails,
});

export default connect(
  mapStateToProps,
  { fetchProfileDetailsAction },
)(ProfilePage);
