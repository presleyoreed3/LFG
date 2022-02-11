import {connect} from 'react-redux';
import EventShow from './events_show';
import {fetchEvent, fetchEvents, updateEvent} from '../../actions/event_actions';
import { updateUser } from '../../actions/user_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state,ownProps) => {
  return {
    events: state.entities.events,
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users,
    currentUser: state.session.user
    // event: state.entities.events[ownProps.match.params.eventId]

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

// Loop through and find the event we are on
// Find out if each attendee is followed or not followed by the currentUser
// Depending on that, we add a particular icon next to their name

// Also have to add followers to User friends array

// When click on Friend Events, change listings to those owned by your friends

// Throw in logic to UNFOLLOW a person and remove the friend from friend array of CurrentUser