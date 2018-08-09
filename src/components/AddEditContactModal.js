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
        <Button id="closeButton" flat modal="close" waves="light">Close</Button>
        <Button id="saveButton" flat modal="close" waves="light" disabled={!this.props.isFormValid(this.props.errors)} onClick={(e) => this.props.contactChangeHandler(e, contact, mode)}>Save</Button>
        </div>
      }>
      <Row>

       <Col s={6} className='grid-example'>
        <div>
        <Input
         placeholder="Name"
         s={12} label="First Name"
         onChange={(e) => {
           this.props.updateContactProperty("firstName", e.target.value);
          }
        }
        value={contact.firstName}
        />
        </div>
        <div>
        { this.props.errors.firstName && <span style={{color: "red"}} s={12}>{this.props.errors.firstName}</span> }
        </div>
        </Col>

        <Col s={6} className='grid-example'>
         <div>
         <Input
          placeholder="Last Name"
          s={12} label="Last Name"
          onChange={(e) => {
            this.props.updateContactProperty("lastName", e.target.value);
           }
         }
         value={contact.lastName}
         />
         </div>
         <div>
         { this.props.errors.lastName && <span style={{color: "red"}} s={12}>{this.props.errors.lastName}</span> }
         </div>
         </Col>

         <Col s={6} className='grid-example'>
          <div>
          <Input
           placeholder="Email"
           s={12} label="Email"
           onChange={(e) => {
             this.props.updateContactProperty("email", e.target.value);
            }
          }
          value={contact.email}
          />
          </div>
          <div>
          { this.props.errors.email && <span style={{color: "red"}} s={12}>{this.props.errors.email}</span> }
          </div>
          </Col>

          <Col s={6} className='grid-example'>
           <div>
           <Input
           type="number"
            placeholder="Phone Number"
            s={12} label="Phone Number"
            onChange={(e) => {
              this.props.updateContactProperty("phoneNumber", e.target.value);
             }
           }
           value={contact.phoneNumber}
           />
           </div>
           <div>
           { this.props.errors.phoneNumber && <span style={{color: "red"}} s={12}>{this.props.errors.phoneNumber}</span> }
           </div>
           </Col>

           <Col s={6} className='grid-example'>
            <div>
            <Input
             placeholder="Status"
             s={12} label="Status"
             onChange={(e) => {
               this.props.updateContactProperty("status", e.target.value);
              }
            }
            value={contact.status}
            />
            </div>
            <div>
            { this.props.errors.status && <span style={{color: "red"}} s={12}>{this.props.errors.status}</span> }
            </div>
            </Col>
      </Row>
    </Modal>
  </div>
  );
}
}
