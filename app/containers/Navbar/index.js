/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import { useRef, useState } from 'react';
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
import Calendar from '../Calendar';
import Dashboardd from '../../components/DashBoardd';
import AddEvent from '../AddEvent';
import EditEvent from '../EditEvent';
import { getFilterEvents } from '../App/selectors';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventIcon from '@material-ui/icons/Event';
import CreateIcon from '@material-ui/icons/Create';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Icon } from '@material-ui/core';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import calendar from '../../images/calendar.png';
import './style.scss';
import   { Update }   from './actions';
import   { Updatek }   from './actions';

import { FormControl } from 'react-bootstrap/FormControl';
import Dashboard from '../Dashboard';




export function AppNavbar(props) {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Helmet>

      </Helmet>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" variant="red">
          <img
            alt=""
            src={calendar}
            width="34"
            height="34"
            className="d-inline-block align-top"
          />{' '}
      --CALENDAR--

    </Navbar.Brand>

        <Form inline className="NavbarFormStyle">
          <input type="date" value={date} onChange={(e) => { 
            setDate(e.target.value),
             props.onUpdate(e.target.value)}}></input>
          
          <Button variant="danger">Clear Date   </Button>
          <Form.Control
          as="select"
          custom
          onChange={(e)=>{props.onUpdatek(e.target.value)}}
          variant="danger"
        >
          <option value="allkinds">All Kinds</option>
          <option value="wedding"> Wedding </option>
          <option value="meeting">Meeting</option>
          <option value="birthday">Birthday</option>
        
        </Form.Control>
        </Form>

      </Navbar>

      <Breadcrumbs aria-label="breadcrumb" >
        <AddCircleOutlineIcon />
        <Link color="inherit" to="/AddEvent">Add Event</Link>
        <DashboardIcon />
        <Link color="inherit" to="/Dashboard">Dashboard</Link>
        <EventIcon />
        <Link color="inherit" to="/FullCalendar">Calendar</Link>


      </Breadcrumbs >
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
  onUpdate:PropTypes.func,
  onUpdatek:PropTypes.func

};

const mapStateToProps = createStructuredSelector({
  events: getFilterEvents()
});


function mapDispatchToProps(dispatch) {
  return {
    onUpdate: evt=>  dispatch(Update(evt)) ,
    onUpdatek: kind =>  dispatch(Updatek(kind)) ,
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





