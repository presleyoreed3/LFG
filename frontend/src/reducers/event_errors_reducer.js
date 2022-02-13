import { RECEIVE_NEW_EVENT, RECEIVE_EVENT, RECEIVE_EVENT_ERRORS } from "../actions/event_actions";

const _nullErrors = [];

const EventErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      debugger
      return action.errors;
    case RECEIVE_NEW_EVENT:
      return _nullErrors;
    case RECEIVE_EVENT:
      return _nullErrors;
    default:
      return state;
  }
};

export default EventErrorsReducer;