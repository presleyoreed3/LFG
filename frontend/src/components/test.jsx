import React from "react";
import {connect} from 'react-redux';
import {openModal, closeModal} from '../actions/modal_actions';

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.openModal('eventForm')}></button>
      </div>
    )
  }
}

const mSTP = state => {
  return {
    user: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(Test)