/**
 *
 * EditEvent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Submit } from './actions';
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useInjectReducer } from 'utils/injectReducer';
import { selectEditEvent } from './selectors';
import Button from 'react-bootstrap/Button';
import reducer from './reducer';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Edit } from './actions';


export function EditEvent(props) {
  useInjectReducer({ key: 'editEvent', reducer });
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");



  const handleSubmit = () => {
    console.log(title);
    console.log(date);
    console.log(time);
    console.log(kind);


  };

  return (
    <div>
      <div className="formedit">
        <Form width={300} height={500}>
          <p>---Edit {props.eventedit.title} Event---</p>
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>Title Event</Form.Label>
            <Form.Control type="string" placeholder={props.eventedit.title} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Date Event</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Time Event</Form.Label>
            <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={() => {
            props.onEdit({ title: title, date: date, time: time, kind: props.eventedit.kind, id: props.eventedit.id })
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
