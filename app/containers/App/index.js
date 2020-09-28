/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import Calendar from 'react-calendar';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FullCalendar from "@fullcalendar/react";

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import AddEvent from '../AddEvent';
import { Link } from 'react-router-dom'
import Alert from '../../components/Alert';
import Dashboard from '../../components/Dashboard';
import Dashboardd from '../../components/Dashboardd';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { connect } from 'react-redux';
import  { useEffect } from 'react';
import { getFilterEvents } from './selectors';
import { createStructuredSelector } from 'reselect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'style.scss';
import { Helmet } from 'react-helmet';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Update } from './actions';
import { Updatek } from './actions';
import { Navbar } from '../Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



 export class App extends Component {
 
  constructor(props){
    super(props);
    this.date=new Date();
    this.kind='';
    console.log(props.events);
    this.handleChange=this.handleChange.bind(this);
    this.options =[
      { value: 'wedding', label: 'wedding' },
      { value: 'birthday', label: 'birthday' },
      { value: 'meeting', label: 'meeting' },
    ]
    this.state = {
      selectedOption: '',
      
    };
  }
  handleChange = (date) => {
  this.props.dispatch(Update(date));
  };

 
  handleChange2 = (event) => {
    alert(event.target.value);
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    alert("hello");
  };

  Alertt = () => {
    console.log("okey");
    this.setState({ isOpen: true });
    alert(this.state.isOpen);
  };


  AddEvent = () => {
    this.setState({ isOpen: true });
    alert("llllllllll");
    <AddEvent />
  };

  gggg = () => {
    alert(this.props.events);
  };


  render() {
    return (
      <div>
        <Helmet>
        
    </Helmet>
    <div >
    <Navbar></Navbar>
         <DatePicker
         placeholderText="Click to Choose a date"
        onChange={(date)=>{ this.props.onUpdate(date )}}
      />
       <Button variant="danger">Clear Date</Button>

      <FormControl className="formControl">
      <InputLabel htmlFor="age-native-simple" >Choose </InputLabel>
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.kind}
          onChange={(event)=>{ this.props.onUpdatek( event.target.value )}}
        >
           <MenuItem value={"allkinds"}>All Kinds</MenuItem>
          <MenuItem value={"wedding"}>Wedding</MenuItem>
          <MenuItem value={"birthday"}>Birthday</MenuItem>
          <MenuItem value={"meeting"}>Meeting</MenuItem>
        </Select>
        </FormControl>
       
        </div>
  
        
      </div>
    );
  }
}



App.propTypes = {
  onUpdate: PropTypes.func,
  events:PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  events:getFilterEvents()

});
 function mapDispatchToProps(dispatch) {
  return {
     onUpdate: (date) => { dispatch(Update(date)) },
     onUpdatek: (kind) => { dispatch(Updatek(kind)) },
     }
  
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect,
  memo,
)(App);






