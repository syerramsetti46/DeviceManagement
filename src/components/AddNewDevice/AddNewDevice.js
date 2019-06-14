import React, { Component } from 'react';

import './AddNewDevice.css';
//import RadioButton from '../RadioButton';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: 16,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '85%',
    maxWidth: '600px',
  },

  notesField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '85%',
  },
  dateField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '85%',
    maxWidth: '600px',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    display: 'block',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});



const deviceTypes = [
  {
    value: '1',
    label: 'MC67',
  },
  {
    value: '2',
    label: 'Mac Laptop',
  },
];
const deviceStatuses = [
  {
    value: '1',
    label: 'In Use',
  },
  {
    value: '2',
    label: 'Shipped to Facility',
  },
];
const yesNoValues = [
  {
    value: '0',
    label: 'No',
  },
  {
    value: '1',
    label: 'Yes',
  },
];
class AddNewDevice extends Component {
  state = {
    name: '',
    age: '',
    multiline: '',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  AddNewDeviceHandler() {
    const newDevice = {
      serialNumber: this.props.Name
    }
    this.props.onAddPerson(newDevice);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="outlined-name"
          label="Serial Number"
          className={classes.textField}
          onChange={this.handleChange('SerialNumber')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-IMEINumber"
          label="IMEI Number"
          className={classes.textField}
          onChange={this.handleChange('IMEINumber')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-DeviceImage"
          label="Device Image"
          className={classes.textField}
          onChange={this.handleChange('DeviceImage')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-DeviceTypes"
          select
          label="Device Type"
          className={classes.textField}
          onChange={this.handleChange('deviceType')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your Device Type"
          margin="normal"
          variant="outlined"
        >
          {deviceTypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-DeviceStatuses"
          select
          label="Device Status"
          className={classes.textField}
          onChange={this.handleChange('deviceStatus')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your Device Status"
          margin="normal"
          variant="outlined"
        >
          {deviceStatuses.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-Warranty"
          select
          label="Has Warranty?"
          className={classes.textField}
          onChange={this.handleChange('warranty')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select if Warranty is purchased"
          margin="normal"
          variant="outlined"
        >
          {yesNoValues.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-notes"
          label="Notes"
          multiline
          rowsMax="4"
          onChange={this.handleChange('Notes')}
          className={classes.notesField}
          margin="normal"
          helperText="Please enter if any additional data"
          variant="outlined"
        />
        <TextField
          id="outlined-PurchasedDate"
          label="PurchasedDate"
          type="date"
          defaultValue="2019-04-24"
          className={classes.dateField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-WarrantyEndDate"
          label="WarrantyEndDate"
          type="date"
          defaultValue="2019-04-24"
          className={classes.dateField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-PurchasedByUser"
          label="Purchased By User"
          className={classes.textField}
          onChange={this.handleChange('PurchasedByUserId')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-InPosessionUser"
          label="In Posession User"
          className={classes.textField}
          onChange={this.handleChange('InPosessionUserId')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-PurchasedFrom"
          label="Purchased From"
          className={classes.textField}
          onChange={this.handleChange('PurchasedFrom')}
          margin="normal"
          variant="outlined"
        />
        <p className={classes.button}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            <Button variant="contained" color="primary" className={classes.root}>
              Submit
                </Button>
          </span>
        </p>



        {/* <span className="input-forms">Serial Number :
                <Input id="serialNumber" name="serialNumber"></Input></span>
                
                <span className="input-forms">IMEI Number : <Input id="IMEINumber" name="IMEINumber"></Input></span>
                <span className="input-forms">Device Image : <Input id="DeviceImage" name="DeviceImage"></Input></span>
                <span className="input-forms">Device Type : <Select placeholder="DeviceType">
                                                                <MenuItem value ="1">MC67</MenuItem>
                                                                <MenuItem value ="2">Mac Laptop</MenuItem>
                                                            </Select>
                </span>
                <span className="input-forms">Device Status : <Select placeholder="DeviceStatus">
                    <MenuItem value="1">In Use</MenuItem>
                    <MenuItem value="2">Shipped to Facility</MenuItem>
                </Select></span>
                <span className="input-forms">IsDeleted : <RadioButton  Name="IsDeleted"/></span>
                <span className="input-forms">Does it have Warranty : <RadioButton  Name="IsWarranty"/></span>
                <span className="input-forms">Notes : <Input  type="text" placeholder="Notes"></Input></span>
                <span className="input-forms">Purchased Date :<Input type="text" placeholder="PurchasedDate"></Input></span>
                <span className="input-forms">Warranty End Date : <Input type="text" placeholder="WarrantyEndDate"></Input></span>
                <span className="input-forms">PurchasedByUserId : <Input type="text" placeholder="PurchasedByUserId"></Input></span>
                <span className="input-forms">InPosessionUserId : <Input type="text" placeholder="InPosessionUserId"></Input></span>
                
                <button className="button" onClick={this.AddNewDeviceHandler}>AddNewDevice</button>
                <span className="input-forms">Purchased From : <Input type="text" placeholder="Purchased From"></Input></span>
                */ }
      </form>
    );
  }
}
AddNewDevice.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddNewDevice);