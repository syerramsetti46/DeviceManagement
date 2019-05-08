import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '16px auto 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class AddDevice extends Component {

    state = {

    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Serial Number' onChange={this.handleChange('SerialNumber')} />
                    </div>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='IMEI Number' onChange={this.handleChange('SerialNumber')} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Device Image' onChange={this.handleChange('SerialNumber')} />
                    </div>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Device Status' onChange={this.handleChange('SerialNumber')} helperText="Please select your Device Status" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Device Type' onChange={this.handleChange('SerialNumber')} helperText="Please select your Device Type" />
                    </div>
                    <div className='col-sm-6'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Has Warranty?' onChange={this.handleChange('SerialNumber')} helperText="Please select if Warranty is purchased" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <TextField variant='outlined' margin='dense' fullWidth label='Notes' onChange={this.handleChange('SerialNumber')} helperText="Please enter if any additional data" />
                    </div>
                    <div className='col-6'>
                        <TextField margin='dense' fullWidth label='Purchased Date' onChange={this.handleChange('SerialNumber')} type='date' defaultValue="2019-04-24" />
                        <TextField variant='outlined' margin='dense' fullWidth label='Purchased By User' onChange={this.handleChange('SerialNumber')} />
                        <TextField variant='outlined' margin='dense' fullWidth label='Purchased From' onChange={this.handleChange('SerialNumber')} />
                    </div>
                    <div className='col-6'>
                        <TextField margin='dense' fullWidth label='Warranty End Date' onChange={this.handleChange('SerialNumber')} type='date' defaultValue="2019-04-24" />
                        <TextField variant='outlined' margin='dense' fullWidth label='In Possession User' onChange={this.handleChange('SerialNumber')} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Button variant='contained' className={classes.root}>Submit</Button>
                    </div>
                </div>
            </div >
        )
    }

}

export default withStyles(styles)(AddDevice);