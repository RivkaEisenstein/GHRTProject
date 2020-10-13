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
import "react-datepicker/dist/react-datepicker.css";
import './style.scss';
import AppNavbar from '../Navbar';
import { getFilterEvents } from './selectors';
import 'bootstrap/dist/css/bootstrap.min.css';



export function App() {
  return (
    <div>

      <AppNavbar></AppNavbar>
    </div>
  )
}



App.propTypes = {
  events: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents()

});


const withConnect = connect(
  mapStateToProps
);


export default compose(
  withConnect,
  memo,
)(App);






