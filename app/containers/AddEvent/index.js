/**
 *
 * AddEvent
 *
 */

import React, { Fragment, memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddEvent from './selectors';
import reducer from './reducer';
import saga from './saga';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Submit } from './actions';
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './style.scss';
import { getId } from '../App/selectors';
import Calendar from '../Calendar';
import history from 'utils/history';
import { Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      newEvent: { title: "yyyy", date: new Date(), time: '', kind: '', title: '', id: '' },
      kind: "ii"
    }
    this.FirstRef = React.createRef();
    this.LastRef = React.createRef();
    this.IdtRef = React.createRef();
    this.saveContact = this.saveContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.DatetRef = React.createRef();
    this.TimeRef = React.createRef();
    this.age = '';

    //  useInjectReducer({ key: 'addEvent', reducer }),
    //  useInjectSaga({ key: 'addEvent', saga })



  }


  handleChange = (event) => {
    this.state.newEvent.kind = event.target.value;
  };



  saveContact() {
    this.state.newEvent.date = this.DatetRef.current.value;
    this.state.newEvent.title = this.FirstRef.current.value;
    this.state.newEvent.numberp = this.LastRef.current.value;
    this.state.newEvent.time = this.TimeRef.current.value;
    this.state.newEvent.id = this.props.id;
    // this.state.newEvent=this.props.id;
    // const n = { id: id, title: title, numberp: numberp,date:new Date() }
    // this.setState({...this.state.newEvent , n});
    console.log("id", this.props.id);
    console.log("props", this.props);

    console.log(this.state.newEvent);

  }



  render() {
    return (
      <div>
        <div className="formAddEvent">
          <form className="formm">
            <br></br>
            <input type="text" placeholder="Enter title of event" name="title" ref={this.FirstRef} /><br></br>
            <input type="number" placeholder="Enter number of peoples" name="numberp" ref={this.LastRef} /><br></br>
            <input type="date" placeholder="Enter id" name="id" ref={this.DatetRef} /><br></br><br></br>
            <input type="time" placeholder="Enter time" name="time" ref={this.TimeRef} /><br></br><br></br>


            <br></br>
            <FormControl >
              {/* <InputLabel id="demo-simple-select-label">Kind Of Event</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.age}
                onChange={this.handleChange}
              >
                <MenuItem value={"wedding"}>Wedding</MenuItem>
                <MenuItem value={"birthday"}>Birthday</MenuItem>
                <MenuItem value={"meeting"}>Meeting</MenuItem>
              </Select>
            </FormControl>
            <br></br><br></br><br></br>
            <input type="button" value="SAVE DETAILS" onClick={this.saveContact} />
          </form>
          <button onClick={() => { this.props.onSubmit(this.state.newEvent), history.push('/FullCalendar'); }}>ADD TO EVENTS</button>
          <Switch>

            <Route exact path="/FullCalendar" component={Calendar} />

          </Switch>
        </div>
        <h1 className="addEventsH1">ADD EVENTS</h1>
        <div className="addevents">
          
          <br></br>
          <br></br>
          <br></br>
          <div className="formbirthday">
            <Form width={200} height={300}>
              <h3>Add Birthday Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="birthday for eli age 5"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Button variant="primary" onClick={() => {
                props.onEdit({ title: title, date: date, time: time, kind: props.eventedit.kind, id: props.eventedit.id })
              }
              }>ADD TO EVENTS</Button>{' '}
            </Form>
          </div>
          <div className="formbirthday">
            <Form width={200} height={300}>
              <h3>Add Wedding Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="wedding for moti in armonot fridman"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Button variant="primary" onClick={() => {
                props.onEdit({ title: title, date: date, time: time, kind: props.eventedit.kind, id: props.eventedit.id })
              }
              }>ADD TO EVENTS</Button>{' '}
            </Form>
          </div>
          <div className="formbirthday">
            <Form width={200} height={300}>
              <h3>Add Meeting Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="meeting in konkord bnei brak" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Button variant="primary" onClick={() => {
                props.onEdit({ title: title, date: date, time: time, kind: props.eventedit.kind, id: props.eventedit.id })
              }
              }>ADD TO EVENTS</Button>{' '}
            </Form>
          </div>
        </div>
      </div >

    );
  }

}

function mapDispatchToProps(dispatch) {
  return { onSubmit: (event) => { dispatch(Submit(event)) } }
}



AddEvent.propTypes = {
  id: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  id: getId()

});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect,
  memo,
)(AddEvent);

