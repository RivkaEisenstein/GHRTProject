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
import { Kinds } from '../Navbar/constants';

export class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      newEvent: { title: "yyyy", date: new Date(), time: '', kind: '', id: '' },
      showWedding: true,
      showMeeting: false,
      showBirthday: false,

    }
    this.FirstRef = React.createRef();
    this.LastRef = React.createRef();
    this.IdtRef = React.createRef();
    this.saveContact1 = this.saveContact1.bind(this);
    this.saveContact2 = this.saveContact2.bind(this);
    this.saveContact3 = this.saveContact3.bind(this);

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


  showForm = (kind) => {
    if (kind === "birthday") {
      this.setState({ showWedding: false });
      this.setState({ showBirthday: true });
      this.setState({ showMeeting: false });
    }
    if (kind === "weeding") {
      this.setState({ showWedding: true });
      this.setState({ showBirthday: false });
      this.setState({ showMeeting: false });
    }
    if (kind === "meeting") {
      this.setState({ showWedding: false });
      this.setState({ showBirthday: false });
      this.setState({ showMeeting: true });
    }

  }

  saveContact1() {

    this.state.newEvent.date = this.DatetRef.current.value;
    this.state.newEvent.title = this.FirstRef.current.value;
    this.state.newEvent.time = this.TimeRef.current.value;
    this.state.newEvent.id = this.props.id;
    this.state.newEvent.kind = "weeding";
  }

  saveContact2() {

    this.state.newEvent.date = this.DatetRef.current.value;
    this.state.newEvent.title = this.FirstRef.current.value;
    this.state.newEvent.time = this.TimeRef.current.value;
    this.state.newEvent.id = this.props.id;
    this.state.newEvent.kind = "meeting";
  }

  saveContact3() {

    this.state.newEvent.date = this.DatetRef.current.value;
    this.state.newEvent.title = this.FirstRef.current.value;
    this.state.newEvent.time = this.TimeRef.current.value;
    this.state.newEvent.id = this.props.id;
    this.state.newEvent.kind = "birthday";
  }



  render() {
    return (
      <div className="add_event_container">

        <Switch>

          <Route exact path="/FullCalendar" component={Calendar} />

        </Switch>
        {/* </div> */}
        <div className="add_event_h1">
          <h3 >ADD EVENTS</h3>
          <div className="div_kind">
            <p className="p_kind">choose kind of event  {'   '}</p>{'     '}<p>  </p>

            <Form.Control
              className="form_control"
              as="select"
              custom
              variant="danger"
              onChange={(e) => { this.showForm(e.target.value) }}
            >
              <option value="weeding">Wedding</option>
              <option value="meeting">Meeting</option>
              <option value="birthday">Birthday</option>

            </Form.Control>
          </div>
        </div>

        <div className="add_events">

          <br></br>
          <br></br>
          <br></br>
          {this.state.showBirthday && <div className="form_birthday">
            <Form width={200} height={300}>
              <h3>Add Birthday Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="birthday for eli age 5" ref={this.FirstRef} name="title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" ref={this.DatetRef} name="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" ref={this.TimeRef} name="time" />
              </Form.Group>

              <Button
                variant="outline-danger"
                onClick={this.saveContact3}
              >SAVE CHANGES</Button>{' '}
              <Button
                variant="outline-danger"
                onClick={
                  () => { this.props.onSubmit(this.state.newEvent); history.push('/FullCalendar') }
                }
              >ADD TO EVENTS</Button>{' '}
            </Form>
          </div>}

          {this.state.showWedding && <div className="form_birthday">
            <Form width={200} height={300}>
              <h3>Add Wedding Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="wedding for moti in armonot fridman" ref={this.FirstRef} name="title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" ref={this.DatetRef} name="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" ref={this.TimeRef} name="time" />
              </Form.Group>

              <Button
                variant="outline-danger"
                onClick={this.saveContact1}
              >SAVE CHANGES</Button>{' '}
              <Button
                variant="outline-danger"
                onClick={
                  () => { this.props.onSubmit(this.state.newEvent); history.push('/FullCalendar') }
                }
              >ADD TO EVENTS</Button>{' '}
            </Form>
          </div>}

          {this.state.showMeeting && <div className="form_birthday">
            <Form width={200} height={300}>
              <h3>Add Meeting Event</h3>
              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Title Event</Form.Label>
                <Form.Control type="string" placeholder="meeting in konkord bnei brak" ref={this.FirstRef} name="title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Date Event</Form.Label>
                <Form.Control type="date" ref={this.DatetRef} name="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Time Event</Form.Label>
                <Form.Control type="time" ref={this.TimeRef} name="time" />
              </Form.Group>

              <Button
                variant="outline-danger"
                onClick={this.saveContact2}
              >SAVE CHANGES</Button>{' '}
              <Button
                variant="outline-danger"
                onClick={
                  () => { this.props.onSubmit(this.state.newEvent); history.push('/FullCalendar') }
                }
              >ADD TO EVENTS</Button>{' '}
            </Form>
          </div>}
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

