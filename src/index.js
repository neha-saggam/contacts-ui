import React from "react";
import ReactDOM from "react-dom";
import {Navbar, NavItem, Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize'

const EDIT = "Edit";
const ADD = "Add";

class Index extends React.Component {

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
    editContact: {},
    mode: ""
    }
    this.renderContacts = this.renderContacts.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }
    deleteContact(id, e) {
      let contacts = this.state.contacts.filter(contact => contact.id !== id);
      console.log("contacts after deletion: ", contacts)
      this.setState({contacts});
    }

    editContact(e, mode) {
      console.log("editContact: ", this.state.editContact);
      if(mode == EDIT) {
        console.log("in edit");
        const contacts = this.state.contacts.map((contact, index) => {
          if(contact.id === this.state.editContact.id) {
            contact = this.state.editContact;
          }
          return contact;
        });
        this.setState({contacts});
      }
      else {
          console.log("in create");
          this.setState({contacts: [...this.state.contacts, this.state.editContact]});
      }
    }

    renderContacts(props) {
    const contacts = props;
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
      <a onClick={(e) => {
        console.log("contact: ", contact);
        this.setState({
          editContact: {...contact},
          mode: EDIT
        });
        $('#editContactModal').modal('open')
      }}>
      <Icon>edit</Icon></a>
      </Col>
      <Col s={1}>
        <a onClick={(e) => this.deleteContact(contact.id, e)}><Icon>delete</Icon></a>
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

  render() {
    return (<div>
    <Navbar brand='Contacts' right style={{backgroundColor: "#2a56c6"}}>
    </Navbar>
    <br />
    <Row className='right'>
      <Button s={12} floating style={{marginRight: 10}} small waves='light' icon='add' onClick={(e) => {
        this.setState({
          editContact: {},
          mode: ADD
        });
        $('#editContactModal').modal('open')
      }}/>
    </Row><br />
    <br />
      <Row>
      {this.renderContacts(this.state.contacts)}
      </Row>
      <Modal
        id='editContactModal'
        header={this.state.mode}
        actions={
          <div>
          <Button flat modal="close" waves="light">Close</Button>
          <Button flat modal="close" waves="light" onClick={(e) => this.editContact(e, this.state.mode)}>Save</Button>
          </div>
        }>
        <Row>
          <Input
           placeholder="Name"
           s={6} label="First Name"
           onChange={(e) => {
             let firstName = e.target.value;
             let editContact = this.state.editContact;
             editContact.firstName = firstName;
             this.setState({editContact: editContact})
            }
          }
          value={this.state.editContact.firstName}
          />
          <Input
            s={6}
            placeholder="Name"
            label="Last Name"
            onChange={(e) => {
              let lastName = e.target.value;
              let editContact = this.state.editContact;
              editContact.lastName = lastName;
              this.setState({editContact: editContact})
             }
           }
            value={this.state.editContact.lastName}
            />
          <Input
            s={6}
            placeholder="Name"
            label="Status"
            value={this.state.editContact.status}
            onChange={(e) => {
              let status = e.target.value;
              let editContact = this.state.editContact;
              editContact.status = status;
              this.setState({editContact: editContact})
             }
            }
            />
          <Input
            s={6}
            placeholder="Name"
            label="Contact"
            value={this.state.editContact.phoneNumber}
            onChange={(e) => {
              let phoneNumber = e.target.value;
              let editContact = this.state.editContact;
              editContact.phoneNumber = phoneNumber;
              this.setState({editContact: editContact})
             }
           }
            />
          <Input
            type="email"
            placeholder="Name"
            label="Email"
            value={this.state.editContact.email}
            s={12}
            onChange={(e) => {
              let email = e.target.value;
              let editContact = this.state.editContact;
              editContact.email = email;
              this.setState({editContact: editContact})
             }
           }/>
        </Row>
      </Modal>

      </div>);
  }
}


// const Index = () => {
//   return (
//     <div>
//     <Navbar brand='logo' right style={{backgroundColor: "#2a56c6"}}>
//       <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
//       <NavItem href='components.html'>Components</NavItem>
//     </Navbar>
//
//     <Collection header='Contacts' style={{width: 50}}>
//       <CollectionItem>
//         <Row className='center'>
//         <Col s={3}>
//           Alvin
//         </Col>
//         <Col s={3}>
//           <Icon>edit</Icon>
//         </Col>
//         <Col s={3}>
//           <Icon>delete</Icon>
//         </Col>
//         </Row>
//         </CollectionItem>
//       <CollectionItem>
//       <Row className='center'>
//       <Col s={3}>
//         Alvin
//       </Col>
//       <Col s={3}>
//         <Icon>edit</Icon>
//       </Col>
//       </Row></CollectionItem>
//       <CollectionItem><Row className='center'>
//       <Col s={3}>
//         Alvin
//       </Col>
//       <Col s={3}>
//         <Icon>edit</Icon>
//       </Col>
//       </Row>
//       </CollectionItem>
//       </Collection>
//       </div>
// );
// };

ReactDOM.render(<Index />, document.getElementById("index"));
