import React from "react";
import {Col, Row, Modal, Button, Input} from 'react-materialize';
import PropTypes from "prop-types";

const AddEditContactModal = (props) => {
    const {contact, mode, isFormValid, errors, contactChangeHandler, updateContactProperty} = props;
    return (
      <div>
        <Modal
          id='addEditContactModal'
          header={mode}
          actions={(
            <div>
              <Button
                id="closeButton"
                flat
                modal="close"
                waves="light"
              >
                                Close
              </Button>
              <Button
                id="saveButton"
                flat
                modal="close"
                waves="light"
                disabled={!isFormValid(errors)}
                onClick={(e) => contactChangeHandler(e, contact, mode)}
              >
                                Save
              </Button>
            </div>
)}
        >
          <Row>

            <Col s={6} className='grid-example'>
              <div>
                <Input
                  placeholder="Name"
                  s={12}
                  label="First Name"
                  onChange={(e) => {
                                        updateContactProperty("firstName", e.target.value);
                                    }
                                    }
                  value={contact.firstName}
                />
              </div>
              <div>
                {errors.firstName &&
                <span style={{color: "red"}} s={12}>{errors.firstName}</span>}
              </div>
            </Col>

            <Col s={6} className='grid-example'>
              <div>
                <Input
                  placeholder="Last Name"
                  s={12}
                  label="Last Name"
                  onChange={(e) => {
                                        updateContactProperty("lastName", e.target.value);
                                    }
                                    }
                  value={contact.lastName}
                />
              </div>
              <div>
                {errors.lastName &&
                <span style={{color: "red"}} s={12}>{errors.lastName}</span>}
              </div>
            </Col>

            <Col s={6} className='grid-example'>
              <div>
                <Input
                  placeholder="Email"
                  s={12}
                  label="Email"
                  onChange={(e) => {
                                        updateContactProperty("email", e.target.value);
                                    }
                                    }
                  value={contact.email}
                />
              </div>
              <div>
                {errors.email &&
                <span style={{color: "red"}} s={12}>{errors.email}</span>}
              </div>
            </Col>

            <Col s={6} className='grid-example'>
              <div>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  s={12}
                  label="Phone Number"
                  onChange={(e) => {
                                        updateContactProperty("phoneNumber", e.target.value);
                                    }
                                    }
                  value={contact.phoneNumber}
                />
              </div>
              <div>
                {errors.phoneNumber &&
                  <span style={{color: "red"}} s={12}>{errors.phoneNumber}</span>}
              </div>
            </Col>

            <Col s={6} className='grid-example'>
              <div>
                <Input
                  placeholder="Status"
                  s={12}
                  label="Status"
                  onChange={(e) => {
                                        updateContactProperty("status", e.target.value);
                                    }
                                    }
                  value={contact.status}
                />
              </div>
              <div>
                {errors.status &&
                <span style={{color: "red"}} s={12}>{errors.status}</span>}
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    )
};

export default AddEditContactModal;

AddEditContactModal.propTypes = {
    contact: PropTypes.object.contact.isRequired,
    contactChangeHandler: PropTypes.func.contactChangeHandler.isRequired,
    errors: PropTypes.array.errors,
    mode: PropTypes.string.mode,
    isFormValid: PropTypes.func.isFormValid.isRequired,
    updateContactProperty: PropTypes.func.updateContactProperty.isRequired
};

AddEditContactModal.defaultProps = {
    mode: 'Add',
    errors: []
};
