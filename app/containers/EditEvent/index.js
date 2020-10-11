/**
 *
 * EditEvent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose } from 'redux';


import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import reducer from './reducer';
import { selectEditEvent } from './selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Edit } from './actions';


export function EditEvent(props) {
  useInjectReducer({ key: 'editEvent', reducer });
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");





  return (
    <div>
      <div className="form_edit">
        <Form width={300} height={500}>
          <p>---Edit {props.eventedit.title} Event--- </p>
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>Title Event</Form.Label>
            <Form.Control type="string" placeholder={props.eventedit.title} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Date Event</Form.Label>
            <Form.Control type="date" value="2020-01-20" onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Time Event</Form.Label>
            <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </Form.Group>

          <Button 
            variant="primary" 
            onClick={() => {
              props.onEdit({ title, date, time, kind: props.eventedit.kind, id: props.eventedit.id })
            }
            }>Save Changes</Button>{' '}
        </Form>
      </div >
    </div>
  );
}

EditEvent.propTypes = {
  onEdit: PropTypes.func,
  eventedit: PropTypes.any,

};

const mapStateToProps = createStructuredSelector({
  eventedit: selectEditEvent(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEdit: a => dispatch(Edit(a))
  };
}




const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditEvent);
