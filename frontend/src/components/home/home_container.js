import { connect } from "react-redux";
import Home from './home'
import { fetchEvents } from "../../actions/event_actions";

const mSTP = (state) => {
  return {
    events: state.entities.events
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
    // fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mSTP, mDTP)(Home)