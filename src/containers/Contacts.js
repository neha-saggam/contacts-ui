import { connect } from 'react-redux';
import { getContacts } from '../actions/contacts_actions';
import { bindActionCreators } from 'redux';
import Contacts from '../components/Contacts';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
        getContacts: getContacts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
