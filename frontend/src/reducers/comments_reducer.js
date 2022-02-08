import { RECEIVE_EVENT_COMMENTS, RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EVENT_COMMENTS:
      return action.comments.data;
    default:
      return state;
  }
}

export default CommentsReducer