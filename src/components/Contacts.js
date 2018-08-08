import React from "react";
import ReactDOM from "react-dom";
import { Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';
import {EDIT, ADD} from "../utils/constants";
import AddEditContactModal from "./AddEditContactModal";
import {ContactList} from './ContactList';

export class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [
      {
        "id": 1,
        "firstName" : "John",
        "lastName" : "Doe",
        "email": "johndoe@something.com",
        "phoneNumber": "1111111111",
        "status": "active"
      },
      {
        "id": 2,
        "firstName" : "Alice",
        "lastName" : "James",
        "email": "alicejames@something.com",
        "phoneNumber": "1122233669",
        "status": "active"
      }
    ],
    contact: {},
    mode: ""
    }

    this.deleteContact = this.deleteContact.bind(this);
    this.contactChangeHandler = this.contactChangeHandler.bind(this);
    this.updateContactProperty = this.updateContactProperty.bind(this);
    this.setContactForEdit = this.setContactForEdit.bind(this);
  }

  setContactForEdit(contact, mode) {
    this.setState({
      contact: {...contact},
      mode: mode
    });
  }

  updateContactProperty(attribute, value) {
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
      >
      </AddEditContactModal>
  </div>
  );
}
}
