import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { bindActionCreators } from 'redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';





export default function Dashboard() {
  

  return (
    <div>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <p {...bindTrigger(popupState)}>yyy</p>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>
              <form className="formm">
        <br></br>
          <input type="text" placeholder="Enter title of event" name="title"  /><br></br>
          <input type="number" placeholder="Enter number of peoples" name="numberp" /><br></br>
          <input type="text" placeholder="Enter id" name="id" /><br></br>
          <input type="date" placeholder="Enter id" name="id"  /><br></br><br></br>
          <br></br>
          <FormControl >
        {/* <InputLabel id="demo-simple-select-label">Kind Of Event</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={this.age}
          // onChange={this.handleChange}
        >
          <MenuItem value={"wedding"}>Wedding</MenuItem>
          <MenuItem value={"birthday"}>Birthday</MenuItem>
          <MenuItem value={"meeting"}>Meeting</MenuItem>
        </Select>
      </FormControl>
      <br></br><br></br><br></br>
        
        </form>
                <br></br><br></br><button>Change Details</button> <button>Cancel</button> </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
    </div>
  );
}