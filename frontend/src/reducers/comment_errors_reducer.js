import { RECEIVE_COMMENT_ERRORS } from "../actions/comment_actions";

const _nullErrors = [];

const CommentErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      debugger
      // action.errors.response.data gives me proxy errors
      return action.errors;
    default:
      return state;
  }
};

export default CommentErrorsReducer;