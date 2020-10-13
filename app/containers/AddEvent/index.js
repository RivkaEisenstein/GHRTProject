/**
 *
 * AddEvent
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import './style.scss';
import history from 'utils/history';
import { Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Calendar from '../Calendar';
import { getId } from '../App/selectors';
import { Submit } from './actions';

export class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      currentKind: 'weeding',
      newEvent: { title: "yyyy", date: new Date(), time: '', kind: '', id: '' },
      titleText:'aaa',
      placeholderText:'aaa'


    }
    this.FirstRef = React.createRef();
    this.LastRef = React.createRef();
    this.IdtRef = React.createRef();
    this.DatetRef = React.createRef();
    this.TimeRef = React.createRef();
    this.saveContact = this.saveContact.bind(this);
    
  }



  saveContact() {

    this.state.newEvent.date = this.DatetRef.current.value;
    this.state.newEvent.title = this.FirstRef.current.value;
    this.state.newEvent.time = this.TimeRef.current.value;
    this.state.newEvent.id = this.props.id;
    this.state.newEvent.kind = this.state.currentKind;
  }



  render() {
    const { onSubmit } = this.props;
    const { newEvent } = this.state;

    const getAddEventForm = (kind) => {
      console.log(kind);
      this.state.currentKind = kind;
   
      switch (kind) {
        case "birthday":
          this.state.titleText= "birthday";
          this.state.placeholderText ="birthday";

          break;
        case "meeting":
          this.state.titleText= "meeting";
          this.state.placeholderText ="meeting";
          break;
        case "weeding":
          this.state.titleText= "weeding";
          this.state.placeholderText ="weeding";
          break;
        default: break;
      }
      return (<div className="form_birthday">
        <Form width={200} height={300}>
          <h3>{this.state.titleText}</h3>
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>Title Event</Form.Label>
            <Form.Control type="string" placeholder={this.state.placeholderText} ref={this.FirstRef} name="title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Date Event</Form.Label>
            <Form.Control type="date"  ref={this.DatetRef} name="date" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Time Event</Form.Label>
            <Form.Control type="time" ref={this.TimeRef} name="time" />
          </Form.Group>

          <Button
            variant="outline-danger"
            onClick={()=>{this.saveContact()}}
          >SAVE CHANGES</Button>{' '}
          <Button
            variant="outline-danger"
            onClick={
              () => { onSubmit(newEvent); history.push('/FullCalendar') }
            }
          >ADD TO EVENTS</Button>{' '}
        </Form>
      </div>)
    };

    return (
      <div className="add_event_container">
        <Switch>
          <Route exact path="/FullCalendar" component={Calendar} />
        </Switch>

        <div className="add_event_h1">
          <h3 >ADD EVENTS</h3>
          <div className="div_kind">
            <p className="p_kind">choose kind of event </p>

            <Form.Control
              className="form_control"
              as="select"
              custom
              variant="danger"
              onChange={(e) => { getAddEventForm(e.target.value); this.state.currentKind = e.target.value }}
            >
              <option value="weeding">Wedding</option>
              <option value="meeting">Meeting</option>
              <option value="birthday">Birthday</option>

            </Form.Control>
          </div>
        </div>

        <div className="add_events">
          {getAddEventForm("weeding")}

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
  onSubmit: PropTypes.func
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

