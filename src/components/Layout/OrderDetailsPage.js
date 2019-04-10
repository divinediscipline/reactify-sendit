import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewSingleOrderAction, cancelOrderAction } from '../../actions/viewSingleOrderAction';
import Header from '../Header/Header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import changeDestinationAction from '../../actions/changeDestinationAction';



class OrderDetailsPage extends Component {
  state = {
    show: false,
    newDestinationData: {
      newDestination: '',
    }
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    const { newDestination } = this.state.newDestinationData;
    
    this.props.changeDestinationAction({destination: newDestination});
    this.handleClose();
  }

  handleChange = ({ currentTarget: input }) => {
    const newDestinationData = { ...this.state.newDestinationData };
    newDestinationData[input.name] = input.value;
    this.setState({ newDestinationData });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    this.props.viewSingleOrderAction();
  }

  setDestinationBtn = status => {
    let changeDestination = null;
    if (status == 'Placed') {
      return (changeDestination = (
        <button
          id="change-destination"
          className="delivery-address__change-destination-btn"
          onClick={this.handleShow}
        >
          Change destination
        </button>
      ));
    }
  };

  setCancelBtn = status => {
    let cancelButton = null;
    if (status == 'Placed') {
      return (cancelButton = (
        <a id="cancel-btn" className="form-page__cancel-btn" onClick={this.props.cancelOrderAction}>
          Cancel order
        </a>
      ));
    }
  };

  render() {
    const { newDestinationData } = this.state;
    const { singleOrder, isLoading } = this.props.singleOrder;
    if (isLoading || !singleOrder.data) {
      return <h1 className="carousel-spinner
      spinner-grow spinner-grow-lg text-primary">Loading</h1>;
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
      pickuptime,
    } = singleOrder.data;

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
          <Header />
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
                  <span id="status" className={status}>
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
                {this.setDestinationBtn(status)}
                <Modal className="order-details-modal"
                  show={this.state.show}
                  onHide={this.handleClose}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="delivery-address__new-destination-heading">Enter your new destination details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input
                      value={ newDestinationData.newDestination}
                      onChange={this.handleChange}
                      className="delivery-address__new-destination-input"
                      type="text"
                      name="newDestination"
                      placeholder="New destination"
                      required
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="form-page__btns">
                <Link to="/dashboard" className="form-page__view-btn">
                  View all orders
                </Link>
                {this.setCancelBtn(status)}
              </div>
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}


const mapStateToProps = state => ({
  singleOrder: state.viewSingleOrder,
});

export default connect(
  mapStateToProps,
  { viewSingleOrderAction, changeDestinationAction, cancelOrderAction },
)(OrderDetailsPage);
