import { connect } from "react-redux";
import Home from './home'
import { fetchEvents } from "../../actions/event_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state) => {
  return {
    events: state.entities.events,
    currentUser: state.session.user,
    users: state.entities.users,
    loggedIn: state.session.isAuthenticated
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchUsers: () => dispatch(fetchUsers(0))
  }
}

export default connect(mSTP, mDTP)(Home)