import React from "react";
import ReactDOM from "react-dom";
import { Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';
import { NavBar } from './components/NavBar';
import { Contacts } from './components/Contacts';
import { Provider } from 'react-redux' //← Bridge React and Redux
import { createStore } from 'redux' // ← Main Redux library
import contacts from './reducers' // ← List of Reducers we created
import ContactsContainer from './containers/Contacts';
import "./index.css";

const store = createStore(contacts);

class Index extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
        <NavBar />
        <div className="content">
        <ContactsContainer />
        </div>
        </div>
     </Provider>
   );
}
}

  ReactDOM.render(<Index />, document.getElementById("index"));
