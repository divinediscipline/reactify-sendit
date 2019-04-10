import React from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'


import Logo from "../Logo/Logo";
import "../App/App.css";
import "./Header.css";
import AuthenticatedLinks from "./AuthenticatedLinks";


const Header = (props) => {
  return (
    <header className="header">
      <Logo/>
      <nav className="header__nav">
        {!props.appState.isAuthenticated ?  <NavLink to="/login" className="header__login">
          Log in
        </NavLink>: <AuthenticatedLinks/>}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
    appState: state.auth
});

export default connect(mapStateToProps)(Header);
