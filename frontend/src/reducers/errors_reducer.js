import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import CommentErrorsReducer from "./comment_errors_reducer";
import EventErrorsReducer from "./event_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  comment: CommentErrorsReducer,
  event: EventErrorsReducer
});
