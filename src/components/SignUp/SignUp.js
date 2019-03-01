import React from 'react';

import Logo from '../Logo/Logo';
import '../App/App.css';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="wrapper-gradient-bg">
      <div className="logo-box__center">
        <Logo />
      </div>
      <div className="main-section">
        <form id="signup-form" className="signup-form">
          <h2 id="create-account" className="signup-form__heading">
            Create account
          </h2>
          <div className="signup-form__form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              className="signup-form__input"
              type="text"
              id="firstname"
              name="firstname"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              className="signup-form__input"
              type="text"
              id="lastname"
              name="lastname"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="signup-form__input"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="phoneno">Phone Number</label>
            <input
              className="signup-form__input"
              type="number"
              id="phoneno"
              name="phonenumber"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="signup-form__input"
              type="password"
              id="password"
              name="password"
              required
            />
            <label htmlFor="password-confirm">Confirm password</label>
            <input
              className="signup-form__input"
              type="password"
              id="password-confirm"
              name="password_confirmation"
              required
            />
          </div>
          <button className="signup-form__button" type="submit">
            sign up
          </button>
          <p className="signup-form__login-link-text">
            Already have an account?
            <a href="./login.html" className="signup-form__login-link">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
