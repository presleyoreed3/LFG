import {connect} from 'react-redux';
import EventDelete from './event_delete';
import {openModal, closeModal} from '../../actions/modal_actions';
import { updateEvent, fetchEvents, deleteEvent } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';
import { fetchUsers, updateUser } from '../../actions/user_actions';

const mSTP = state => {
  return {
    user: state.session.user,
    events: state.entities.events,
    users: state.entities.users
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateEvent: (event) => dispatch(updateEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default withRouter(connect(mSTP, mDTP)(EventDelete));