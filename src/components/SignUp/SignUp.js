import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/authAction';

import Logo from '../Logo/Logo';
import '../App/App.css';
import './SignUp.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    account: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      password: '',
      password_confirmation: ''
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //   account: {
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phonenumber: "",
    //     password: "",
    //     password_confirmation: ""
    //   }
    // });
    const data = {
      firstname: this.state.account.firstname,
      lastname: this.state.account.lastname,
      email: this.state.account.email,
      phonenumber: this.state.account.phonenumber,
      password: this.state.account.password,
      password_confirmation: this.state.account.password_confirmation
    };
    console.log('>>>>>>>>>', data);
    this.props.signupAction(data, this.props.history);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  // componentDidUpdate() {}
  render() {
    const { account } = this.state;
    const { error } = this.props.signup;
    return (
      <div className="wrapper-gradient-bg">
        <div className="logo-box__center">
          <Logo />
        </div>
        <div className="main-section">
          <form
            id="signup-form"
            className="signup-form"
            onSubmit={this.handleSubmit}
          >
            <h2 id="create-account" className="signup-form__heading">
              Create account
            </h2>
            {error && <div>{error}</div>}
            <div className="signup-form__form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                autoFocus
                className="signup-form__input"
                type="text"
                onChange={this.handleChange}
                value={account.firstname}
                id="firstname"
                name="firstname"
                required
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                className="signup-form__input"
                type="text"
                onChange={this.handleChange}
                value={account.lastName}
                id="lastname"
                name="lastname"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                className="signup-form__input"
                type="email"
                onChange={this.handleChange}
                value={account.email}
                id="email"
                name="email"
                required
              />
              <label htmlFor="phoneno">Phone Number</label>
              <input
                className="signup-form__input"
                type="number"
                onChange={this.handleChange}
                value={account.phonenumber}
                id="phoneno"
                name="phonenumber"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="signup-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password}
                id="password"
                name="password"
                required
              />
              <label htmlFor="password-confirm">Confirm password</label>
              <input
                className="signup-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password_confirmation}
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
  }
}
const mapStateToProps = state => ({
  signup: state.auth,
});

export default connect(
  mapStateToProps,
  { signupAction }
)(SignUp);
