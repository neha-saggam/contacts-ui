# Simple Contacts Application

Simple Contacts Application is a contact management application implemented in Reactjs 16.4. This application helps user to list, create, update and delete the contacts using simple GUI web-app.

## Technology Stack

1. Reactjs 16.4
2. Webpack 4.0

## Instructions

**To run the application in development mode**

1.  Clone this repo:
```
git clone https://github.com/neha-saggam/contacts-ui
```

2.  To install dependencies
```
npm install
```

3.  To run application:
```
npm run start
```

Note: This will open **localhost:8080** in your default browser.


**To run the application in production mode**

1.  To deploy, run:
```
npm run build
```

**To execute unit test cases**
```
npm run test
```

**Applicaiton is hosted [here](https://neha-saggam.github.io/contacts-ui/)**

### TODO:

I am keeping following tasks open, as they are trivial and if someone wants to contribute these are good way to start.

- Use Radio buttons for *Status* field
- Add multiple delete feature

### Future scope:

- The current implementation does not store data persistently due to unavailability of persistent DB server.
- A REST based backend service can be implemented to store user information.
