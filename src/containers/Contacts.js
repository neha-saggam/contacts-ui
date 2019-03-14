import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContacts } from '../actions/contacts_actions';
import Contacts from '../components/Contacts';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  console.log("getContacts: ", getContacts);
  return bindActionCreators({
        getContacts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
