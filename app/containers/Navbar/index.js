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
import { Switch, Route , Link } from 'react-router-dom';
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
import   { Update , Updatek }   from './actions';


import { getFilterEvents } from '../App/selectors';
import EditEvent from '../EditEvent';
import AddEvent from '../AddEvent';
import Calendar from '../Calendar';
import saga from './saga';
import reducer from './reducer';
import Dashboard from '../Dashboard';
import { Kinds } from './constants';


export function AppNavbar(props) {
 
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="navbar_container">
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
        <Form inline className="navbar_form_style">
          <input
            type="date" 
            value={date} 
            onChange={(e) => { 
              setDate(e.target.value);
              props.onUpdate(e.target.value)}}
          />
          
          <Button variant="danger">Clear Date   </Button>
          <Form.Control
            as="select"
            custom
            onChange={(e)=>{props.onUpdatek(e.target.value)}}
            variant="danger"
          >
            { Kinds.map(kind => 
              <option value={kind}> {kind} </option>
            )}
            
        
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





