import { RECEIVE_EVENT_COMMENTS, RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);
  switch (action.type) {
    case RECEIVE_EVENT_COMMENTS:
      return action.comments.data;
    case RECEIVE_COMMENT:
      nextState[action.comment.data.index] = action.comment.data
      return nextState
    case RECEIVE_NEW_COMMENT:
      nextState.push(action.comment.data)
      return nextState
    case REMOVE_COMMENT:
      for (let i = 0; i < nextState.length; i++) {
        if (nextState[i]._id === action.commentId) {
          nextState[i] = "";
          return nextState;
        }
      }
    default:
      return state;
  }
}

export default CommentsReducer