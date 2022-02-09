import {connect} from 'react-redux';
import EventShow from './events_show';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state,ownProps) => {
  return {
    events: state.entities.events,
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users
    currentUser: state.session.user
    // event: state.entities.events[ownProps.match.params.eventId]

  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    openModal: (modal, eventId) => dispatch(openModal(modal, eventId))
  }
}

export default connect(mSTP,mDTP)(EventShow)
