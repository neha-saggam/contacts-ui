import React from "react";
import {CollectionItem, Icon, Col, Row, Collection} from 'react-materialize';

const DisplayCollectionItems = (props) => {
    const { collection, setContactForEdit, deleteContact, mode } = props;
    const collectionItems = collection.map((model) => {
        return (
          <CollectionItem key={model.email}>
            <Row className='center'>
              <Col s={3}>
                {model.firstName}
                {' '}
                {model.lastName}
              </Col>
              <Col s={2}>
                {model.email}
              </Col>
              <Col s={2}>
                {model.phoneNumber}
              </Col>
              <Col s={1}>
                {model.status}
              </Col>
              <Col s={1}>
                <a
                  id={`openModal${  model.firstName}`}
                  onClick={() => {
                            setContactForEdit(model, mode);
                            $('#addEditContactModal').modal('open')
                        }}
                >
                  <Icon>edit</Icon>
                </a>
              </Col>
              <Col s={1}>
                <a onClick={(e) => deleteContact(model.id, e)}><Icon>delete</Icon></a>
              </Col>
            </Row>
          </CollectionItem>
)
    });
    return collectionItems;
}
const List = (props) => {
    const {collection, mode, setContactForEdit, deleteContact, headings} = props;
    const renderHeadings = headings.map((heading) => {
        return (
          <Col s={heading.width || 2}>
            <b>{heading.name}</b>
          </Col>
        )

    });

    return (
      <Collection s={12} style={{marginLeft: 10, width: 50}}>
        <CollectionItem>
          <Row className='center'>
            {renderHeadings}
          </Row>
        </CollectionItem>
        <DisplayCollectionItems
          collection={collection}
          mode={mode}
          setContactForEdit={setContactForEdit}
          deleteContact={deleteContact}
        />
      </Collection>
    )
};

export default List;
