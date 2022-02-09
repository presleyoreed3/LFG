import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EventFormContainer from './event_form_container';
import EventUpdateFormContainer from './event_update_form_container';
import CommentDeleteContainer from '../comments/comment_delete_container';
import './modal.scss';

function Modal({ modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal[0]) {
    case 'eventForm':
      component = <EventFormContainer/>;
      break;
    case 'eventUpdateForm':
      component = <EventUpdateFormContainer eventId={modal[1]}/>;
      break;
    case 'deleteComment':
      component = <CommentDeleteContainer commentId={modal[1]}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
