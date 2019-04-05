import React, { Component } from 'react';
import { connect } from 'react-redux';
import createParcelOrderAction from '../../actions/createParcelOrderAction';
import Header from '../Header/Header';

class NewOrderPage extends Component {
  state = {
    orderFormData: {
      parcelDescription: '',
      pickUpState: '',
      pickUpLg: '',
      pickUpAddress: '',
      destinationState: '',
      destinationLg: '',
      destinationAddress: '',
      destinationPhone: '',
      destinationEmail: '',
      pickUpTime: '',
      parcelWeight: '',
    },
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('formdata', this.state.orderFormData);
    const {
      parcelDescription,
      pickUpState,
      pickUpLg,
      pickUpAddress,
      destinationState,
      destinationLg,
      destinationAddress,
      destinationPhone,
      destinationEmail,
      pickUpTime,
      parcelWeight,
    } = this.state.orderFormData;
    const data = {
      parceldescription: parcelDescription,
      weightmetric: parcelWeight,
      pickuplocation: `${pickUpState}, ${pickUpLg}, ${pickUpAddress}`,
      destination: `${destinationState}, ${destinationLg}, ${destinationAddress}`,
      presentlocation: `${pickUpState}, ${pickUpLg}`,
      receiversemail: destinationEmail,
      receiversphonenumber: destinationPhone,
      pickuptime: pickUpTime,
    };
    this.props.createParcelOrderAction(data, this.props.history);
  };

  handleChange = ({ currentTarget: input }) => {
    const orderFormData = { ...this.state.orderFormData };
    orderFormData[input.name] = input.value;
    this.setState({ orderFormData });
  };

  render() {
    const { orderFormData } = this.state;
    return (
      <React.Fragment>
        <Header/>
        <main className="new-order-page">
          <form onSubmit={this.handleSubmit} className="new-order-form" id="new-order-form">
            <h2 className="new-order-form__heading">New order</h2>
            <div className="new-order-form__form-group">
              <label htmlFor="pkage-desc">Package description</label>
              <textarea
                value={orderFormData.parcelDescription}
                onChange={this.handleChange}
                name="parcelDescription"
                id=""
                className="new-order-form__input"
                cols="30"
                rows="10"
                placeholder="Describe your parcel"
                required
              />
              <fieldset className="new-order-form__input fieldset">
                <legend className="legend">Pick up location</legend>
                <input
                  value={orderFormData.pickUpState}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="pickUpState"
                  placeholder="State"
                  required
                />
                <input
                  value={orderFormData.pickUpLg}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="pickUpLg"
                  placeholder="Local government"
                  required
                />
                <input
                  value={orderFormData.pickUpAddress}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="pickUpAddress"
                  placeholder="Address"
                  required
                />
              </fieldset>
              <fieldset className="new-order-form__input fieldset">
                <legend className="legend">Destination</legend>
                <input
                  value={orderFormData.destinationState}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="destinationState"
                  placeholder="State"
                  required
                />
                <input
                  value={orderFormData.destinationLg}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="destinationLg"
                  placeholder="Local government"
                  required
                />
                <input
                  value={orderFormData.destinationAddress}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="text"
                  name="destinationAddress"
                  placeholder="Address"
                  required
                />
                <input
                  value={orderFormData.destinationPhone}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="tel"
                  name="destinationPhone"
                  placeholder="Receivers phone number"
                  required
                />
                <input
                  value={orderFormData.destinationEmail}
                  onChange={this.handleChange}
                  className="new-order-form__input"
                  type="email"
                  name="destinationEmail"
                  placeholder="Receivers email"
                  required
                />
              </fieldset>
              <label>
                <h4>Pick-up Time</h4>
              </label>
              <input
                value={orderFormData.pickUpTime}
                onChange={this.handleChange}
                className="new-order-form__input"
                id="pickup-time"
                type="datetime-local"
                name="pickUpTime"
                placeholder="Pickup time"
                required
              />
              <label>
                <h4>Parcel Weight</h4>
              </label>
              <select
                value={orderFormData.parcelWeight}
                onChange={this.handleChange}
                className="new-order-form__input"
                id="parcelWeight"
                name="parcelWeight"
              >
                <option defaultValue="true" disabled>
                  Parcel Weight
                </option>
                <option value="0kg - 5kg">0kg - 5kg (N200/km)</option>
                <option value="5kg - 20kg">5kg - 20kg (N400/km)</option>
                <option value="20kg - 50kg">20kg - 50kg (N600/km)</option>
                <option value="50kg - 100kg">50kg - 100kg (N800/km)</option>
                <option value="100kg above">100kg above (N1000/km)</option>
              </select>
            </div>

            <button className="new-order-form__button" type="submit">
              Create order
            </button>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  createParcelOrder: state.createParcelOrder,
});

export default connect(
  mapStateToProps,
  { createParcelOrderAction },
)(NewOrderPage);
