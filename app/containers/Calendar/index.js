/**
 *
 * Calendar
 *
 */

import React, { memo ,Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from "@fullcalendar/react";
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalendar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import dayGridPlugin from "@fullcalendar/daygrid";
import { getFilterEvents } from '../App/selectors';
import { UpdateEdit} from './actions';
import history from 'utils/history';
import EditEvent from '../EditEvent';

export class Calendar extends Component {
  constructor(props) {
    super(props);
   
  }
  // state = {},
 
  handleEventClick = (arg) => {
    
    console.log(arg.event.id);
  };
  render() {
    return (
      <div>
        <FullCalendar
          // events={events}
          height={450}
          width={600}
       
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={this.props.events}
          eventClick={
          (arg)=>{console.log(arg.event), this.props.onUpdateEdit( arg.event ), history.push('/EditEvent');}
            }/>
  

      </div>
    );
  }
}




Calendar.propTypes = {
  
  events:PropTypes.array
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
