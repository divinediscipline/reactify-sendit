import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CreateOrderButton = () => {
  return (
    <Link to="/newOrder" className="create-order-btn">
      <FontAwesomeIcon icon="plus" className="btn-add-desktop" />
      New order
    </Link>
  );
};

export default CreateOrderButton;
