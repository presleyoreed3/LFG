import { connect } from "react-redux";
import { updateComment } from "../../actions/comment_actions";
import CommentEdit from "./comment_edit";


{/* <CommentEditContainer comment={this.props.comment} currentUser={this.props.currentUser}/>  */}

const mSTP = (state,ownProps) => {
  // remember in comment index item to add currentUser to props
  return {
    comment: ownProps.comment,
    currentUser: ownProps.user
    // errors: state.errors.commentErrors
  }
}

const mDTP = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment))
  }
}

export default connect(mSTP,mDTP)(CommentEdit)