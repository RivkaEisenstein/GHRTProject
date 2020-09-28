/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavbar from './selectors';
import reducer from './reducer';
import saga from './saga';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom'
import Dashboard from '../../components/Dashboard';
import Calendar from '../Calendar';
import Dashboardd from '../../components/DashBoardd';
import AddEvent from '../AddEvent';
import EditEvent from '../EditEvent';
import { getFilterEvents } from '../App/selectors';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export function Navbar(events) {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });
  return (
    <div>
      <Helmet>

      </Helmet>

      

      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/AddEvent">Add Event</Link>

        <Link color="inherit" to="/Dashboardd">Dashboardd</Link>

        <Link color="inherit" to="/FullCalendar">Calendar</Link>


      </Breadcrumbs >
      <Switch>


        <Route exact path="/Dashboardd" component={Dashboardd} />
        <Route exact path="/FullCalendar" component={Calendar} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/EditEvent" component={EditEvent} />








      </Switch>

    </div>
  );
}

Navbar.propTypes = {
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
)(Navbar);





