import { combineReducers } from "redux";
import events from "./events_reducer";
import comments from './comments_reducer';

const entitiesReducer = combineReducers({
  events,
  comments
})

export default entitiesReducer;