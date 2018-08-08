export function getContacts() {
  return {
    type: 'FETCH_CONTACTS_SUCCESSFUL',
    payload: [
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
  }
};
