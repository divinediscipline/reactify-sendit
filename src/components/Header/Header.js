import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

import Logo from "../Logo/Logo";
import "../App/App.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <nav className="header__nav">
        <div className="header__options">
          <Link to="" >
            How it works
          </Link>
        </div>
        <Link to="./login.html" className="header__login">
          Log in
        </Link>
      </nav>
    </header>
  );
};

export default Header;
