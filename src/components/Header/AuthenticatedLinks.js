import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const AuthenticatedLinks = () => {
  const user = localStorage.getItem('firstname');
  return (
    <React.Fragment>
      <Link to="/dashboard" className="header__dashboard">
        Dashboard
      </Link>
      <Dropdown className="auth-dropdown">
        <Dropdown.Toggle className="drop-btn" variant="success" id="dropdown-basic">
          {user}
        </Dropdown.Toggle>

        <Dropdown.Menu className="auth-menu">
          <Dropdown.Item  className="drop-item" href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item  className="drop-item" href="/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>;
    </React.Fragment>
  );
};

export default AuthenticatedLinks;
