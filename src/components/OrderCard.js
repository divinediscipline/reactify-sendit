import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ displayedDate, parcelId, status, parcelDesc }) => {
  const setParcelId = (event) => {
    let parcelIdElem = event.target.parentElement.parentElement.getElementsByClassName('order-cards__parcelID-text')[0];
    window.location.href = `./order-details?parcelid=${parcelIdElem.innerHTML}`;
  };
  return (
    <div className="order-cards__card">
      <p className="order-cards__date">{displayedDate}</p>
      <div className="order-cards__field-group">
        <h5 className="order-cards__destination-heading">Parcel ID</h5>
        <p className="order-cards__parcelID-text">{parcelId}</p>
      </div>
      <div className="order-cards__field-group">
        <h5 className="order-cards__status-heading">Status</h5>
        <p className={status}>{status}</p>
      </div>
      <div className="order-cards__field-group">
        <h5 className="order-cards__desc-heading">Parcel description</h5>
        <p className="order-cards__desc">{parcelDesc}</p>
      </div>
      <Link to="/order-details" className="order-cards__btn" onClick={setParcelId}>
        <button>View details</button>
      </Link>
    </div>
  );
};

export default OrderCard;
