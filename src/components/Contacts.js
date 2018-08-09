import React from "react";
import ReactDOM from "react-dom";
import { Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';
import {EDIT, ADD} from "../utils/constants";
import AddEditContactModal from "./AddEditContactModal";
import {ContactList} from './ContactList';

function extend(obj, src) {
  for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

function isFormValid(errors) {
  console.log("errors: ", errors);
  for (var key in errors) {
    if(errors[key].length != 0) {
      return false;
    }
}
  return true;
}

function convertKeyToLabel(text) {
  var result = text.replace( /([A-Z])/g, " $1" );
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [
    ],
    contact: {},
    mode: "",
    errors: {}
    }

    this.deleteContact = this.deleteContact.bind(this);
    this.contactChangeHandler = this.contactChangeHandler.bind(this);
    this.updateContactProperty = this.updateContactProperty.bind(this);
    this.setContactForEdit = this.setContactForEdit.bind(this);
  }

  componentDidMount() {
    console.log("this.props: ", this.props);
    this.props.getContacts();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    this.setState({contacts: nextProps.contacts})
  }

  setContactForEdit(contact, mode) {
    this.setState({
      contact: {...contact},
      mode: mode
    });
  }

  updateContactProperty(attribute, value) {
    let error = {};
    if(value.length == 0) {
      error[attribute] = convertKeyToLabel(attribute) + " cannot be empty.";
      console.log("error: ", error);
      let merged = extend(this.state.errors, error);
      this.setState({ errors: merged });
    }
    else {
      error[attribute] = "";
      let merged = extend(this.state.errors, error);
      this.setState({ errors: merged })
    }

    if(attribute == "email") {
      if (validateEmail(value)) {
        error[attribute] = "";
        let merged = extend(this.state.errors, error);
        this.setState({ errors: merged })
      }
      else {
        error[attribute] = error[attribute] + " " + convertKeyToLabel(attribute) + " is invalid.";
        console.log("error: ", error);
        let merged = extend(this.state.errors, error);
        this.setState({ errors: merged });
      }
    }

    if(attribute == "phoneNumber") {
      if (value.length != 10) {
        error[attribute] = error[attribute] + " " + convertKeyToLabel(attribute) + " is invalid.";
        console.log("error: ", error);
        let merged = extend(this.state.errors, error);
        this.setState({ errors: merged });

      }
      else {
        error[attribute] = "";
        let merged = extend(this.state.errors, error);
        this.setState({ errors: merged });
      }
    }

    let updatedContact = this.state.contact;
    updatedContact[attribute] = value;
    this.setState({contact: updatedContact});
  }

  deleteContact(id, e) {
    let contacts = this.state.contacts.filter(contact => contact.id !== id);
    console.log("contacts after deletion: ", contacts)
    this.setState({contacts});
  }

  contactChangeHandler(e, changedContact, mode) {
    if(mode == EDIT) {
      console.log("in edit");
      const contacts = this.state.contacts.map((contact, index) => {
        if(contact.id === changedContact.id) {
          contact = changedContact;
        }
        return contact;
      });
      this.setState({contacts});
    }
    else {
        console.log("in create");
        this.setState({contacts: [...this.state.contacts, changedContact]});
    }
  }

render() {
  console.log("errors: ", this.state.errors);
  return (
    <div>
      <Row>
        <Button s={12} floating className='add-button' small="true" waves='light' icon='add' onClick={(e) => {
          this.setState({
            contact: { firstName: "", lastName: "", phoneNumber: "", status: "", email: ""},
            mode: ADD
          });
          $('#addEditContactModal').modal('open')
        }}/>
      </Row>
      <ContactList contacts={this.state.contacts} mode={this.state.mode} setContactForEdit={this.setContactForEdit} deleteContact={this.deleteContact}></ContactList>
      <AddEditContactModal
        mode={this.state.mode}
        contact={this.state.contact}
        contactChangeHandler={this.contactChangeHandler}
        updateContactProperty={this.updateContactProperty}
        errors={this.state.errors}
        isFormValid={isFormValid}
      >
      </AddEditContactModal>
  </div>
  );
}
}
