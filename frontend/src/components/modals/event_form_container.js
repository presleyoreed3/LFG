import {connect} from 'react-redux';
import EventForm from './event_form';
import { closeModal} from '../../actions/modal_actions';
import { createEvent } from '../../actions/event_actions';
import {updateUser} from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  return {
    user: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(mSTP, mDTP)(EventForm);