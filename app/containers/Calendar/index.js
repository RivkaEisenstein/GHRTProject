/**
 *
 * Calendar
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from "@fullcalendar/react";


import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
// import interactionPlugin from '@fullcalendar/interaction';


// import messages from './messages';
import history from 'utils/history';
import { useInjectSaga } from 'utils/injectSaga';
import { getFilterEvents } from '../App/selectors';
import { UpdateEdit } from './actions';
import { loadEvents } from '../App/actions';
import saga from '../App/saga';
import './style.scss';
// import 'fullcalendar/dist/fullcalendar.css';


export function Calendar(props) {
  useInjectSaga({ key: 'Calendar', saga });
  useEffect(() => {
    if (!props.events) props.onLoadEvents();
  }, []);
  const height = 600;
  const width = 600;


  return (
    <div className="calendar_container">
      <FullCalendar
        height={height}
        width={width}
        plugins={[dayGridPlugin , timeGridPlugin ]}
        events={props.events}
        initialView="dayGridMonth"
        header={{
          left: 'prev,next today',
          center: 'title, myCustomButton',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
   
        eventClick={
          (arg) => { props.onUpdateEdit(arg.event); history.push('/EditEvent'); }
        } />


    </div>
  );

}




Calendar.propTypes = {

  events: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onUpdateEdit: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents()

});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateEdit: (object) => { dispatch(UpdateEdit(object)) },
    onLoadEvents: () => dispatch(loadEvents()),
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
