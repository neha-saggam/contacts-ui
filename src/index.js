import React from "react";
import ReactDOM from "react-dom";
import { Collection, CollectionItem, Icon, Col, Row, Modal, Button, Input} from 'react-materialize';
import { NavBar } from './components/NavBar';
import { Contacts } from './components/Contacts';
import "./index.css"

class Index extends React.Component {

  render() {
    return (
    <div>
      <NavBar />
      <div className="content">
      <Contacts />
      </div>
    </div>
    );
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
