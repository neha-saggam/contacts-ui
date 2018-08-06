import React from "react";
import ReactDOM from "react-dom";
import {Navbar, NavItem, Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';
import {EDIT, ADD} from "../utils/constants";

export default class AddEditContactModal extends React.Component {

  constructor(props) {
    super(props);
  }

render() {
  const { contact, mode } = this.props;
  return (
    <div>
    <Modal
      id='addEditContactModal'
      header={this.props.mode}
      actions={
        <div>
        <Button flat modal="close" waves="light">Close</Button>
        <Button flat modal="close" waves="light" onClick={(e) => this.props.contactChangeHandler(e, contact, mode)}>Save</Button>
        </div>
      }>
      <Row>
        <Input
         placeholder="Name"
         s={6} label="First Name"
         onChange={(e) => {
           this.props.updateContactProperty("firstName", e.target.value);
          }
        }
        value={contact.firstName}
        />
        <Input
          s={6}
          placeholder="Name"
          label="Last Name"
          onChange={(e) => {
            this.props.updateContactProperty("lastName", e.target.value);
           }
         }
          value={contact.lastName}
          />
        <Input
          s={6}
          placeholder="Name"
          label="Status"
          value={contact.status}
          onChange={(e) => {
            this.props.updateContactProperty("status", e.target.value);
           }
          }
          />
        <Input
          s={6}
          placeholder="Name"
          label="Contact"
          value={contact.phoneNumber}
          onChange={(e) => {
            this.props.updateContactProperty("phoneNumber", e.target.value);
           }
         }
          />
        <Input
          type="email"
          placeholder="Name"
          label="Email"
          value={contact.email}
          s={12}
          onChange={(e) => {
            this.props.updateContactProperty("email", e.target.value);
           }
         }/>
      </Row>
    </Modal>
  </div>
  );
}
}
