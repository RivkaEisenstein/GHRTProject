/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { compose } from 'redux';


import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import errorBoundary from '../../components/ErrorBoundary';
import "react-datepicker/dist/react-datepicker.css";
import './style.scss';
import AppNavbar from '../Navbar';
import { getFilterEvents } from './selectors';
import 'bootstrap/dist/css/bootstrap.min.css';


const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
const roomId = 9806194
const username = 'perborgen'



export function App() {
  return (
    <>

      <AppNavbar></AppNavbar>
    </>
  )
}



App.propTypes = {
  events: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents()

});


const withConnect = connect(
  mapStateToProps,
  errorBoundary
);


export default compose(
  withConnect,
  memo,
)(App);






