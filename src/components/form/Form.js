import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {connect}   from "react-redux"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import contactsActions from "../../redux/contacts-actions"
import Notification from "../Notification/Notification";
import { CSSTransition} from "react-transition-group";

import "../Notification/notification.css";

class Form extends Component {
  state = {
    name: " ",
    number: " ",
    notification: false,
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  getContact = (e) => {
    e.preventDefault();
    if (
      this.props.state.contacts.items.find((el) => el.name === this.state.name)
    ) {
      this.setState({ notification: true, name: " ", number: " " });
    } else {
      const contact = {
        name: this.state.name,
        number: this.state.number,
        id: uuidv4,
      };
      this.props.onSubmit(contact);
      this.setState({ name: " ", number: " " });
    }
    e.target.reset();
  };


  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.getContact}>
          <h2>Name</h2>

          <label>
            Name:
            <TextField
              id="outlined-basic"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone number:
            <TextField
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <Button variant="contained" color="primary" type="submit">
            Add Contact
          </Button>
        </form>
        <CSSTransition
          in={this.state.notification}
          unmountOnExit
          timeout={2000}
          classNames="notification"
          onEntered={() => this.setState({ notification: false })}
        >
          <Notification />
        </CSSTransition>
      </>
    );
  }
}
const mapStateToProps = state => {
 return {state}
}

const mapDispatchToProps = {
onSubmit:contactsActions.getContacts
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
