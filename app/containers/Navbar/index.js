/**
 *
 * Navbar
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EventIcon from '@material-ui/icons/Event';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import calendar from '../../images/calendar.png';
import './style.scss';
import { UpdateDate, Updatekind } from './actions';


import { getFilterEvents } from '../App/selectors';
import EditEvent from '../EditEvent';
import AddEvent from '../AddEvent';
import Calendar from '../Calendar';
import saga from './saga';
import reducer from './reducer';
import Dashboard from '../Dashboard';
import { Kinds } from './constants';



export function AppNavbar({onUpdateDate,onUpdatekind}) {

  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });
  const [date, setDate] = useState(new Date());
  const { Brand } = Navbar;
  return (
    <div className="navbar_container">
      <Navbar bg="dark" variant="dark">
        <Brand href="#home" variant="red" className="navbar">
          <img
            alt=""
            src={calendar}
            width="49"
            height="34"
            className="d-inline-block align-top"
          />{' '}
      --CALENDAR--
          <br></br>
          <Breadcrumbs aria-label="breadcrumb" >
            <AddCircleOutlineIcon style={{fill: "gray"}}/>
            <Link color="white" to="/AddEvent" className="link">Add Event</Link>{'  '}
            <DashboardIcon  style={{fill: "gray"}}/>
            <Link color="white" to="/Dashboard" className="link">Dashboard</Link>{'   '}
            <EventIcon  style={{fill: "gray"}}/>
            <Link color="white" to="/FullCalendar" className="link">Calendar</Link>{' '}
          </Breadcrumbs>
        </Brand>
        <Form inline className="navbar_form_style">
          <input
            type="date"
            value={date}
            className="input_date"
            onChange={(e) => {
              setDate(e.target.value);
              onUpdateDate(e.target.value)
            }}
          />{'  '}

          <Button
            variant="danger"
            onClick={() => {
              setDate(new Date());
              onUpdateDate("null")
            }}>Clear Date   </Button>{'  '}
          <Form.Control
            as="select"
            custom
            onChange={(e) => { onUpdatekind(e.target.value) }}
            variant="danger"
          >
            {Kinds.map(kind =>
              <option value={kind}> {kind} </option>
            )}{'  '}


          </Form.Control>
        </Form>

      </Navbar>



      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/FullCalendar" component={Calendar} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/EditEvent" component={EditEvent} />
        <Route path="/" component={Calendar} />
      </Switch>

    </div>
  );
}

AppNavbar.propTypes = {
  events: PropTypes.array,
  onUpdateDate: PropTypes.func,
  onUpdatekind: PropTypes.func

};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents(),
  
});


function mapDispatchToProps(dispatch) {
  return {
    onUpdateDate: evt => dispatch(UpdateDate(evt)),
    onUpdatekind: kind => dispatch(Updatekind(kind)),
  }

}



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo,
)(AppNavbar);





