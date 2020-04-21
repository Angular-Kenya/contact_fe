import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import { RaisedButton } from "material-ui";
import axios from "axios";
import { withAlert } from "react-alert";

const axiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export class ConfirmDetails extends Component {
  continue = async (e) => {
    e.preventDefault();

    console.log(this.props.values);
    delete this.props.values["step"];
    await axios
      .post(
        "https://angularke.herokuapp.com/api/submit",
        this.props.values,
        axiosHeader
      )
      .then((result) => {
        this.props.nextStep();
        console.log(result);
      })
      .catch((error) => {
        this.props.alert.show(
          "Ensure email is valid and phone is longer than 10 characters"
        );
        console.log(error);
      });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { first_name, email, phone_number, last_name, location },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={first_name} />
            <ListItem primaryText="last Name" secondaryText={last_name} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="location" secondaryText={location} />
            <ListItem primaryText="phone Number" secondaryText={phone_number} />
          </List>

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default withAlert()(ConfirmDetails);
