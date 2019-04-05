import React from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'


import Logo from "../Logo/Logo";
import "../App/App.css";
import "./Header.css";
import AuthenticatedLinks from "./AuthenticatedLinks";


const Header = (props) => {
  console.log('appStatehh', props.appState);
  console.log('appState', props.history);
  return (
    <header className="header">
      <Logo/>
      <nav className="header__nav">
          <Link to="" className="header__how-it-works">
            How it works
          </Link>
        {!props.appState.isAuthenticated ?  <Link to="/login" className="header__login">
          Log in
        </Link>: <AuthenticatedLinks/>}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
    appState: state.auth
});

export default connect(mapStateToProps)(Header);
