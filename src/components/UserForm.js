import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import { RaisedButton } from "material-ui";
import FormPersonalDetails from "./FormPersonalDetails";
import ConfirmDetails from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        location: "",
    };

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // go back to previos
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    //handle Fields change
    handleChange = (input) => (e) => {
        this.setState({
            [input]: e.target.value,
        });
    };
    render() {
        const {
            step,
            first_name,
            email,
            location,
            phone_number,
            last_name,
        } = this.state;
        const values = { step, first_name, email, phone_number, location, last_name };

        switch (step) {
            case 1:
                return ( <
                    FormUserDetails nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />
                );
            case 2:
                return ( <
                    FormPersonalDetails nextStep = { this.nextStep }
                    prevStep = { this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />
                );

            case 3:
                return ( <
                    ConfirmDetails nextStep = { this.nextStep }
                    prevStep = { this.prevStep }
                    values = { values }
                    />
                );
            case 4:
                return <Success / > ;
        }
    }
}

export default UserForm;