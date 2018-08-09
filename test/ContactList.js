import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ContactList } from "../src/components/ContactList";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setContactForEdit(contact, mode) {

}
function deleteContact() {

}

describe('<ContactList>', function() {
  let contacts= [
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
      ]
      let mode= "Add";
      let setContactForEdit=setContactForEdit;
      let deleteContact= deleteContact;

  const wrapper = shallow(<ContactList contacts={contacts} mode={mode} setContactForEdit={setContactForEdit} deleteContact={deleteContact} />);

  it("always renders a Collection", () => {
  const collection = wrapper.find("Collection");
  expect(collection.length).to.be.equal(1);
});

  it('Check number of edit and delete links', function() {
    expect(wrapper.find('a').length).to.be.equal(4);
    expect(wrapper.find('Row').length).to.be.equal(3);
  });

  // it('Test button click', function() {
  //   wrapper.find('#openModalJohn').simulate('click');
  //   expect(wrapper.find('#addEditContactModal').hasClass('open')).to.equal(true);
  // });

  //
  // it('Test State after button click', function() {
  //   wrapper.find('button').simulate('click');
  //
  //   expect(wrapper.state().data).toBe('Data updated...');
  //   expect(wrapper.state('data')).toBe('Data updated...');
  // });
});
