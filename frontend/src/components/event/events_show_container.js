import {connect} from 'react-redux';
import EventShow from './events_show';
import {fetchEvent} from '../../actions/event_actions';

const mSTP = (state,ownProps) => {
  return {
    events: state.entities.events[ownProps.match.params.eventId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mSTP,mDTP)(EventShow)
