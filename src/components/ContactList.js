import React from "react";
import ReactDOM from "react-dom";
import {Navbar, NavItem, Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';

export function ContactList(props) {
  const { contacts, mode, setContactForEdit, deleteContact } = props;
  const contactItems = contacts.map((contact, index) =>
  <CollectionItem key={index}>
    <Row className='center'>
    <Col s={3}>
      {contact.firstName} {contact.lastName}
    </Col>
    <Col s={2}>
      {contact.email}
    </Col>
    <Col s={2}>
      {contact.phoneNumber}
    </Col>
    <Col s={1}>
      {contact.status }
    </Col>
    <Col s={1}>
    <a id={"openModal"+contact.firstName} onClick={(e) => {
      setContactForEdit(contact, mode);
      $('#addEditContactModal').modal('open')
    }}>
    <Icon>edit</Icon></a>
    </Col>
    <Col s={1}>
      <a onClick={(e) => deleteContact(contact.id, e)}><Icon>delete</Icon></a>
    </Col>
    </Row>
    </CollectionItem>
  );

return (
  <Collection s={12} style={{marginLeft: 10, width: 50}}>
  <CollectionItem>
    <Row className='center'>
    <Col s={3}>
      <b>Name</b>
    </Col>
    <Col s={2}>
      <b>Email</b>
    </Col>
    <Col s={2}>
      <b>Contact</b>
    </Col>
    <Col s={1}>
      <b>Status</b>
    </Col>
    <Col s={2}>
      <b>Actions</b>
    </Col>
    </Row>
    </CollectionItem>
    {contactItems}
    </Collection>
);
}
