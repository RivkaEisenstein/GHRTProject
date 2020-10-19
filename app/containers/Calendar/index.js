
import React, { memo, useEffect ,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from "@fullcalendar/react";


import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import history from 'utils/history';
import { useInjectSaga } from 'utils/injectSaga';
import { getFilterEvents, getCurrentKind } from '../App/selectors';
import { UpdateEdit } from './actions';
import { loadEvents } from '../App/actions';
import saga from '../App/saga';
import './style.scss';
import { useKindEvent } from '../UseKindEvent';




export function Calendar({ events, onUpdateEdit, onLoadEvents, kind }) {
  useInjectSaga({ key: 'Calendar', saga });
  useEffect(() => {
    if (!events) onLoadEvents();
  }, []);
  const [initialView, setinitialView] = useState("dayGridMonth");
  const height = 600;
  const width = 600;
  const color = useKindEvent(kind);

  return (
    <div className="calendar_container">
      <FullCalendar
        height={height}
        width={width}
        color="black"
        eventTextColor="balck"
        plugins={[dayGridPlugin, timeGridPlugin]}
        dateClick={() =>{setinitialView("timeGridDay");alert("hello")}}
        events={events}
        initialView={initialView}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        eventColor={color}
        // eventContent={renderEventContent}
        eventClick={
          (arg) => { onUpdateEdit(arg.event); history.push('/EditEvent'); }
        } />


    </div>
  );

}
// function renderEventContent(eventInfo) {
//   return (
//     <>
//     <p>{eventInfo.event.title}</p>
//     <p>click to change details</p>
//     </>
//   )
// }




Calendar.propTypes = {

  events: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onUpdateEdit: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadEvents: PropTypes.func,
  kind: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents(),
  kind: getCurrentKind()
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
