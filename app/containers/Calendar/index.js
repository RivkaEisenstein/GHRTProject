/**
 *
 * Calendar
 *
 */

import React, { memo  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from "@fullcalendar/react";


import dayGridPlugin from "@fullcalendar/daygrid";
// import messages from './messages';
import history from 'utils/history';
import { getFilterEvents } from '../App/selectors';
import { UpdateEdit} from './actions';
import './style.scss';


export function Calendar (props) {
  const height=600;
  const width=600;


  return (
    <div>
      <FullCalendar
        height={height}
        width={width}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={props.events}
        eventClick={
          (arg)=>{props.onUpdateEdit( arg.event ), history.push('/EditEvent');}
        }/>
  

    </div>
  );
  
}




Calendar.propTypes = {
  
  events:PropTypes.array,
  onUpdateEdit:PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  events:getFilterEvents()

});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateEdit: (object) => { dispatch(UpdateEdit(object)) }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);



export default compose(
  withConnect,
  memo,
)(Calendar);
