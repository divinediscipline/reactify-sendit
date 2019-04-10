import React, { Component } from 'react';
import { connect } from 'react-redux';
import Joi from 'joi-browser';
import { Circle } from 'better-react-spinkit';
import { Link } from 'react-router-dom';
import { signupAction } from '../../actions/authAction';

import Logo from '../Logo/Logo';
import '../App/App.css';
import './SignUp.css';


 export class SignUp extends Component {
  state = {
    account: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      password: '',
      password_confirmation: '',
    },
    errors: {

    },
  };

  schema = {
    firstname: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required()
      .label('First Name'),
    lastname: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required()
      .label('Last Name'),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label('Email'),
    phonenumber: Joi.number().integer().label('Phone Number'),
    password: Joi.string()
      .min(4)
      .max(20)
      .required()
      .label('Password'),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')).options({
        language: {
          any: {
            allowOnly: '!!Passwords do not match',
          }
        } 
      }),
  };

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, { abortEarly: false });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const data = {
      firstname: this.state.account.firstname,
      lastname: this.state.account.lastname,
      email: this.state.account.email,
      phonenumber: this.state.account.phonenumber,
      password: this.state.account.password,
      password_confirmation: this.state.account.password_confirmation,
    };
    this.props.signupAction(data, this.props.history);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="wrapper-gradient-bg">
        <div className="logo-box__center">
          <Logo />
        </div>
        <div className="main-section">
          <form id="signup-form" className="signup-form" onSubmit={this.handleSubmit}>
            <h2 id="create-account" className="signup-form__heading">
              Create account
            </h2>
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
               
              />
              {errors && <small className="login-error">{errors.firstname}</small>}
              <label htmlFor="lastname">Last Name</label>
              <input
                className="signup-form__input"
                type="text"
                onChange={this.handleChange}
                value={account.lastName}
                id="lastname"
                name="lastname"
                // required
              />
              {errors && <small className="login-error">{errors.lastname}</small>}
              <label htmlFor="email">Email</label>
              <input
                className="signup-form__input"
                type="email"
                onChange={this.handleChange}
                value={account.email}
                id="email"
                name="email"
                
              />
              {errors && <small className="login-error">{errors.email}</small>}
              <label htmlFor="phoneno">Phone Number</label>
              <input
                className="signup-form__input"
                type="number"
                onChange={this.handleChange}
                value={account.phonenumber}
                id="phoneno"
                name="phonenumber"
                // required
              />
              {errors && <small className="login-error">{errors.phonenumber}</small>}
              <label htmlFor="password">Password</label>
              <input
                className="signup-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password}
                id="password"
                name="password"
                // required
              />
              {errors && <small className="login-error">{errors.password}</small>}
              <label htmlFor="password-confirm">Confirm password</label>
              <input
                className="signup-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password_confirmation}
                id="password-confirm"
                name="password_confirmation"
                // required
              />
              {errors && <small className="login-error">{errors.password_confirmation}</small>}
            </div>
            <button className="signup-form__button" type="submit">
              sign up
              {this.props.signup.isLoading && (
                <span className="button-loading">
                  <Circle color={'rgba(255,255,255,1)'} />
                </span>
              )}
            </button>
            <p className="signup-form__login-link-text">
              Already have an account?
              <Link to="/login" className="signup-form__login-link">
                Log in
              </Link>
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
  { signupAction },
)(SignUp);
