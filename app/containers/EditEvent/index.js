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


export function EditEvent(onEdit,eventedit) {
  useInjectReducer({ key: 'editEvent', reducer });
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState(eventedit.date);
  const [time, setTime] = React.useState("");

  return (
    <div>
      <div className="form_edit">
        <Form width={300} height={500} margin-top={20}>
          <h2 className="h2">---Edit  Event--- </h2>
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>Title Event</Form.Label>
            <Form.Control type="string" placeholder={eventedit.title} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Date Event</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Time Event</Form.Label>
            <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </Form.Group>
          <Button 
            variant="outline-danger"
            onClick={() => {
              onEdit({ title, date, time, kind: eventedit.kind, id: eventedit.id })
            }
            }>Save Changes </Button>{' '}
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
    onEdit: event => dispatch(Edit(event))
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
