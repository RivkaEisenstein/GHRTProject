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
import reducer from './reducer';
import saga from './saga';
import { getFilterDashboardEvents } from '../App/selectors';
import './style.scss';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  const width=900;
  const height=500;
  const colorArea="#f5f5f5";
  const fillArea="#8884d8";
  const strokeArea="#8884d8";
  const fillBar="#413ea0";
  const strokeLine="#ff7300";
  const barSize=20;
  return (
    <div className="dashbord-container">

      <br></br>
      <br></br>
      <br></br>
      <div className="dashboard_graph">
        <ComposedChart width={width} height={height} data={props.dashboardEvents}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke={colorArea} />
          <Area type="monotone" dataKey="name" fill={fillArea} stroke={strokeArea} />
          <Bar dataKey="count" barSize={barSize} fill={fillBar} />
          <Line type="monotone" dataKey="count" stroke={strokeLine} />
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
