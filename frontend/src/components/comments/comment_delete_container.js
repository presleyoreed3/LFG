import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";
import { closeModal } from '../../actions/modal_actions';
import CommentDelete from "./comment_delete";


const mSTP = (state,ownProps) => {
  return {
    currentUser: state.session.user,
    commentId: ownProps.commentId
  }
} 

const mDTP = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mSTP,mDTP)(CommentDelete)