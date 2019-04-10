import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Circle } from 'better-react-spinkit';
import Joi from 'joi-browser';
import { signinAction } from '../../actions/authAction';
import Logo from '../Logo/Logo';
import '../SignUp/SignUp.css';
import './SignIn.css';

class SignIn extends Component {
  state = {
    account: {
      email: '',
      password: '',
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label('Email'),
    password: Joi.string()
      .min(4)
      .max(20)
      .required()
      .label('Password'),
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
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // this.setState({ isLoaded: true });

    const data = {
      email: this.state.account.email,
      password: this.state.account.password,
    };
    console.log('>>>>>>>>>', data);
    // console.log('>load', this.state.isLoading);
    this.props.signinAction(data, this.props.history);
    // this.setState({ isLoaded: false });
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
        <div className="signin-main-section">
          <form id="login-form" onSubmit={this.handleSubmit} className="login-form">
            <h2 className="login-form__heading">Welcome Back</h2>
            {/* {error && <div>{error}</div>} */}
            <div className="login-form__form-group">
              <label htmlFor="email">Email</label>
              <input
                autoFocus
                className="login-form__input"
                onChange={this.handleChange}
                value={account.email}
                type="email"
                name="email"
                id="email"
              />
              {errors && <small className="login-error">{errors.email}</small>}
              <label htmlFor="password">Password</label>
              <input
                className="login-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password}
                name="password"
                id="password"
              />
              {errors && <small className="login-error">{errors.password}</small>}
            </div>

            <button className="login-form__button" type="submit">
              Log in
              {this.props.signin.isLoading && (
                <span className="button-loading">
                  <Circle color={'rgba(255,255,255,1)'} />
                </span>
              )}
            </button>
            <p className="login-form__signup-link-text">
              Don't have an account?
              <Link to="/signup" className="login-form__signup-link">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signin: state.auth,
});

export default connect(
  mapStateToProps,
  { signinAction },
)(SignIn);
