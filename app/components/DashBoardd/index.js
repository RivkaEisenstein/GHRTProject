/**
 *
 * DashBoardd
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { XAxis, YAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Bar, Area, Line } from 'recharts';


function DashBoardd() {
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
    <div>
      <br></br>
      <br></br>
      <br></br>
      <ComposedChart width={900} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
}

DashBoardd.propTypes = {};

export default memo(DashBoardd);
