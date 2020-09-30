/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import Calendar from 'react-calendar';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FullCalendar from "@fullcalendar/react";

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import AddEvent from '../AddEvent';
import { Link } from 'react-router-dom'
import Alert from '../../components/Alert';
import Dashboardd from '../../components/Dashboardd';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getFilterEvents } from './selectors';
import { createStructuredSelector } from 'reselect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'style.scss';
import { Helmet } from 'react-helmet';
import  AppNavbar  from '../Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {

  constructor(props) {
    super(props);
    this.date = new Date();
    this.kind = '';
    console.log(props.events);
    this.options = [
      { value: 'wedding', label: 'wedding' },
      { value: 'birthday', label: 'birthday' },
      { value: 'meeting', label: 'meeting' },
    ]
    this.state = {
      selectedOption: '',

    };
  }




  render() {
    return (
      <div>
        <Helmet>
        </Helmet>
        <AppNavbar></AppNavbar>
      </div>
    );
  }
}



App.propTypes = {
  events: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents()

});
function mapDispatchToProps(dispatch) {
  return {
    onUpdate: (date) => { dispatch(Update(date)) },
    onUpdatek: (kind) => { dispatch(Updatek(kind)) },
  }

}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect,
  memo,
)(App);






