import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'


import "../App/App.css";

const Logo = () => {
    return ( 
        <div className="logo-box">
        <Link to="#" className="logo-box__link">
          <FontAwesomeIcon
            icon="shipping-fast"
            className="logo-box__logo"
          />
          <span className="logo-box__text">Send-It</span>
        </Link>
      </div>
     );
}
 
export default Logo;