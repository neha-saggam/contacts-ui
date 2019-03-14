import React from "react";
import {Row, Button} from 'react-materialize';
import {EDIT, ADD} from "../utils/constants";
import AddEditContactModal from "./AddEditContactModal";
import {extend, isFormValid, convertKeyToLabel, validateEmail} from "../utils/helperFunctions";
import List from './shared/List';

export default class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            contact: {},
            mode: "Add",
            errors: {},
            headings: [{
                name: "Name",
                width: 3,
                key: ["firstName", "lastName"]
            },
                {
                    name: "Email",
                    width: 2,
                    key: "email"
                },
                {
                    name: "Contact",
                    width: 2,
                    key: "contact"
                },
                {
                    name: "Status",
                    width: 1,
                    key: "status"
                },
                {
                    name: "Actions",
                    width: 2,
                    key: "actions"
                }]
        };

        this.deleteContact = this.deleteContact.bind(this);
        this.contactChangeHandler = this.contactChangeHandler.bind(this);
        this.updateContactProperty = this.updateContactProperty.bind(this);
        this.setContactForEdit = this.setContactForEdit.bind(this);
    }

    componentDidMount() {
        this.props.getContacts();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({contacts: nextProps.contacts})
    }

    setContactForEdit(contact, mode) {
        this.setState({
            contact: {...contact},
            mode
        });
    }

    updateContactProperty(attribute, value) {
        const error = {};
        const {errors} = this.state;
        if (!value.length) {
            error[attribute] = `${convertKeyToLabel(attribute)} cannot be empty.`;
            console.log("error: ", error);
            const merged = extend(errors, error);
            this.setState({errors: merged});
        }
        else {
            error[attribute] = "";
            const merged = extend(errors, error);
            this.setState({errors: merged})
        }

        if (attribute === "email") {
            if (validateEmail(value)) {
                error[attribute] = "";
                const merged = extend(errors, error);
                this.setState({errors: merged})
            }
            else {
                error[attribute] = `${error[attribute]  } ${  convertKeyToLabel(attribute)  } is invalid.`;
                console.log("error: ", error);
                const merged = extend(errors, error);
                this.setState({errors: merged});
            }
        }

        if (attribute === "phoneNumber") {
            if (value.length !== 10) {
                error[attribute] = `${error[attribute]} ${convertKeyToLabel(attribute)} is invalid.`;
                console.log("error: ", error);
                const merged = extend(errors, error);
                this.setState({errors: merged});

            }
            else {
                error[attribute] = "";
                const merged = extend(errors, error);
                this.setState({errors: merged});
            }
        }

        const updatedContact = this.state.contact;
        updatedContact[attribute] = value;
        this.setState({contact: updatedContact});
    }

    deleteContact(id) {
        const {contacts} = this.state;
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        this.setState({contacts: updatedContacts});
    }

    contactChangeHandler(e, changedContact, mode) {
        const {contacts} = this.state;
        if (mode === EDIT) {
            const updatedContacts = contacts.map((contact) => {
                if (contact.id === changedContact.id) {
                    contact = changedContact;
                }
                return contact;
            });
            this.setState({contacts: updatedContacts});
        }
        else {
            this.setState({contacts: [...contacts, changedContact]});
        }
    }

    render() {
        const {contacts, headings, mode, contact, errors} = this.state;
        return (
          <div>
            <Row>
              <Button
                s={12}
                floating
                className='add-button'
                small="true"
                waves='light'
                icon='add'
                onClick={() => {
                            this.setState({
                                contact: {firstName: "", lastName: "", phoneNumber: "", status: "", email: ""},
                                mode: ADD
                            });
                            $('#addEditContactModal').modal('open')
                        }}
              />
            </Row>
            <List
              collection={contacts}
              headings={headings}
              setContactForEdit={this.setContactForEdit}
              deleteContact={this.deleteContact}
              mode={mode}
            />
            <AddEditContactModal
              mode={mode}
              contact={contact}
              contactChangeHandler={this.contactChangeHandler}
              updateContactProperty={this.updateContactProperty}
              errors={errors}
              isFormValid={isFormValid}
            />
          </div>
        );
    }
}
