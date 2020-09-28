/**
 *
 * Alert
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Alert() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div>
  
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
             Edit Your Event!!!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title Event"
              type="string"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Sum People"
              type="number"
              fullWidth
            />
               <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Date Event"
              type="date"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
             Okey
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    
  );
}

Alert.propTypes = {};

export default memo(Alert);
