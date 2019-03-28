import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const AuthenticatedLinks = () => {
  return (
    <React.Fragment>
      <Link to="" className="header__dashboard">
        Dashboard
      </Link>
      <Dropdown className="auth-dropdown">
        <Dropdown.Toggle className="drop-btn" variant="success" id="dropdown-basic">
          User
        </Dropdown.Toggle>

        <Dropdown.Menu className="auth-menu">
          <Dropdown.Item  className="drop-item" href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item  className="drop-item" href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>;
    </React.Fragment>
  );
};

export default AuthenticatedLinks;
