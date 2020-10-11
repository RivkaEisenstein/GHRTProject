/**
 *
 * AddEventForm
 *
 */

import React, { memo } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectAddEventForm from './selectors';


class AddEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "jasonmalfatto@moduscreate.com",
      password: "",
      passwordConfirm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.target.classList.add("active");

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.showFormErrors()) {

    } else {

    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll("input");
    let isFormValid = true;

    inputs.forEach((input) => {
      input.classList.add("active");

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const {validity} = this.refs[refName];
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf("password") !== -1;
    const isPasswordConfirm = refName === "passwordConfirm";

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity("Passwords do not match");
      } else {
        this.refs.passwordConfirm.setCustomValidity("");
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = "Passwords do not match";
      }
      return false;
    }

    error.textContent = "";
    return true;
  }

  render() {
    return (
      <form novalidate>
        <div className="form-group">
          <label id="usernameLabel">Username</label>
          <input
            className="form-control"
            type="email"
            name="username"
            ref="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="usernameError" />
        </div>
        <div className="form-group">
          <label id="passwordLabel">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            ref="password"
            value={this.state.password}
            onChange={this.handleChange}
            pattern=".{5,}"
            required
          />
          <div className="error" id="passwordError" />
        </div>
        <div className="form-group">
          <label id="passwordConfirmLabel">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="passwordConfirm"
            ref="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="passwordConfirmError" />
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          submit
        </button>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BasicForm />
        <p className="note">Note: see console for submit event logging</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));


AddEventForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addEventForm: makeSelectAddEventForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddEventForm);
