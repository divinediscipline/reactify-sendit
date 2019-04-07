import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signinAction } from '../../actions/authAction';
import Logo from '../Logo/Logo';
import '../SignUp/SignUp.css';
import './SignIn.css';

class SignIn extends Component {
  state = {
    account: {
      email: '',
      password: ''
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.account.email,
      password: this.state.account.password
    };
    console.log('>>>>>>>>>', data);
    this.props.signinAction(data, this.props.history);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    const { error } = this.props.signin;
    return (
      <div className="wrapper-gradient-bg">
        <div className="logo-box__center">
          <Logo />
        </div>
        <div className="signin-main-section">
          <form id="login-form" className="login-form">
            <h2 className="login-form__heading">Welcome Back</h2>
            {error && <div>{error}</div>}
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
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="login-form__input"
                type="password"
                onChange={this.handleChange}
                value={account.password}
                name="password"
                id="password"
                required
              />
            </div>

            <button onClick={this.handleSubmit} className="login-form__button" type="submit">
              Log in
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
  signin: state.auth
});

export default connect(
  mapStateToProps,
  { signinAction }
)(SignIn);
