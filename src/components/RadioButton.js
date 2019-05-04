import React from 'react';
import { RadioGroup, FormControlLabel,Radio,FormControl } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
//import Switch from '@material-ui/core/Switch';
//const setValue=(event)=>{

   // console.log (event.target.value );

//};

const styles = theme => ({
    root: {
      display: 'flex',
       width: 'auto' 
    },
    formControl: {
      margin: theme.spacing.unit * 1,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
      width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
  });

class  RadioButton extends React.Component
{
    state = {
        value: '1',
      };

      state = {
    value: 'female',
  };


  handleChange = event => {
    this.setState({ value: event.target.value });
  };

    render (){
        const { classes } = this.props;
        return (
            
            <FormControl component="fieldset" >
            <RadioGroup
                name="{props.Name}"
                className={classes.group}
            value={this.state.value}
            onChange={this.handleChange} 
            >
                <FormControlLabel value="1" control={<Radio />} label="True" />
                <FormControlLabel value="0" control={<Radio />} label="False" />
              </RadioGroup>
              </FormControl>
            /*<div onChange={()=> setValue()}>
                <input type="radio" value="True" name={props.Name}/> True
                <input type="radio" value="False" name={props.Name}/> False
          </div>*/
        );
    }
    
}
RadioButton.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(RadioButton);