import {connect} from 'react-redux';
import EventDelete from './event_delete';
import {openModal, closeModal} from '../../actions/modal_actions';
import { updateEvent, fetchEvents, deleteEvent } from '../../actions/event_actions';
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
    updateEvent: (event) => dispatch(updateEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
  }
}

export default withRouter(connect(mSTP, mDTP)(EventDelete));