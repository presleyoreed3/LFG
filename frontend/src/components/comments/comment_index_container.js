import { connect } from "react-redux";
import { fetchEventComments, createComment } from "../../actions/comment_actions";
import {fetchUsers} from '../../actions/user_actions'
import CommentIndex from './comment_index';
import {openModal} from '../../actions/modal_actions';


const mSTP = (state,ownProps) => {

  return {
    comments: state.entities.comments,
    users: state.entities.users,
    eventId: ownProps.eventId,
    currentUser: state.session.user
    // errors: state.errors.commentErrors
  }
}

const mDTP = (dispatch) => {
  return {
    fetchEventComments: eventId => dispatch(fetchEventComments(eventId)),
    fetchUsers: () => dispatch(fetchUsers()),
    createComment: (comment) => dispatch(createComment(comment)),
    openModal: (modal, commentId) => dispatch(openModal(modal, commentId))
  }
}

export default connect(mSTP,mDTP)(CommentIndex)