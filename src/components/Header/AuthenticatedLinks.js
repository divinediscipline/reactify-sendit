import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { signOutUser } from '../../actions/authAction';


const AuthenticatedLinks = ({signOutUser}) => {
  const user = localStorage.getItem('firstname');
  return (
    <React.Fragment>
      {/* <NavLink to="/dashboard" className="header__dashboard">
        Dashboard
      </NavLink> */}
      <Dropdown className="auth-dropdown">
        <Dropdown.Toggle className="drop-btn" variant="success" id="dropdown-basic">
          {user}
        </Dropdown.Toggle>

        <Dropdown.Menu className="auth-menu">
          <Dropdown.Item className="drop-item" href="/dashboard">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item className="drop-item" href="/profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item className="drop-item" href="/" onClick={signOutUser} >Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      ;
    </React.Fragment>
  );
};

export default connect(null, { signOutUser })(AuthenticatedLinks);
