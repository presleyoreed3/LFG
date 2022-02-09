import { combineReducers } from "redux";
import events from "./events_reducer";
import comments from './comments_reducer';
import users from './user_reducer'

const entitiesReducer = combineReducers({
  events,
  comments,
  users
})

export default entitiesReducer;