import { connect } from "react-redux";
import { updateComment, fetchEventComments } from "../../actions/comment_actions";
import CommentEdit from "./comment_edit";


{/* <CommentEditContainer comment={this.props.comment} currentUser={this.props.currentUser}/>  */}

const mSTP = (state,ownProps) => {
  // remember in comment index item to add currentUser to props
  return {
    comment: ownProps.comment,
    currentUser: ownProps.currentUser,
    // comments: state.entities.comments,
    eventId: ownProps.eventId
    // errors: state.errors.commentErrors
  }
}

const mDTP = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment)),
    // fetchEventComments: (eventId) => dispatch(fetchEventComments(eventId))
  }
}

export default connect(mSTP,mDTP)(CommentEdit)