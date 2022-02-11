import { connect } from "react-redux";
import Home from './home'
import { fetchEvents } from "../../actions/event_actions";
import { updateUser, fetchUsers } from "../../actions/user_actions";

const mSTP = (state) => {
  return {
    events: state.entities.events,
    currentUser: state.session.user,
    users: state.entities.users
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
    // fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mSTP, mDTP)(Home)