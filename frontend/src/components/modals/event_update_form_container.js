import {connect} from 'react-redux';
import EventUpdateForm from './event_update_form';
import {openModal, closeModal} from '../../actions/modal_actions';
import { updateEvent, fetchEvents } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';

const mSTP = state => {
  return {
    user: state.session.user,
    events: state.entities.events
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    // openModal: (modal) => dispatch(openModal(modal)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default withRouter(connect(mSTP, mDTP)(EventUpdateForm));