/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { XAxis, YAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Bar, Area, Line } from 'recharts';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getFilterDashboardEvents } from '../App/selectors';
import './style.scss';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  const data = [
    {
      "name": "Weedings",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Meetings",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Birthdays",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },

  ]



  return (
    <div className="dashbord-container">

      <br></br>
      <br></br>
      <br></br>
      <div className="DashboardGraph">
        <ComposedChart width={900} height={500} data={props.dashboardEvents}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="count" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  dashboardEvents: PropTypes.any,
};





const mapStateToProps = createStructuredSelector({
  dashboardEvents: getFilterDashboardEvents(),
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
)(Dashboard);
