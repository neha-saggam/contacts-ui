import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from "../src/components/shared/List";

configure({adapter: new Adapter()});

function setContactForEdit(contact, mode) {

}

function deleteContact() {

}

describe('<List>', function () {
    const contacts = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@something.com",
            "phoneNumber": "1111111111",
            "status": "active"
        },
        {
            "id": 2,
            "firstName": "Alice",
            "lastName": "James",
            "email": "alicejames@something.com",
            "phoneNumber": "1122233669",
            "status": "active"
        }
    ];

    const headings = [{
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
        }];
    const mode = "Add";
    const setContactForEdit = setContactForEdit;
    const deleteContact = deleteContact;

    const wrapper = shallow(
      <List
        collection={contacts}
        headings={headings}
        setContactForEdit={setContactForEdit}
        deleteContact={deleteContact}
      />
    );

    it("always renders a Collection", () => {
        const collection = wrapper.find("Collection");
        expect(collection.length).to.be.equal(1);
    });

    it('Check number of edit and delete links', function () {
        expect(wrapper.find('a').length).to.be.equal(4);
        expect(wrapper.find('Row').length).to.be.equal(3);
    });
});
