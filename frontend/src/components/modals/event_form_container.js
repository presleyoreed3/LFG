import {connect} from 'react-redux';
import EventForm from './event_form';
// import {openModal, closeModal} from '../../actions/modal_actions';
import { createEvent } from '../../actions/event_actions';

const mSTP = state => {
  return {
    user: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    // closeModal: () => dispatch(closeModal()),
    // openModal: (modal) => dispatch(openModal(modal)),
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(mSTP, mDTP)(EventForm);