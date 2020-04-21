import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';



export class FormUserDetails extends Component {
    continue =  e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange } = this.props;
        return (
            <MuiThemeProvider 
            >
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField hintText="Enter your first Name" floatingLabelText="FirstName" 
                    onChange={handleChange('first_name')}
                    defaultValue={values.first_name}
                    /><br/>
                    <TextField hintText="Enter your last Name" floatingLabelText="lastName" 
                    onChange={handleChange('last_name')}
                    defaultValue={values.last_name}
                    /><br/>
                    <TextField hintText="Enter your Email" floatingLabelText="email" 
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    /><br/>

                    <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails
