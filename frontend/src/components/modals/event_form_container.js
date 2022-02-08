import {connect} from 'react-redux';
import EventForm from './event_form';
import {openModal, closeModal} from '../../actions/modal_actions';


const mSTP = state => {
  return {
    
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(EventForm);