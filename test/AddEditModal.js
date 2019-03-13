import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddEditContactModal from "../src/components/AddEditContactModal";

configure({adapter: new Adapter()});

function updateContactProperty() {

}

function contactChangeHandler() {

}

function isFormValid(errors) {

}

describe('<AddEditContactModal>', function () {
    const contact = {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@something.com",
        "phoneNumber": "1111111111",
        "status": "active"
    };
    const errors = {};
    const mode = "Edit";

    const wrapper = shallow(<AddEditContactModal
      mode={mode}
      contact={contact}
      contactChangeHandler={contactChangeHandler}
      updateContactProperty={updateContactProperty}
      errors={errors}
      isFormValid={isFormValid}
    />);

    it("always renders a Modal", () => {
        const modal = wrapper.find("Modal");
        expect(modal.length).to.be.equal(1);
    });

    it("always renders 6 input boxes", () => {
        const inputs = wrapper.find("Input");
        expect(inputs.length).to.be.equal(5);
    });

    it('Check save and close buttons', function () {
        expect(wrapper.find("Button").length).to.be.equal(2);
    });

});
