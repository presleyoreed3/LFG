import {connect} from 'react-redux';
import EventShow from './events_show';
import {fetchEvents, updateEvent} from '../../actions/event_actions';
import { updateUser } from '../../actions/user_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state,ownProps) => {
  return {
    events: state.entities.events,
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users,
    currentUser: state.session.user
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    openModal: (modal, eventId) => dispatch(openModal(modal, eventId)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mSTP,mDTP)(EventShow)
