import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_NEW_EVENT } from "../actions/event_actions";

const EventsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);

  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events.data;
    case RECEIVE_EVENT:
      nextState[action.event.data.index] = action.event.data;
      return nextState;
    case RECEIVE_NEW_EVENT:
      nextState.push(action.event.data)
      return nextState;
    default:
      return state;
  }
}

export default EventsReducer