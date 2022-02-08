import {connect} from 'react-redux';
import EventShow from './events_show';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';

const mSTP = (state,ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    // fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mSTP,mDTP)(EventShow)
